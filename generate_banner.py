import os
import random
import numpy as np
from PIL import Image, ImageOps, ImageEnhance, ImageFilter, ImageDraw
from scipy.ndimage import binary_closing, binary_fill_holes
from scipy.spatial import cKDTree

# -------------------------------------------------------------
# Configuration & Palette Setup
# -------------------------------------------------------------
# Dark Theme Palette
DARK_PALETTE = {
    'bg': '#0A101F',
    'panel_bg': '#0E172A',
    'border': '#1E293B',
    'ui_chrome': '#22D3EE',
    'ui_chrome_dim': '#0891B2',
    'portrait': '#A78BFA',
    'accent': '#10B981',
    'text_primary': '#F8FAFC',
    'text_muted': '#94A3B8',
    'dots_leader': '#1E293B',
    'pill_bg': '#0B2938',
    'pill_border': '#22D3EE',
    'live_red': '#EF4444'
}

# Light Theme Palette
LIGHT_PALETTE = {
    'bg': '#F8FAFC',
    'panel_bg': '#FFFFFF',
    'border': '#E2E8F0',
    'ui_chrome': '#0891B2',
    'ui_chrome_dim': '#0E7490',
    'portrait': '#7C3AED',
    'accent': '#059669',
    'text_primary': '#0F172A',
    'text_muted': '#64748B',
    'dots_leader': '#CBD5E1',
    'pill_bg': '#CFFAFE',
    'pill_border': '#0891B2',
    'live_red': '#DC2626'
}

# Grid & Layout Parameters
GRID_W, GRID_H = 300, 340
FRAME_X, FRAME_Y = 35, 65
FRAME_W, FRAME_H = 430, 515
SCALE_X = 1.30
SCALE_Y = 1.30
PORTRAIT_OFFSET_X = FRAME_X + (FRAME_W - (GRID_W * SCALE_X)) / 2
PORTRAIT_OFFSET_Y = FRAME_Y + 45

# -------------------------------------------------------------
# 1. Image Preprocessing & Floyd-Steinberg Dithering
# -------------------------------------------------------------
def get_dithered_matrix(image_path, mode='dark'):
    img = Image.open(image_path)
    w, h = img.size
    
    # Crop head + shoulders (300:340 aspect ratio = ~0.8823)
    target_ratio = GRID_W / GRID_H
    crop_h = int(h * 0.96)
    crop_w = int(crop_h * target_ratio)
    left = (w - crop_w) // 2
    top = int(h * 0.02)
    cropped = img.crop((left, top, left + crop_w, top + crop_h)).resize((GRID_W, GRID_H), Image.Resampling.LANCZOS)
    
    # Segmentation for dark mode: detect white/light studio background
    arr_rgb = np.array(cropped)
    # Background in profile-suit.jpg is near white > 200
    bg_mask = (arr_rgb[:,:,0] > 195) & (arr_rgb[:,:,1] > 195) & (arr_rgb[:,:,2] > 195)
    fg_mask = ~bg_mask
    fg_mask = binary_closing(fg_mask, structure=np.ones((5,5)))
    fg_mask = binary_fill_holes(fg_mask)
    
    # Contrast 1.3x only, with autocontrast(cutoff=1) + UnsharpMask(radius=3, percent=140)
    enhanced = ImageOps.autocontrast(cropped, cutoff=1)
    enhanced = ImageEnhance.Contrast(enhanced).enhance(1.3)
    enhanced = enhanced.filter(ImageFilter.UnsharpMask(radius=3, percent=140))
    gray = np.array(enhanced.convert('L'), dtype=float)
    
    # Serpentine Floyd-Steinberg
    out = np.zeros((GRID_H, GRID_W), dtype=np.uint8)
    
    # For dark mode: dots draw the lit subject on the panel
    # For light mode: dots draw the dark parts
    if mode == 'dark':
        target_img = gray.copy()
    else:
        target_img = (255.0 - gray).copy()
        
    for y in range(GRID_H):
        if y % 2 == 0:
            x_range = range(GRID_W)
            direction = 1
        else:
            x_range = range(GRID_W - 1, -1, -1)
            direction = -1
            
        for x in x_range:
            old_val = target_img[y, x]
            new_val = 255.0 if old_val > 127.5 else 0.0
            out[y, x] = 255 if new_val == 255.0 else 0
            err = old_val - new_val
            
            if direction == 1:
                if x + 1 < GRID_W:
                    target_img[y, x + 1] += err * 7 / 16
                if y + 1 < GRID_H:
                    if x - 1 >= 0:
                        target_img[y + 1, x - 1] += err * 3 / 16
                    target_img[y + 1, x] += err * 5 / 16
                    if x + 1 < GRID_W:
                        target_img[y + 1, x + 1] += err * 1 / 16
            else:
                if x - 1 >= 0:
                    target_img[y, x - 1] += err * 7 / 16
                if y + 1 < GRID_H:
                    if x + 1 < GRID_W:
                        target_img[y + 1, x + 1] += err * 3 / 16
                    target_img[y + 1, x] += err * 5 / 16
                    if x - 1 >= 0:
                        target_img[y + 1, x - 1] += err * 1 / 16

    # Mask out background in dark mode
    if mode == 'dark':
        out[~fg_mask] = 0
        
    return out

