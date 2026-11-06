import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-[#050811]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Qualifications</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Consistent academic excellence spanning specialized Cyber Physical Systems, computer science fundamentals, and mathematics.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Guide */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-slate-800 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-8 sm:space-y-12">
            {portfolioData.education.map((edu, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx} 
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0a101f] border-2 border-cyan-400 items-center justify-center z-10 shadow-md shadow-cyan-500/30">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400"></div>
                  </div>

                  {/* Card Content Container */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <div className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800/90 relative group">
                      
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                          <Calendar className="w-3 h-3" />
                          {edu.period}
                        </span>

                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold font-mono bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                          <Award className="w-3 h-3 text-emerald-400" />
                          {edu.score}
                        </span>
                      </div>

                      {/* Title & School */}
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {edu.degree}
                      </h3>

                      <div className="text-sm font-semibold text-cyan-400/90 mt-0.5">
                        {edu.specialization}
                      </div>

                      <div className="text-sm text-slate-300 font-medium mt-1">
                        {edu.institution}
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1 mb-4">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{edu.location}</span>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-1.5 border-t border-slate-800/80 pt-3">
                        {edu.highlights.map((point, pIdx) => (
                          <li key={pIdx} className="text-xs sm:text-sm text-slate-400 flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Status flag */}
                      {edu.status && (
                        <div className="mt-4 pt-2 flex items-center justify-end">
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                            {edu.status}
                          </span>
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
