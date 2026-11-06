import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Instagram, 
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

    // Construct mailto link with prefilled subject and body
    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    // Open default mail client
    window.location.href = `mailto:${portfolioData.personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#050811] bg-grid-pattern">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S BUILD TOGETHER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have a project, research collaboration, internship, or full-time opportunity? Feel free to reach out directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Email Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={() => handleCopy(portfolioData.personal.email, 'email')}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-cyan-500/40 transition-colors"
                  aria-label="Copy Email Address"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400 uppercase">Email</span>
                <a 
                  href={`mailto:${portfolioData.personal.email}`}
                  className="block text-slate-200 hover:text-cyan-300 font-semibold text-sm sm:text-base transition-colors break-all mt-0.5"
                >
                  {portfolioData.personal.email}
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  onClick={() => handleCopy(portfolioData.personal.phone, 'phone')}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-indigo-500/40 transition-colors"
                  aria-label="Copy Phone Number"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400 uppercase">Phone / WhatsApp</span>
                <a 
                  href={`tel:${portfolioData.personal.phone}`}
                  className="block text-slate-200 hover:text-cyan-300 font-semibold text-sm sm:text-base transition-colors mt-0.5"
                >
                  {portfolioData.personal.phone}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase">Location</span>
                <p className="text-slate-200 font-semibold text-sm sm:text-base mt-0.5">
                  {portfolioData.personal.location}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Open to local opportunities in Chennai & Bangalore, and remote roles worldwide.
                </p>
              </div>
            </div>

            {/* Social Accounts Strip */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Social Channels:</span>
              <div className="flex items-center gap-2">
                <a
                  href={portfolioData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-[#0A66C2] hover:bg-slate-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-pink-400 hover:bg-slate-700 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 relative">
              
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>Send a Message</span>
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Fill in the details below to dispatch an email directly to my inbox.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Opening Email Client...</h4>
                  <p className="text-sm text-slate-300">
                    If your email client didn't open automatically, you can write to:
                  </p>
                  <div className="font-mono text-cyan-300 text-sm font-semibold select-all">
                    {portfolioData.personal.email}
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Shrri, I came across your portfolio and would like to connect regarding..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 hover:from-cyan-300 hover:to-teal-300 shadow-lg shadow-cyan-500/25 transition-all duration-200 active:scale-98 flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message via Email</span>
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