# -------------------------------------------------------------
# 2. Run-Length Encoding to <path> for Compactness & crispEdges
# -------------------------------------------------------------
def matrix_to_path_runs(matrix, scale_x, scale_y, offset_x, offset_y):
    """
    Combines contiguous horizontal dots into crisp path segments:
    M x,y h L.
    """
    runs = []
    dot_w = scale_x
    dot_h = scale_y
    
    for y in range(matrix.shape[0]):
        x = 0
        while x < matrix.shape[1]:
            if matrix[y, x] > 0:
                start_x = x
                while x < matrix.shape[1] and matrix[y, x] > 0:
                    x += 1
                length = (x - start_x) * dot_w
                px = offset_x + start_x * dot_w
                py = offset_y + y * dot_h
                runs.append((px, py, length, dot_h))
            else:
                x += 1
    return runs

# -------------------------------------------------------------
# 3. Logo Generation & Optimal Transport Sampling
# -------------------------------------------------------------
def sample_logo_points(logo_type, n_points=900):
    img = Image.new('L', (GRID_W, GRID_H), 0)
    draw = ImageDraw.Draw(img)
    cx, cy = 150, 170
    
    if logo_type == 'python':
        # Top snake body & head
        draw.rounded_rectangle([95, 95, 175, 175], radius=24, fill=255)
        draw.rounded_rectangle([135, 95, 205, 140], radius=16, fill=255)
        draw.ellipse([125, 112, 137, 124], fill=0) # eye
        # Bottom snake body & head
        draw.rounded_rectangle([125, 165, 205, 245], radius=24, fill=255)
        draw.rounded_rectangle([95, 200, 165, 245], radius=16, fill=255)
        draw.ellipse([163, 216, 175, 228], fill=0) # eye
        
    elif logo_type == 'code':
        # Left bracket <
        draw.line([(135, 115), (80, 170), (135, 225)], fill=255, width=16)
        # Slash /
        draw.line([(135, 235), (165, 105)], fill=255, width=14)
        # Right bracket >
        draw.line([(165, 115), (220, 170), (165, 225)], fill=255, width=16)
        
    elif logo_type == 'react':
        # Center nucleus
        draw.ellipse([cx - 16, cy - 16, cx + 16, cy + 16], fill=255)
        # 3 Orbiting rings
        for angle in [0, 60, 120]:
            rad = np.radians(angle)
            theta = np.linspace(0, 2 * np.pi, 250)
            a, b = 80, 30
            xr = a * np.cos(theta) * np.cos(rad) - b * np.sin(theta) * np.sin(rad) + cx
            yr = a * np.cos(theta) * np.sin(rad) + b * np.sin(theta) * np.cos(rad) + cy
            pts = list(zip(xr, yr))
            draw.line(pts, fill=255, width=9)

    arr = np.array(img)
    ys, xs = np.where(arr > 128)
    total_pts = len(xs)
    
    # Subsample to exact count
    indices = np.linspace(0, total_pts - 1, n_points, dtype=int)
    sampled_x = xs[indices].astype(float)
    sampled_y = ys[indices].astype(float)
    return np.column_stack([sampled_x, sampled_y])

