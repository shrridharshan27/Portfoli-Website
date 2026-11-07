import React from 'react';

export default function TechMarquee() {
  const row1 = [
    "CorrectiveRAG",
    "LangGraph",
    "LLaMA 3",
    "FastAPI",
    "AES-256-GCM",
    "Oracle Cloud AI Certified (88%)",
    "ChromaDB",
    "Whisper Speech AI",
    "Groq Hardware Acceleration"
  ];

  const row2 = [
    "Cyber Physical Systems",
    "SHA-256 Hash Audit Trails",
    "Role-Based Access Control",
    "TOTP MFA",
    "AWS EC2 Cloud",
    "Python 3.14",
    "React & Tailwind",
    "VIT Chennai 2027",
    "Wireshark Forensics"
  ];

  return (
    <div className="py-12 bg-[#070b14] overflow-hidden border-b border-slate-900/80 select-none">
      
      {/* Track 1: Leftward scroll */}
      <div className="flex whitespace-nowrap overflow-hidden py-2">
        <div className="flex gap-4 animate-[marquee_35s_linear_infinite]">
          {[...row1, ...row1, ...row1].map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 font-mono text-xs sm:text-sm hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Track 2: Rightward scroll */}
      <div className="flex whitespace-nowrap overflow-hidden py-2 mt-2">
        <div className="flex gap-4 animate-[marquee-reverse_40s_linear_infinite]">
          {[...row2, ...row2, ...row2].map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-400 font-mono text-xs sm:text-sm hover:border-indigo-500/40 hover:text-indigo-300 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
