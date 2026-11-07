import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Terminal, Shield, Brain } from 'lucide-react';

export default function Manifesto() {
  const containerRef = useRef(null);
  const [scrollRatio, setScrollRatio] = useState(0);

  const text = 
    "I engineer for the second after the proof-of-concept — when hallucinations are unacceptable, latency must be in seconds, and cryptographic integrity is non-negotiable. Building self-correcting RAG pipelines, AES-256 encrypted vaults, and cyber-physical software systems that solve real problems and refuse to break.";

  const words = text.split(" ");

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far the manifesto is through the viewport
      const start = windowHeight * 0.85;
      const end = windowHeight * 0.15;
      const progress = (start - rect.top) / (start - end);
      setScrollRatio(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="manifesto" 
      ref={containerRef}
      className="py-32 relative bg-[#050811] overflow-hidden flex items-center justify-center border-y border-slate-900"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-cyan-600/10 via-indigo-600/10 to-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Kicker tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-8">
          <Terminal className="w-3.5 h-3.5" />
          <span>ENGINEERING MANIFESTO</span>
        </div>

        {/* Word-by-word Scroll Highlighting */}
        <p className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-[1.35] tracking-tight font-sans select-none">
          {words.map((word, idx) => {
            const wordProgress = idx / words.length;
            const isLit = scrollRatio >= wordProgress;
            return (
              <span
                key={idx}
                className={`inline-block mr-2.5 transition-all duration-300 ${
                  isLit
                    ? 'text-white drop-shadow-[0_0_15px_rgba(34,211,238,0.25)] scale-100'
                    : 'text-slate-700 scale-98'
                }`}
              >
                {word}
              </span>
            );
          })}
        </p>

        {/* Supporting Subtext Columns (Freefall Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-3xl mx-auto text-left border-t border-slate-800/80 pt-8">
          <div className="space-y-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
              <Brain className="w-3.5 h-3.5" />
              <span>Correctness Over Hype</span>
            </span>
            <p className="text-sm text-slate-400 leading-relaxed">
              Evaluating AI outputs rigorously against standard benchmarks, cutting hallucination rates from 31.4% to 14.6% with autonomous self-correcting graphs.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              <span>Defensive By Design</span>
            </span>
            <p className="text-sm text-slate-400 leading-relaxed">
              Architecting end-to-end AES-256-GCM encryption, tamper-proof SHA-256 audit trails, and multi-tier access control before writing the first UI layer.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
