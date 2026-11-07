import React from 'react';
import { 
  FolderGit2, 
  Github, 
  CheckCircle2, 
  Code,
  ArrowUpRight,
  Disc3,
  Terminal,
  Cpu
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative bg-[#050811] bg-grid-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>SELECTED WORK · 05</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">Engineering</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High-stakes AI architectures, self-correcting RAG graphs, and encrypted enterprise workflows designed for real-world resilience.
          </p>
        </div>

        {/* Freefall-Style 3D Stacking Project Cards */}
        <div className="space-y-12 max-w-5xl mx-auto mb-24">
          {portfolioData.featuredProjects.map((project, idx) => (
            <div 
              key={project.id}
              className="sticky top-24 glass-panel rounded-3xl border border-slate-800 bg-[#0a101f]/95 backdrop-blur-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 shadow-2xl group"
              style={{ top: `${96 + idx * 24}px` }}
              data-cursor="Inspect"
            >
              <div className="p-7 sm:p-10 lg:p-12">
                
                {/* Header Row: Index Number, Spinning Disc, Period & Link */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800/80">
                  <div className="flex items-center gap-4">
                    {/* Index Number */}
                    <span className="font-mono text-3xl sm:text-4xl font-black text-cyan-500/40 group-hover:text-cyan-400 transition-colors">
                      0{idx + 1}
                    </span>
                    
                    {/* Badge & Period */}
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                        <span>{project.badge}</span>
                      </div>
                      <div className="text-xs font-mono text-slate-400 mt-1">
                        {project.period}
                      </div>
                    </div>
                  </div>

                  {/* Spinning Disc + GitHub Action Button */}
                  <div className="flex items-center gap-3">
                    <Disc3 className="w-6 h-6 text-slate-600 group-hover:text-cyan-400 animate-spin-slow transition-colors hidden sm:block" />
                    
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold bg-slate-900 hover:bg-slate-800 text-white border border-slate-700/80 hover:border-cyan-400 shadow-md transition-all active:scale-95"
                      data-cursor="GitHub"
                    >
                      <Github className="w-4 h-4 text-cyan-400" />
                      <span>View Code</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  </div>
                </div>

                {/* Project Title & Subtitle */}
                <div className="space-y-1 mb-4">
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-base sm:text-lg font-semibold text-cyan-400/90 font-mono">
                    {project.subtitle}
                  </p>
                </div>

                {/* Detailed Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4">
                  {project.description}
                </p>

                {/* Metrics Highlight Strip */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
                  {project.metrics.map((metric, mIdx) => (
                    <div 
                      key={mIdx}
                      className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/90 flex flex-col justify-center group-hover:border-cyan-500/20 transition-colors"
                    >
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        {metric.label}
                      </span>
                      <span className="text-lg sm:text-xl font-black text-cyan-300 font-mono mt-1">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bullet Points */}
                <div className="space-y-2.5 mb-6 border-t border-slate-800/80 pt-5">
                  {project.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies List */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-xs font-mono text-slate-500 mr-2">Core Tech:</span>
                  {project.technologies.map((tech, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900/90 text-slate-300 border border-slate-800 group-hover:border-slate-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Mini Projects Grid */}
        <div className="pt-12">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono">
              <Terminal className="w-3 h-3 text-cyan-400" />
              <span>UTILITIES & LAB EXPERIMENTS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Mini Projects & <span className="text-cyan-400">Published Tools</span>
            </h3>
            <p className="text-slate-400 text-sm">
              Functional tools, creative AI experiments, and web applications published on GitHub.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {portfolioData.miniProjects.map((mini, idx) => (
              <div 
                key={idx}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 flex flex-col justify-between group"
                data-cursor="Open"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Code className="w-4 h-4" />
                    </div>
                    <a
                      href={mini.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      title="View GitHub repository"
                      aria-label={`View ${mini.title} repository`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {mini.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {mini.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {mini.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
