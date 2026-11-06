import React from 'react';
import { Award, CheckCircle, Calendar, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative bg-[#070b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS & AUDITED LEARNING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Industry-recognized credentials in enterprise cloud AI services, generative AI ethics, and packet-level cybersecurity forensics.
          </p>
        </div>

        {/* Featured OCI Certification Hero Box */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-950/20 via-[#0a101f] to-cyan-950/20 shadow-2xl relative overflow-hidden group">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/20">
                  <ShieldCheck className="w-8 h-8 text-emerald-400" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                    Featured Cloud Certification
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    Oracle Cloud Infrastructure 2025 Certified AI Professional
                  </h3>
                  <div className="text-sm font-semibold text-slate-300 mt-0.5">
                    Oracle University
                  </div>
                </div>
              </div>

              <div className="flex sm:flex-col items-center sm:items-end gap-2">
                <span className="px-3.5 py-1.5 rounded-xl bg-emerald-500 text-slate-950 font-bold font-mono text-sm sm:text-base shadow-lg shadow-emerald-500/25">
                  Score: 88%
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Jul 2026
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4">
              Demonstrated verified proficiency in OCI generative models, LLM deployment architectures, vector search databases, retrieval-augmented generation pipelines, and automated speech & vision AI integrations across enterprise workloads.
            </p>

            <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                <CheckCircle className="w-4 h-4" />
                <span>Officially Certified by Oracle</span>
              </span>
              <span className="text-xs font-mono text-slate-500">
                Score Benchmark: 88%
              </span>
            </div>

          </div>
        </div>

        {/* Other Verified Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {portfolioData.certifications.slice(1).map((cert, idx) => (
            <div 
              key={idx}
              className="glass-panel glass-panel-hover p-6 rounded-xl border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-300 border border-slate-700/60">
                    {cert.badge}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <h4 className="text-base font-bold text-white mb-1">
                  {cert.name}
                </h4>
                <div className="text-xs font-semibold text-cyan-400/90 mb-3">
                  {cert.organization}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {cert.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                <span>Verified Curriculum</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
