import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Award, 
  Code2, 
  Shield, 
  BrainCircuit, 
  Users,
  ArrowUpRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      icon: <BrainCircuit className="w-5 h-5 text-cyan-400" />,
      title: "Self-Correcting AI Pipelines",
      desc: "Architected autonomous agentic graphs using LangGraph, evaluating retrieved context and executing web search fallbacks to reduce hallucinations from 31.4% to 14.6%."
    },
    {
      icon: <Shield className="w-5 h-5 text-emerald-400" />,
      title: "Defensive Security Systems",
      desc: "Implemented AES-256-GCM encryption, TOTP-based MFA, 6-tier RBAC, and SHA-256 tamper-evident hash-chained audit trails for confidential records."
    },
    {
      icon: <Code2 className="w-5 h-5 text-indigo-400" />,
      title: "High-Throughput Backends",
      desc: "Built low-latency FastAPI microservices, Groq-accelerated Whisper voice processors (~8s for 30m audio), and scalable AWS EC2 / OCI infrastructure."
    },
    {
      icon: <Users className="w-5 h-5 text-purple-400" />,
      title: "Community Governance",
      desc: "Leading 100+ active members as Vice President of the VIT Chennai Fitness Club, orchestrating university wellness workshops and external trainer logistics."
    }
  ];

  return (
    <section id="about" className="py-28 relative bg-void border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Telemetry Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-16 font-mono text-xs text-ash tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span className="text-bone font-semibold">CHAPTER 03 // BACKGROUND & PHILOSOPHY</span>
          </div>
          <span>VIT CHENNAI · CPS SPECIALIZATION</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Story Column */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black text-bone tracking-tight font-display uppercase leading-tight">
              TURNING IDEAS INTO <span className="text-cyan-400">PRACTICAL</span>, FAULT-TOLERANT SYSTEMS.
            </h2>
            
            <p className="font-serif italic text-2xl text-bone/90 leading-snug">
              "Software should be intelligent enough to detect its own mistakes and hardened enough to withstand unauthorized scrutiny."
            </p>

            <div className="space-y-4 text-ash text-base sm:text-lg leading-relaxed pt-2">
              <p>
                I am a final-year Computer Science Engineering student specializing in <strong className="text-bone">Cyber Physical Systems</strong> at <strong className="text-bone">Vellore Institute of Technology (VIT), Chennai</strong>. My technical journey is centered around Artificial Intelligence, Machine Learning, Generative AI, cybersecurity, and production-grade software engineering.
              </p>

              <p>
                I am driven by turning concepts into high-impact applications that solve real-world problems. Whether building <strong className="text-cyan-300">CorrectiveRAG</strong> (an autonomous pipeline that cut hallucination rates by 16.8 points on PopQA benchmarks) or developing <strong className="text-emerald-300">SecureDoc-LI</strong> (a legal document system protected by AES-256-GCM and SHA-256 hash chains), I emphasize correctness, performance, and defensive design.
              </p>
            </div>

            {/* Quick Facts Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10 font-mono text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                <span>B.Tech CSE (Cyber Physical Systems)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>OCI 2025 AI Certified (88%)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Users className="w-4 h-4 text-purple-400" />
                <span>VP, VIT Fitness Club (100+ Members)</span>
              </div>
            </div>

          </div>

          {/* Highlights Grid */}
          <div className="lg:col-span-5 space-y-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-colors group"
                data-cursor="Inspect"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-bold text-bone text-base sm:text-lg group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-ash leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
