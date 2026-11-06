import React, { useState } from 'react';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  Sparkles, 
  ShieldCheck, 
  Terminal, 
  Brain, 
  Cpu, 
  FileCode,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const [photoVariant, setPhotoVariant] = useState('modern'); // 'modern' or 'suit'

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-600/20 via-blue-600/10 to-purple-600/20 rounded-full blur-3xl pointer-events-none -z-10 animate-glow-pulse" />
      <div className="absolute -top-10 -right-20 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-mono shadow-sm shadow-cyan-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for AI/ML & Software Roles</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">VIT Chennai 2027</span>
            </div>

            {/* Main Greeting & Title */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-mono text-cyan-400 tracking-wide">
                Hi, I'm
              </h2>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Shrri Dharshan <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">D R</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300 pt-1">
                Building Intelligent Solutions with <span className="text-cyan-400">AI</span>, <span className="text-blue-400">Software</span> & <span className="text-emerald-400">Security</span>.
              </p>
            </div>

            {/* Professional Subtitles / Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <span className="px-3 py-1 rounded-md text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60">
                🤖 AI/ML Developer
              </span>
              <span className="px-3 py-1 rounded-md text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60">
                💻 Software Developer
              </span>
              <span className="px-3 py-1 rounded-md text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60">
                🛡️ Cybersecurity Enthusiast
              </span>
            </div>

            {/* Bio summary */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Final-year Computer Science Engineering student specializing in <strong className="text-slate-200">Cyber Physical Systems</strong> at VIT Chennai. Experienced in building self-correcting RAG architectures, encrypted enterprise document pipelines, and high-throughput AI voice summarizers.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 hover:from-cyan-300 hover:to-teal-300 shadow-lg shadow-cyan-500/25 transition-all duration-200 active:scale-95 text-base"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 shadow-md transition-all duration-200 active:scale-95 text-base"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-3">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Connect:</span>
              <a
                href={portfolioData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all shadow-sm"
                aria-label="GitHub Profile"
                title="GitHub: shrridharshan27"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={portfolioData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-[#0A66C2] hover:border-blue-500/40 hover:bg-slate-800/80 transition-all shadow-sm"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={portfolioData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-pink-400 hover:border-pink-500/40 hover:bg-slate-800/80 transition-all shadow-sm"
                aria-label="Instagram Profile"
                title="Instagram: @shrri.dharshan"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Profile Image & Tech Terminal Preview */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            <div className="relative group w-72 sm:w-80 md:w-96">
              
              {/* Outer Glowing Border Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition duration-500"></div>

              {/* Main Photo Card Container */}
              <div className="relative rounded-2xl bg-[#0a101f] border border-cyan-500/30 overflow-hidden shadow-2xl">
                
                {/* Window Bar */}
                <div className="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    shrri_profile.jpg
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    LIVE
                  </div>
                </div>

                {/* Profile Picture */}
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={photoVariant === 'modern' ? '/profile.jpg' : '/profile-suit.jpg'}
                    alt="Shrri Dharshan D R - AI/ML & Software Developer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a101f] via-transparent to-transparent opacity-80" />

                  {/* Overlaid Badges */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div className="bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/60 text-xs">
                      <div className="text-white font-semibold flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Oracle AI Certified</span>
                      </div>
                      <div className="text-[10px] font-mono text-cyan-400 font-bold">
                        Score: 88%
                      </div>
                    </div>

                    <div className="bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/60 text-xs text-right">
                      <div className="text-white font-semibold flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>VIT Chennai</span>
                      </div>
                      <div className="text-[10px] font-mono text-emerald-400">
                        CPS Specialization
                      </div>
                    </div>
                  </div>
                </div>

                {/* Photo toggle switch */}
                <div className="px-4 py-2 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono text-[11px]">Portrait Style:</span>
                  <div className="inline-flex rounded-lg p-0.5 bg-slate-900 border border-slate-800">
                    <button
                      onClick={() => setPhotoVariant('modern')}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                        photoVariant === 'modern' 
                          ? 'bg-cyan-500 text-slate-950 font-bold' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Studio Blazer
                    </button>
                    <button
                      onClick={() => setPhotoVariant('suit')}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                        photoVariant === 'suit' 
                          ? 'bg-cyan-500 text-slate-950 font-bold' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Formal Suit
                    </button>
                  </div>
                </div>

              </div>

              {/* Floating tech badge 1 */}
              <div className="absolute -bottom-5 -left-6 hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 shadow-xl text-xs font-mono text-slate-200">
                <Brain className="w-4 h-4 text-cyan-400" />
                <span>LangGraph & RAG</span>
              </div>

              {/* Floating tech badge 2 */}
              <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-purple-500/30 shadow-xl text-xs font-mono text-slate-200">
                <ShieldCheck className="w-4 h-4 text-purple-400" />
                <span>AES-256 Security</span>
              </div>

            </div>

          </div>

        </div>

        {/* Highlight Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {portfolioData.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="glass-panel glass-panel-hover p-4 rounded-xl border border-slate-800/80 text-center sm:text-left"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300 font-mono">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-0.5 font-mono">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
