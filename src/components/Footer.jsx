import React from 'react';
import { Github, Linkedin, Instagram, Mail, ArrowUp, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] border-t border-slate-900 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Logo & Headline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px] flex items-center justify-center font-mono font-bold text-slate-950 text-sm bg-cyan-400">
                SD
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Shrri Dharshan D R
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              AI/ML Developer • Software Developer • Cybersecurity Enthusiast
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#0A66C2] hover:border-blue-500/40 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-pink-400 hover:border-pink-500/40 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              aria-label="Email"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            
            {/* Scroll to top button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Shrri Dharshan D R. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Built with React, Tailwind CSS & Vite</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
