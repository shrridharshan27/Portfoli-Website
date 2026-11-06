import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Award, 
  Sparkles, 
  Code2, 
  Shield, 
  BrainCircuit, 
  Target, 
  Users,
  CheckCircle2,
  Download,
  ExternalLink
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      icon: <BrainCircuit className="w-5 h-5 text-cyan-400" />,
      title: "Self-Correcting AI Pipelines",
      desc: "Specialized in agentic RAG using LangGraph, evaluating retrieved context and web fallbacks to slash hallucinations."
    },
    {
      icon: <Shield className="w-5 h-5 text-emerald-400" />,
      title: "Hardened Security Systems",
      desc: "Implemented AES-256-GCM encryption, TOTP MFA, 6-role RBAC, and SHA-256 tamper-evident hash chains."
    },
    {
      icon: <Code2 className="w-5 h-5 text-indigo-400" />,
      title: "Production Backend & Cloud",
      desc: "Proficient in FastAPI, RESTful services, Groq API, AWS EC2, and Oracle Cloud Infrastructure."
    },
    {
      icon: <Users className="w-5 h-5 text-purple-400" />,
      title: "Community Leadership",
      desc: "Serving as Vice President of the Fitness Club at VIT Chennai, managing 100+ members and campus workshops."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#070b14]">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BACKGROUND & VISION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A final-year engineering student blending artificial intelligence with cybersecurity and scalable software architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-3">
                <Target className="w-6 h-6 text-cyan-400" />
                <span>Engineering Real-World Practical Systems</span>
              </h3>
              
              <p className="text-slate-300 leading-relaxed">
                I am a final-year Computer Science Engineering student specializing in <strong className="text-white">Cyber Physical Systems</strong> at <strong className="text-white">Vellore Institute of Technology (VIT), Chennai</strong>. My technical journey is centered around Artificial Intelligence, Machine Learning, Generative AI, cybersecurity, and full-stack software development.
              </p>

              <p className="text-slate-300 leading-relaxed">
                I am driven by turning ideas into robust, production-grade applications that solve real-world problems. Whether architecting <strong className="text-cyan-300">CorrectiveRAG</strong> (an autonomous pipeline that cut hallucination rates from 31.4% to 14.6% using LangGraph and LLaMA 3) or developing <strong className="text-emerald-300">SecureDoc-LI</strong> (a legal document system protected by AES-256-GCM and SHA-256 hash chains), I emphasize correctness, performance, and defensive design.
              </p>

              <p className="text-slate-300 leading-relaxed">
                My objective is to join high-impact engineering teams where I can design, build, and deploy intelligent AI systems and scalable software that users trust.
              </p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-800/80">
                <div className="flex items-center gap-2.5 text-sm text-slate-300">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Chennai, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-300">
                  <GraduationCap className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>B.Tech CSE (Cyber Physical Systems)</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-300">
                  <Award className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>OCI 2025 AI Certified (88%)</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-300">
                  <Users className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>VP, VIT Fitness Club</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors text-sm"
                >
                  <span>Get In Touch</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 transition-colors text-sm"
                >
                  <span>Connect on LinkedIn</span>
                </a>
              </div>

            </div>
          </div>

          {/* Highlights Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="glass-panel glass-panel-hover p-5 rounded-xl border border-slate-800 flex items-start gap-4"
              >
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700/60 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-base font-semibold text-slate-100">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
