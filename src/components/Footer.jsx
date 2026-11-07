import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Mail, ArrowUp, Sparkles, MapPin, Compass } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setTimeStr(`${new Intl.DateTimeFormat('en-GB', options).format(now)} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] border-t border-slate-900 pt-20 pb-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <p className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
            // STATUS: ALL SYSTEMS NOMINAL
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ready to Build What's Next?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Open for internships, full-time AI/ML roles, research initiatives, and ambitious engineering collaborations.
          </p>
          
          <div className="pt-2">
            <a
              href={`mailto:${portfolioData.personal.email}?subject=Project%20Collaboration`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 hover:to-teal-200 shadow-xl shadow-cyan-500/25 transition-all text-base active:scale-95"
              data-cursor="Write"
            >
              <Mail className="w-5 h-5" />
              <span>{portfolioData.personal.email}</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8 border-t border-slate-900">
          
          {/* Brand & Location Clock */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-400 font-mono font-bold text-slate-950 text-sm flex items-center justify-center shadow-md shadow-cyan-500/20">
                SD
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Shrri Dharshan D R
              </span>
            </div>
            <p className="text-xs text-slate-500 font-mono">
              Chennai, India · <span className="text-slate-400">{timeStr || 'IST'}</span> · Replies within 24h
            </p>
          </div>

          {/* Socials & Rewind Button (Freefall Style "Ascend Again") */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
              data-cursor="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#0A66C2] hover:border-blue-500/40 transition-colors"
              data-cursor="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-pink-400 hover:border-pink-500/40 transition-colors"
              data-cursor="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* Rewind / Ascend Button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all font-mono text-xs font-semibold ml-2 group"
              data-cursor="Ascend"
              aria-label="Ascend to top of page"
            >
              <span>Ascend</span>
              <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-600">
          <div>
            © {new Date().getFullYear()} Shrri Dharshan D R. Crafted with gravity and precision.
          </div>
          <div>
            React 18 · Lenis · Tailwind CSS · Vite
          </div>
        </div>

      </div>
    </footer>
  );
}
