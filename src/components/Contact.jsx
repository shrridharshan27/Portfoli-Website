import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  Instagram, 
  Terminal,
  MessageSquare,
  Clock
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [timeStr, setTimeStr] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
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

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:${portfolioData.personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-28 relative bg-void border-t border-white/10 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-cyan-600/10 via-indigo-600/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-16 font-mono text-xs text-ash tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span className="text-bone font-semibold">CHAPTER 10 // THE PORTAL &amp; TERMINAL</span>
          </div>
          <span>INITIATE DIRECT COMMUNICATION</span>
        </div>

        {/* Freefall Giant Contact Statement */}
        <div className="space-y-4 mb-16">
          <p className="font-serif italic text-2xl sm:text-4xl text-ash">
            "Every fall needs a way out. This is where you come in."
          </p>
          
          {/* Giant Screen-Filling Email Link */}
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="block font-display font-black text-3xl sm:text-5xl lg:text-7xl xl:text-8xl text-bone hover:text-cyan-400 transition-colors uppercase tracking-tight break-all leading-[0.9]"
            data-cursor="Write"
          >
            {portfolioData.personal.email}
          </a>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Details Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-ash uppercase">PHONE / WHATSAPP</span>
                <a 
                  href={`tel:${portfolioData.personal.phone}`}
                  className="block font-mono font-bold text-bone hover:text-cyan-400 transition-colors text-base sm:text-lg mt-1"
                >
                  {portfolioData.personal.phone}
                </a>
              </div>
              <button
                onClick={() => handleCopy(portfolioData.personal.phone, 'phone')}
                className="btn-freefall btn-freefall-outline py-1.5 px-3 text-[11px]"
                data-cursor="Copy"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Location & Time Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-2">
              <span className="text-xs font-mono text-ash uppercase">LOCATION &amp; TIMEZONE</span>
              <div className="text-bone font-bold text-base sm:text-lg">
                Chennai, Tamil Nadu, India
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 pt-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{timeStr || 'Asia/Kolkata (IST)'}</span>
                <span className="text-ash">• Available Worldwide</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
              <span className="text-xs font-mono text-ash uppercase">VERIFIED NETWORKS</span>
              <div className="flex flex-wrap gap-3">
                <a
                  href={portfolioData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-freefall btn-freefall-outline py-2 px-4 text-xs"
                  data-cursor="GitHub"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={portfolioData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-freefall btn-freefall-outline py-2 px-4 text-xs"
                  data-cursor="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={portfolioData.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-freefall btn-freefall-outline py-2 px-4 text-xs"
                  data-cursor="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Message Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative">
              
              <div className="flex items-center gap-2 mb-6 font-mono text-xs text-cyan-400 uppercase tracking-wider">
                <Terminal className="w-4 h-4" />
                <span>DISPATCH MESSAGE PROTOCOL</span>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-cyan-950/40 border border-cyan-400/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-cyan-400/20 text-cyan-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold font-display uppercase text-bone">Opening Email Client...</h4>
                  <p className="text-sm text-ash">
                    If your email client didn't launch automatically, write directly to:
                  </p>
                  <div className="font-mono text-cyan-400 font-semibold select-all text-sm">
                    {portfolioData.personal.email}
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-ash mb-1.5 uppercase">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-bone placeholder-white/20 focus:outline-none focus:border-cyan-400 text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-ash mb-1.5 uppercase">
                        Your Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-bone placeholder-white/20 focus:outline-none focus:border-cyan-400 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-ash mb-1.5 uppercase">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="AI Engineering Inquiry / Opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-bone placeholder-white/20 focus:outline-none focus:border-cyan-400 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-ash mb-1.5 uppercase">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Shrri, I would like to connect regarding..."
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-bone placeholder-white/20 focus:outline-none focus:border-cyan-400 text-sm transition-all resize-none font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-freefall btn-freefall-solid py-4 text-xs font-mono font-bold tracking-widest mt-2"
                    data-cursor="Send"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    <span>TRANSMIT DISPATCH VIA EMAIL</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
