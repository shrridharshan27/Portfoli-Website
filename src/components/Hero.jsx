import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowDown, 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  ShieldCheck, 
  Terminal, 
  Compass,
  Cpu, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const canvasRef = useRef(null);
  const [photoVariant, setPhotoVariant] = useState('modern');

  // Interactive Particle Canvas (Freefall Starfield / Cyber Descent)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Particle nodes
    const count = 75;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedY: Math.random() * 0.8 + 0.3,
      alpha: Math.random() * 0.7 + 0.2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.y += p.speedY;
        if (p.y > canvas.height) {
          p.y = 0;
          p.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-32 pb-24 flex flex-col justify-between overflow-hidden bg-void"
    >
      {/* Background Interactive Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
      />

      {/* Atmospheric Cinematic Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-cyan-500/10 via-indigo-600/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        
        {/* Top Telemetry Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-12 font-mono text-xs text-ash tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span className="text-bone font-semibold">CHAPTER 01 // THE SURFACE</span>
          </div>

          <div className="hidden sm:flex items-center gap-6">
            <span>VIT CHENNAI · 2027</span>
            <span>ALTITUDE: 12,400 M</span>
            <span className="text-cyan-400">SYS_STATUS: ACTIVE</span>
          </div>
        </div>

        {/* Main Grid: Cinematic Typography + Visual Core */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Giant Freefall Display Headline */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Super Header Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-mono text-xs tracking-wider">
              <span>AI/ML DEVELOPER · CYBERSECURITY ENTHUSIAST</span>
            </div>

            {/* Giant Screen-Filling Monolith Name */}
            <div className="space-y-1">
              <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black text-bone uppercase tracking-[-0.04em] leading-[0.92] font-display">
                SHRRI<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-bone via-cyan-400 to-cyan-200">
                  DHARSHAN
                </span>
                <span className="text-cyan-400 ml-2">D R</span>
              </h1>

              {/* Editorial Serif Subtitle (Freefall Style) */}
              <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-bone/90 pt-4 leading-[1.2] max-w-xl">
                "Engineering for the second after the fall — where AI self-corrects and systems refuse to break."
              </p>
            </div>

            {/* Editorial Paragraph */}
            <p className="text-ash text-base sm:text-lg max-w-xl leading-relaxed">
              Final-year Computer Science Engineering student specializing in <strong className="text-bone">Cyber Physical Systems</strong> at VIT Chennai. Architect of <strong className="text-cyan-300">CorrectiveRAG</strong> (slashed hallucination rates from 31.4% to 14.6%) and <strong className="text-cyan-300">SecureDoc-LI</strong> (AES-256 encrypted legal vaults).
            </p>

            {/* Freefall Magnetic Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="btn-freefall btn-freefall-solid"
                data-cursor="Descend"
              >
                <span>Selected Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="btn-freefall btn-freefall-outline"
                data-cursor="Connect"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Social channels */}
            <div className="flex items-center gap-4 pt-2 font-mono text-xs text-ash">
              <span>CHANNELS:</span>
              <a
                href={portfolioData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bone hover:text-cyan-400 transition-colors uppercase tracking-wider"
                data-cursor="GitHub"
              >
                GitHub ↗
              </a>
              <a
                href={portfolioData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bone hover:text-cyan-400 transition-colors uppercase tracking-wider"
                data-cursor="LinkedIn"
              >
                LinkedIn ↗
              </a>
              <a
                href={portfolioData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bone hover:text-cyan-400 transition-colors uppercase tracking-wider"
                data-cursor="Instagram"
              >
                Instagram ↗
              </a>
            </div>

          </div>

          {/* Right Column: Freefall Film / Aperture Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            <div className="relative w-full max-w-md group" data-cursor="View">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-indigo-500/20 to-purple-500/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Main Card Frame */}
              <div className="relative rounded-2xl bg-[#070b14] border border-white/10 overflow-hidden shadow-2xl">
                
                {/* HUD Header Bar */}
                <div className="px-5 py-3 bg-black/80 border-b border-white/10 flex items-center justify-between font-mono text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span className="text-bone font-bold tracking-wider">APERTURE // 01</span>
                  </div>
                  <span className="text-ash tracking-widest">300×340 DITHER</span>
                </div>

                {/* Portrait Image Canvas */}
                <div className="relative aspect-square overflow-hidden bg-black">
                  <img
                    src={photoVariant === 'modern' ? '/profile.jpg' : '/profile-suit.jpg'}
                    alt="Shrri Dharshan D R"
                    className="w-full h-full object-cover object-top filter contrast-[1.08] group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Cinematic Film Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                  {/* Overlaid Badges */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="bg-black/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono">
                      <div className="text-bone font-bold">ORACLE AI CERTIFIED</div>
                      <div className="text-cyan-400 font-bold">BENCHMARK: 88%</div>
                    </div>

                    <div className="bg-black/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono text-right">
                      <div className="text-bone font-bold">VIT CHENNAI</div>
                      <div className="text-emerald-400">CPS ENGINEER</div>
                    </div>
                  </div>
                </div>

                {/* Portrait Toggle */}
                <div className="px-5 py-2.5 bg-black/95 border-t border-white/10 flex items-center justify-between font-mono text-[11px]">
                  <span className="text-ash">PORTRAIT APERTURE:</span>
                  <div className="inline-flex rounded-lg p-0.5 bg-white/5 border border-white/10">
                    <button
                      onClick={() => setPhotoVariant('modern')}
                      className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase transition-all ${
                        photoVariant === 'modern'
                          ? 'bg-cyan-400 text-black'
                          : 'text-ash hover:text-bone'
                      }`}
                    >
                      Studio Blazer
                    </button>
                    <button
                      onClick={() => setPhotoVariant('suit')}
                      className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase transition-all ${
                        photoVariant === 'suit'
                          ? 'bg-cyan-400 text-black'
                          : 'text-ash hover:text-bone'
                      }`}
                    >
                      Formal Suit
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Scroll Cue (Freefall Style) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 flex items-center justify-between font-mono text-xs text-ash tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <ArrowDown className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
          <span>SCROLL TO DESCEND INTO THE ARCHITECTURE</span>
        </div>
        <div className="hidden sm:block">
          <span>01 / 10 CHAPTERS</span>
        </div>
      </div>

    </section>
  );
}
