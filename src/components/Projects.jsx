import React, { useState } from 'react';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  ShieldAlert, 
  Zap, 
  Code,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('all'); // 'all', 'featured', 'mini'

  return (
    <section id="projects" className="py-24 relative bg-[#050811] bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High-impact AI systems, self-correcting RAG architectures, and encrypted enterprise workflows designed for real-world reliability.
          </p>
        </div>

        {/* Featured Projects Cards */}
        <div className="space-y-10 mb-20">
          {portfolioData.featuredProjects.map((project, idx) => (
            <div 
              key={project.id}
              className="glass-panel rounded-2xl border border-slate-800/90 overflow-hidden hover:border-cyan-500/40 transition-all duration-300 shadow-xl group"
            >
              <div className="p-6 sm:p-8 lg:p-10">
                
                {/* Header row: Badge, Period, GitHub button */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                      {project.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {project.period}
                    </span>
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/60 hover:border-cyan-500/40 transition-all"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span>View Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>

                {/* Project Titles */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-base font-semibold text-cyan-400/90 mt-1">
                  {project.subtitle}
                </p>

                {/* Detailed Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4">
                  {project.description}
                </p>

                {/* Metrics Highlight Strip */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
                  {project.metrics.map((metric, mIdx) => (
                    <div 
                      key={mIdx}
                      className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 flex flex-col justify-center"
                    >
                      <span className="text-xs font-mono text-slate-400">
                        {metric.label}
                      </span>
                      <span className="text-base sm:text-lg font-bold text-cyan-300 font-mono mt-0.5">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bullet Points */}
                <div className="space-y-2 mb-6 border-t border-slate-800/80 pt-4">
                  {project.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies List */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-xs font-mono text-slate-500 mr-2">Built with:</span>
                  {project.technologies.map((tech, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#070b14] text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Mini Projects Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h3 className="text-2xl font-bold text-white">
              Mini Projects & <span className="text-cyan-400">Utilities</span>
            </h3>
            <p className="text-slate-400 text-sm">
              Functional tools, creative AI experiments, and interactive web utilities published on GitHub.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {portfolioData.miniProjects.map((mini, idx) => (
              <div 
                key={idx}
                className="glass-panel glass-panel-hover p-5 rounded-xl border border-slate-800 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Code className="w-4 h-4" />
                    </div>
                    <a
                      href={mini.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
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