def match_optimal_transport(source_pts, target_pts):
    """
    Nearest neighbor matching with KDTree to minimize path distance
    between morphing shapes.
    """
    tree = cKDTree(target_pts)
    matched_target = np.zeros_like(source_pts)
    used = set()
    
    for i, pt in enumerate(source_pts):
        dists, idxs = tree.query(pt, k=min(20, len(target_pts)))
        chosen_idx = idxs[0] if np.isscalar(idxs) else idxs[0]
        if not np.isscalar(idxs):
            for candidate in idxs:
                if candidate not in used:
                    chosen_idx = candidate
                    break
        used.add(chosen_idx)
        matched_target[i] = target_pts[chosen_idx]
    return matched_target

# -------------------------------------------------------------
# 4. Generate Complete Animated SVG
# -------------------------------------------------------------
def build_svg(palette, mode='dark'):
    # Load dither matrix
    img_path = 'public/profile-suit.jpg' if os.path.exists('public/profile-suit.jpg') else 'public/profile.jpg'
    dither = get_dithered_matrix(img_path, mode=mode)
    runs = matrix_to_path_runs(dither, SCALE_X, SCALE_Y, PORTRAIT_OFFSET_X, PORTRAIT_OFFSET_Y)
    
    # Partition runs into 60 interleaved random groups for intro shimmer
    random.seed(42)
    n_groups = 60
    groups = [[] for _ in range(n_groups)]
    
    # Add per-dot / per-run noise (sigma ~ 4) before grouping to prevent grid blockiness
    for run in runs:
        grp_idx = random.randint(0, n_groups - 1)
        groups[grp_idx].append(run)

    # 94 drift bands for portrait loop
    # Drift centroid toward logo centroid (150 * SCALE_X + offset, 170 * SCALE_Y + offset)
    logo_cx = PORTRAIT_OFFSET_X + 150 * SCALE_X
    logo_cy = PORTRAIT_OFFSET_Y + 170 * SCALE_Y
    
    # Sample 3 logos and match paths
    N_TRAVELLERS = 850
    pts_logo1 = sample_logo_points('python', N_TRAVELLERS)
    pts_logo2 = sample_logo_points('code', N_TRAVELLERS)
    pts_logo3 = sample_logo_points('react', N_TRAVELLERS)
    
    pts_logo2_matched = match_optimal_transport(pts_logo1, pts_logo2)
    pts_logo3_matched = match_optimal_transport(pts_logo2_matched, pts_logo3)
    pts_logo1_return = match_optimal_transport(pts_logo3_matched, pts_logo1)

    # Convert logo coords to terminal canvas coords
    pts1_world = np.column_stack([
        PORTRAIT_OFFSET_X + pts_logo1[:, 0] * SCALE_X,
        PORTRAIT_OFFSET_Y + pts_logo1[:, 1] * SCALE_Y
    ])
    pts2_world = np.column_stack([
        PORTRAIT_OFFSET_X + pts_logo2_matched[:, 0] * SCALE_X,
        PORTRAIT_OFFSET_Y + pts_logo2_matched[:, 1] * SCALE_Y
    ])
    pts3_world = np.column_stack([
        PORTRAIT_OFFSET_X + pts_logo3_matched[:, 0] * SCALE_X,
        PORTRAIT_OFFSET_Y + pts_logo3_matched[:, 1] * SCALE_Y
    ])

    # Right side rows
    system_rows = [
        ("Subject", "Shrri Dharshan"),
        ("Role", "B.Tech CSE | Cyber Physical Systems"),
        ("Origin", "Tamil Nadu, India"),
        ("Education", "B.Tech CSE @ VIT Chennai, 2027"),
        ("Status", "Building + Learning + Shipping"),
        ("ToolChain", "VS Code, Git, Postman, Figma"),
        ("Core.Lang", "Python, JavaScript, C++, SQL"),
        ("Core.Frontend", "React, HTML5, CSS3, Tailwind"),
        ("Core.Backend", "FastAPI, REST APIs, Node.js"),
        ("Core.Database", "SQL, SQLite, ChromaDB"),
        ("Core.Infra", "AWS EC2, Oracle Cloud (OCI)"),
        ("Grid.Mail", "shrridharshanravikumar@gmail.com"),
        ("Grid.Portfolio", "shrri-dharshan-portfolio.vercel.app"),
        ("Grid.LinkedIn", "in/shrri-dharshan-d-r-47ba112b1"),
        ("Grid.GitHub", "github.com/shrridharshan27"),
        ("Grid.Instagram", "instagram.com/shrri.dharshan"),
    ]

    svg = []
    svg.append(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1180 610" width="1180" height="610" style="background:{palette["bg"]}; font-family:\'JetBrains Mono\', monospace, sans-serif;">')
    
    # Styles & Animations
    svg.append('<defs>')
    svg.append('<style>')
    svg.append(f'''
        .term-title {{ font-size: 13px; fill: {palette["text_muted"]}; font-weight: 500; text-anchor: middle; }}
        .frame-header {{ font-size: 13px; fill: {palette["ui_chrome"]}; font-weight: 700; letter-spacing: 1px; }}
        .header-sub {{ font-size: 11px; fill: {palette["text_muted"]}; }}
        .info-label {{ font-size: 13.5px; fill: {palette["text_muted"]}; font-weight: 500; }}
        .info-value {{ font-size: 13.5px; fill: {palette["text_primary"]}; font-weight: 600; text-anchor: end; }}
        .pill-text {{ font-size: 13px; fill: {palette["ui_chrome"]}; font-weight: 700; }}
        .live-text {{ font-size: 12px; fill: {palette["live_red"]}; font-weight: 700; letter-spacing: 0.5px; }}
    ''')
    svg.append('</style>')
    svg.append('</defs>')

    # Window Container & Header
    svg.append(f'<rect x="15" y="15" width="1150" height="580" rx="14" fill="{palette["panel_bg"]}" stroke="{palette["border"]}" stroke-width="1.5" />')
    svg.append(f'<line x1="15" y1="52" x2="1165" y2="52" stroke="{palette["border"]}" stroke-width="1" />')

    # Traffic light dots
    svg.append('<circle cx="38" cy="34" r="5.5" fill="#EF4444" />')
    svg.append('<circle cx="56" cy="34" r="5.5" fill="#F59E0B" />')
    svg.append('<circle cx="74" cy="34" r="5.5" fill="#10B981" />')

    # Terminal Title
    svg.append(f'<text x="590" y="38" class="term-title">profile.sh --live</text>')

    # LEFT COLUMN: Portrait Frame (VISUAL.MAP)
    svg.append(f'<rect x="{FRAME_X}" y="{FRAME_Y}" width="{FRAME_W}" height="{FRAME_H}" rx="10" fill="{palette["bg"]}" stroke="{palette["border"]}" stroke-width="1.2" />')
    svg.append(f'<text x="{FRAME_X + 16}" y="{FRAME_Y + 26}" class="frame-header">VISUAL.MAP</text>')
    svg.append(f'<text x="{FRAME_X + FRAME_W - 16}" y="{FRAME_Y + 26}" class="header-sub" text-anchor="end">[300×340 DITHER]</text>')
    svg.append(f'<line x1="{FRAME_X}" y1="{FRAME_Y + 38}" x2="{FRAME_X + FRAME_W}" y2="{FRAME_Y + 38}" stroke="{palette["border"]}" stroke-width="1" />')

    # Portrait Dots Layer (Intro Fade + Loop Dissolve)
    # Loop timing: 14.2s total:
    # 0s - 3.0s: Portrait visible (opacity 1)
    # 3.0s - 4.3s: Portrait fades out (1 -> 0)
    # 4.3s - 12.9s: Portrait hidden (0)
    # 12.9s - 14.2s: Portrait fades back in (0 -> 1)
    # keyTimes: 0; 0.211; 0.303; 0.908; 1.000
    portrait_keytimes = "0; 0.211; 0.303; 0.908; 1"
    portrait_opacities = "1; 1; 0; 0; 1"

    svg.append(f'<g id="portrait-layer">')
    # Loop animation for portrait container
    svg.append(f'<animate attributeName="opacity" values="{portrait_opacities}" keyTimes="{portrait_keytimes}" dur="14.2s" begin="3.2s" repeatCount="indefinite" />')

    # Staggered intro groups for the shimmer
    for i, grp in enumerate(groups):
        if not grp:
            continue
        delay = round((i / n_groups) * 2.0, 3)
        # Combine runs into a single <path>
        path_data = []
        for (px, py, length, dot_h) in grp:
            path_data.append(f'M{px:.1f},{py:.1f}h{length:.1f}')
        d_str = " ".join(path_data)
        
        svg.append(f'<path d="{d_str}" stroke="{palette["portrait"]}" stroke-width="{SCALE_Y:.1f}" shape-rendering="crispEdges">')
        # Intro fade-in animation
        svg.append(f'<animate attributeName="opacity" from="0" to="1" dur="0.8s" begin="{delay}s" fill="freeze" />')
        svg.append('</path>')
    svg.append('</g>')

    # Travellers Layer (900 Dots Morphing Between Logos)
    # Keytimes across 14.2s:
    # 0s - 3.0s: Portrait hold (travellers hidden, opacity 0)
    # 3.0s - 4.3s: Morph to Logo 1 (opacity 0 -> 1, pos -> logo1)
    # 4.3s - 6.3s: Hold Logo 1 (opacity 1)
    # 6.3s - 7.6s: Morph Logo 1 -> Logo 2 (opacity 1, pos -> logo2)
    # 7.6s - 9.6s: Hold Logo 2 (opacity 1)
    # 9.6s - 10.9s: Morph Logo 2 -> Logo 3 (opacity 1, pos -> logo3)
    # 10.9s - 12.9s: Hold Logo 3 (opacity 1)
    # 12.9s - 14.2s: Disperse to Portrait & Fade Out (opacity 1 -> 0, pos -> logo1)
    traveller_keytimes = "0; 0.211; 0.303; 0.444; 0.535; 0.676; 0.768; 0.908; 1"
    traveller_opacities = "0; 0; 1; 1; 1; 1; 1; 1; 0"

    svg.append(f'<g id="travellers-layer">')
    svg.append(f'<animate attributeName="opacity" values="{traveller_opacities}" keyTimes="{traveller_keytimes}" dur="14.2s" begin="3.2s" repeatCount="indefinite" />')

    for i in range(N_TRAVELLERS):
        x1, y1 = pts1_world[i]
        x2, y2 = pts2_world[i]
        x3, y3 = pts3_world[i]
        
        # Position values for keyframes
        xs = f"{x1:.1f}; {x1:.1f}; {x1:.1f}; {x1:.1f}; {x2:.1f}; {x2:.1f}; {x3:.1f}; {x3:.1f}; {x1:.1f}"
        ys = f"{y1:.1f}; {y1:.1f}; {y1:.1f}; {y1:.1f}; {y2:.1f}; {y2:.1f}; {y3:.1f}; {y3:.1f}; {y1:.1f}"
        
        svg.append(f'<circle cx="{x1:.1f}" cy="{y1:.1f}" r="1.4" fill="{palette["ui_chrome"]}" opacity="0">')
        svg.append(f'<animate attributeName="cx" values="{xs}" keyTimes="{traveller_keytimes}" dur="14.2s" begin="3.2s" repeatCount="indefinite" />')
        svg.append(f'<animate attributeName="cy" values="{ys}" keyTimes="{traveller_keytimes}" dur="14.2s" begin="3.2s" repeatCount="indefinite" />')
        svg.append(f'<animate attributeName="opacity" values="{traveller_opacities}" keyTimes="{traveller_keytimes}" dur="14.2s" begin="3.2s" repeatCount="indefinite" />')
        svg.append('</circle>')
    svg.append('</g>')

    # RIGHT COLUMN: SYSTEM.INFO Readout
    INFO_X = 495
    INFO_Y = FRAME_Y
    INFO_W = 650
    INFO_H = FRAME_H

    # Header: SYSTEM.INFO + Pulsing LIVE Badge + Pill Handle
    svg.append(f'<text x="{INFO_X}" y="{INFO_Y + 26}" class="frame-header">SYSTEM.INFO</text>')
    
    # Pulsing red LIVE badge
    svg.append(f'<circle cx="{INFO_X + 130}" cy="{INFO_Y + 22}" r="4" fill="{palette["live_red"]}"><animate attributeName="opacity" values="1; 0.2; 1" dur="1.8s" repeatCount="indefinite" /></circle>')
    svg.append(f'<text x="{INFO_X + 142}" y="{INFO_Y + 26}" class="live-text">LIVE</text>')

    # Colored Pill with Handle
    pill_w = 175
    pill_x = INFO_X + INFO_W - pill_w - 5
    pill_y = INFO_Y + 9
    svg.append(f'<rect x="{pill_x}" y="{pill_y}" width="{pill_w}" height="26" rx="13" fill="{palette["pill_bg"]}" stroke="{palette["pill_border"]}" stroke-width="1.2" />')
    svg.append(f'<text x="{pill_x + pill_w / 2}" y="{pill_y + 17.5}" class="pill-text" text-anchor="middle">@shrridharshan27</text>')

    # Divider below header
    svg.append(f'<line x1="{INFO_X}" y1="{INFO_Y + 38}" x2="{INFO_X + INFO_W}" y2="{INFO_Y + 38}" stroke="{palette["border"]}" stroke-width="1" />')

    # Rows with dotted leaders
    row_y_start = INFO_Y + 68
    row_spacing = 27.5
    right_x = INFO_X + INFO_W - 5

    for idx, (label, val) in enumerate(system_rows):
        cur_y = row_y_start + idx * row_spacing
        
        # Calculate text width approximations for leader line
        label_px = len(label) * 8.5
        val_px = len(val) * 8.6
        line_start = INFO_X + label_px + 8
        line_end = right_x - val_px - 8
        
        # Label
        svg.append(f'<text x="{INFO_X}" y="{cur_y}" class="info-label">{label}</text>')
        
        # Dotted leader
        if line_end > line_start + 10:
            svg.append(f'<line x1="{line_start:.1f}" y1="{cur_y - 4}" x2="{line_end:.1f}" y2="{cur_y - 4}" stroke="{palette["dots_leader"]}" stroke-dasharray="3,4" stroke-width="1.5" />')
            
        # Value locked with textLength + lengthAdjust="spacingAndGlyphs"
        svg.append(f'<text x="{right_x}" y="{cur_y}" class="info-value" textLength="{val_px:.1f}" lengthAdjust="spacingAndGlyphs">{val}</text>')

    svg.append('</svg>')
    return "\n".join(svg)

# -------------------------------------------------------------
# 5. Output Execution
# -------------------------------------------------------------
if __name__ == '__main__':
    dark_svg = build_svg(DARK_PALETTE, mode='dark')
    with open('dark.svg', 'w', encoding='utf-8') as f:
        f.write(dark_svg)
    print(f'dark.svg generated ({len(dark_svg.encode("utf-8")) / 1024:.1f} KB)')

    light_svg = build_svg(LIGHT_PALETTE, mode='light')
    with open('light.svg', 'w', encoding='utf-8') as f:
        f.write(light_svg)
    print(f'light.svg generated ({len(light_svg.encode("utf-8")) / 1024:.1f} KB)')
