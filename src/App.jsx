import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import Manifesto from './components/Manifesto';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Leadership from './components/Leadership';
import GitHubActivity from './components/GitHubActivity';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import HUD from './components/HUD';

export default function App() {
  // Initialize Lenis Smooth Scrolling (Freefall Engine)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300 relative">
      {/* Freefall-Style Magnetic Custom Cursor */}
      <CustomCursor />

      {/* Persistent Scroll Telemetry & Altitude HUD */}
      <HUD />

      {/* Main Navigation */}
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <TechMarquee />
        <Manifesto />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Leadership />
        <GitHubActivity />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
