import React, { useState } from 'react';
import { 
  Code, 
  Brain, 
  Server, 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  Check, 
  Terminal,
  Cpu
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const categories = Object.keys(portfolioData.skills);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const categoryIcons = {
    "AI & Machine Learning": <Brain className="w-4 h-4" />,
    "Programming Languages": <Code className="w-4 h-4" />,
    "Backend & Cloud": <Server className="w-4 h-4" />,
    "Security & Cryptography": <ShieldCheck className="w-4 h-4" />,
    "Frontend & Tools": <Layers className="w-4 h-4" />
  };

  const getLevelBadge = (level) => {
    switch (level) {
      case 'Expert':
        return 'bg-cyan-950 text-cyan-300 border-cyan-500/40';
      case 'Advanced':
        return 'bg-indigo-950 text-indigo-300 border-indigo-500/40';
      case 'Certified':
        return 'bg-emerald-950 text-emerald-300 border-emerald-500/40';
      case 'Proficient':
        return 'bg-blue-950 text-blue-300 border-blue-500/40';
      default:
        return 'bg-slate-900 text-slate-300 border-slate-700/50';
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#070b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A comprehensive, battle-tested toolset spanning production AI architectures, secure backend services, and cloud systems.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-lg shadow-cyan-500/20 scale-105'
                    : 'glass-panel text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {categoryIcons[cat]}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Skill Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {portfolioData.skills[selectedCategory].map((skill, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-4 sm:p-5 rounded-xl border border-slate-800 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                <span className="font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors text-sm sm:text-base">
                  {skill.name}
                </span>
              </div>
              <span className={`text-[11px] font-mono px-2 py-0.5 rounded-md border ${getLevelBadge(skill.level)}`}>
                {skill.level}
              </span>
            </div>
          ))}
        </div>

        {/* All Skills Summary Matrix / Tag Cloud */}
        <div className="mt-16 pt-12 border-t border-slate-800/80 max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
              Comprehensive Stack Overview
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Python", "FastAPI", "LangGraph", "LangChain", "LLaMA 3", "Retrieval-Augmented Generation", 
              "AES-256-GCM", "ChromaDB", "AWS EC2", "Oracle Cloud (OCI)", "Whisper", "Groq API", 
              "spaCy", "JavaScript", "React", "SQL", "TOTP MFA", "Role-Based Access Control", 
              "Wireshark", "C++", "Node.js", "Tailwind CSS", "Git / GitHub", "Docker / Ollama"
            ].map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
