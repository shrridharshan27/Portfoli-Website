import React from 'react';
import { Users, Calendar, MapPin, CheckCircle, HeartPulse, Trophy, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Leadership() {
  const leadership = portfolioData.leadership[0];

  return (
    <section id="leadership" className="py-24 relative bg-[#050811]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/20 text-purple-400 text-xs font-mono">
            <Trophy className="w-3.5 h-3.5" />
            <span>ORGANIZATIONAL LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Leadership & <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Extracurriculars</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Guiding high-impact student communities, event coordination, and cross-functional team execution.
          </p>
        </div>

        {/* Leadership Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-950/20 via-[#0a101f] to-slate-950 shadow-xl">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/20">
                  <HeartPulse className="w-7 h-7 text-purple-400" />
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-purple-400 uppercase tracking-wider">
                    Executive Student Council
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {leadership.role}
                  </h3>
                  <div className="text-sm font-semibold text-slate-300 mt-0.5">
                    {leadership.organization}
                  </div>
                </div>
              </div>

              <div className="flex sm:flex-col items-center sm:items-end gap-1.5">
                <span className="px-3 py-1 rounded-lg bg-purple-950/80 text-purple-300 border border-purple-500/30 font-mono text-xs font-semibold">
                  {leadership.period}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {leadership.stats}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-5">
              {leadership.description}
            </p>

            {/* Bullets */}
            <div className="space-y-2.5 mt-5 pt-4 border-t border-slate-800/80">
              {leadership.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{bullet}</span>
                </div>
              ))}
            </div>

            {/* Summary Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-5 border-t border-slate-800/80">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                <div className="text-xl font-bold font-mono text-purple-400">100+</div>
                <div className="text-xs text-slate-400 mt-0.5">Active Community Members</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                <div className="text-xl font-bold font-mono text-cyan-400">Workshops</div>
                <div className="text-xs text-slate-400 mt-0.5">Fitness & Wellness Sessions</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center col-span-2 sm:col-span-1">
                <div className="text-xl font-bold font-mono text-emerald-400">VIT Chennai</div>
                <div className="text-xs text-slate-400 mt-0.5">Campus Governance</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
