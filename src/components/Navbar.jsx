import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Radio, Compass } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const chapters = [
    { num: '01', name: 'The Surface', href: '#home', sub: 'Hero & Telemetry' },
    { num: '02', name: 'Core Philosophy', href: '#manifesto', sub: 'Engineering Manifesto' },
    { num: '03', name: 'Background', href: '#about', sub: 'VIT Chennai CPS' },
    { num: '04', name: 'Architecture & Stack', href: '#skills', sub: 'Technical Capabilities' },
    { num: '05', name: 'Selected Work', href: '#projects', sub: 'CorrectiveRAG & SecureDoc' },
    { num: '06', name: 'Qualifications', href: '#education', sub: 'B.Tech CSE & Academics' },
    { num: '07', name: 'Verified Credentials', href: '#certifications', sub: 'Oracle AI 88% & Wireshark' },
    { num: '08', name: 'Community Leadership', href: '#leadership', sub: 'VP Fitness Club' },
    { num: '09', name: 'Telemetry & Git', href: '#github', sub: 'Live GitHub Repositories' },
    { num: '10', name: 'The Terminal', href: '#contact', sub: 'Direct Communication' },
  ];

  return (
    <>
      {/* Freefall Difference-Blend Fixed Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 py-5 flex items-center justify-between pointer-events-none">
        
        {/* Left: Menu Trigger */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="pointer-events-auto flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-bone hover:text-cyan-400 transition-colors"
          data-cursor="Menu"
        >
          <Menu className="w-4 h-4 text-cyan-400" />
          <span>INDEX</span>
        </button>

        {/* Center: Monogram / Name */}
        <a
          href="#home"
          className="pointer-events-auto font-display font-black text-sm sm:text-base uppercase tracking-tight text-bone hover:text-cyan-400 transition-colors text-center hidden md:block"
        >
          SHRRI DHARSHAN <span className="font-serif italic font-normal text-ash lowercase text-sm">developer &amp; ai engineer</span>
        </a>

        {/* Right: Status Pill & Let's Talk */}
        <div className="pointer-events-auto flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/60 backdrop-blur-md font-mono text-[11px] text-ash">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-bone">SYS_ONLINE</span>
          </div>

          <a
            href="#contact"
            className="btn-freefall btn-freefall-solid text-[11px] py-2 px-5"
            data-cursor="Write"
          >
            <span>Let's Talk</span>
          </a>
        </div>
      </header>

      {/* Freefall Full-Screen Chapter Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-8 sm:p-16 overflow-y-auto animate-in fade-in duration-300"
          role="dialog"
          aria-label="Chapter Menu"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <div className="font-mono text-xs text-ash tracking-widest uppercase flex items-center gap-2">
              <Compass className="w-4 h-4 text-cyan-400" />
              <span>NAVIGATION INDEX // 10 CHAPTERS</span>
            </div>

            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 font-mono text-xs font-bold text-bone hover:text-cyan-400 uppercase tracking-widest"
              data-cursor="Close"
            >
              <span>ESC / CLOSE</span>
              <X className="w-5 h-5 text-cyan-400" />
            </button>
          </div>

          {/* Chapters List */}
          <div className="my-auto py-12 max-w-4xl mx-auto w-full">
            <ol className="space-y-4 sm:space-y-6">
              {chapters.map((ch) => (
                <li key={ch.num}>
                  <a
                    href={ch.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-baseline justify-between py-2 border-b border-white/5 hover:border-cyan-400/40 transition-colors"
                    data-cursor="Jump"
                  >
                    <div className="flex items-baseline gap-4 sm:gap-8">
                      <span className="font-mono text-xs text-ash group-hover:text-cyan-400 transition-colors">
                        {ch.num}
                      </span>
                      <span className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-bone group-hover:text-cyan-400 transition-colors">
                        {ch.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-ash hidden sm:inline group-hover:text-bone transition-colors">
                        {ch.sub}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                    </div>
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* Bottom Footer Info */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-ash">
            <span>SHRRI DHARSHAN D R · VIT CHENNAI</span>
            <span>PRESS ANY SECTION TO JUMP DIRECTLY</span>
          </div>
        </div>
      )}
    </>
  );
}
