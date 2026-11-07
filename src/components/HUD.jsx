import React, { useState, useEffect } from 'react';
import { Compass, Activity, Clock } from 'lucide-react';

export default function HUD() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [altitude, setAltitude] = useState(12400);
  const [currentChapter, setCurrentChapter] = useState({ num: '01', name: 'The Surface' });
  const [timeStr, setTimeStr] = useState('');

  // Chapters mapped to DOM section IDs
  const chapters = [
    { id: 'home', num: '01', name: 'The Surface' },
    { id: 'manifesto', num: '02', name: 'Core Philosophy' },
    { id: 'about', num: '03', name: 'Background' },
    { id: 'skills', num: '04', name: 'Architecture & Stack' },
    { id: 'projects', num: '05', name: 'Selected Work' },
    { id: 'education', num: '06', name: 'Qualifications' },
    { id: 'certifications', num: '07', name: 'Verified Credentials' },
    { id: 'leadership', num: '08', name: 'Community Leadership' },
    { id: 'github', num: '09', name: 'Telemetry & Git' },
    { id: 'contact', num: '10', name: 'The Terminal' },
  ];

  // Update live Chennai, India clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to Indian Standard Time (IST)
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setTimeStr(`${new Intl.DateTimeFormat('en-GB', options).format(now)} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Update scroll telemetry & altitude
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;

      const progress = Math.min(Math.max(window.scrollY / totalHeight, 0), 1);
      setScrollProgress(progress);

      // Decreasing altitude from 12,400m to 0m (inspired by Freefall)
      const currentAlt = Math.max(0, Math.round((1 - progress) * 12400));
      setAltitude(currentAlt);

      // Determine active chapter
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      for (let i = chapters.length - 1; i >= 0; i--) {
        const el = document.getElementById(chapters[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setCurrentChapter({ num: chapters[i].num, name: chapters[i].name });
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside
      aria-label="Scroll Telemetry HUD"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-4xl pointer-events-none"
    >
      <div className="glass-panel px-4 sm:px-6 py-2.5 rounded-2xl border border-cyan-500/20 bg-[#070b14]/85 backdrop-blur-xl shadow-2xl shadow-black/80 flex items-center justify-between gap-4 pointer-events-auto">
        
        {/* Chapter Name */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-1.5 font-mono text-xs">
            <span className="text-cyan-400 font-bold">{currentChapter.num}</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-200 font-semibold tracking-wide hidden sm:inline">
              {currentChapter.name}
            </span>
          </div>
        </div>

        {/* Dynamic Progress Bar */}
        <div className="flex-1 max-w-xs sm:max-w-md mx-2 flex items-center gap-3">
          <div className="relative w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full transition-all duration-150"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
          <span className="font-mono text-[11px] text-cyan-300 font-semibold w-9 text-right shrink-0">
            {Math.round(scrollProgress * 100)}%
          </span>
        </div>

        {/* Altitude & Chennai Time */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0 font-mono text-[11px]">
          {/* Altitude Readout */}
          <div className="hidden md:flex items-center gap-1.5 text-slate-300">
            <Compass className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '10s' }} />
            <span>ALT {altitude.toLocaleString()} m</span>
          </div>

          {/* Live Chennai IST Clock */}
          <div className="flex items-center gap-1.5 text-slate-400 border-l border-slate-800 pl-3">
            <Clock className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-slate-300">{timeStr || 'Chennai, IST'}</span>
          </div>

          {/* System Pulse */}
          <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="hidden sm:inline font-bold">ONLINE</span>
          </div>
        </div>

      </div>
    </aside>
  );
}
