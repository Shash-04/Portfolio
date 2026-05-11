"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, MapPin, Github, Linkedin, Instagram, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (formStatus === 'success') {
      const link = `mailto:shashwatvaish1@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
      window.open(link);
      setTimeout(() => { setName(''); setEmail(''); setMessage(''); setFormStatus(null); }, 3000);
    }
  }, [formStatus, name, message]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => { setIsLoading(false); setFormStatus('success'); }, 1500);
  };

  const infoItems = [
    { icon: Mail, label: "Email", value: "shashwatvaish1@gmail.com", href: "mailto:shashwatvaish1@gmail.com", colorClass: "text-violet-400 bg-violet-500/15" },
    { icon: MapPin, label: "Location", value: "Delhi, India", href: null, colorClass: "text-emerald-400 bg-emerald-500/15" },
  ];

  const socialLinks = [
    { href: "https://github.com/Shash-04", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/shashwat-vaish-6256442b4/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://www.instagram.com/shash.ded", icon: Instagram, label: "Instagram" },
  ];

  const inputCls = "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder-foreground/30 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all duration-200 text-sm";

  return (
    <section ref={ref} className="py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
        {/* <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20 mb-4">
          <MessageSquare className="h-3 w-3" />
          Let's connect
        </span> */}
        <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">Get In Touch</h2>
        <p className="text-foreground/50 max-w-lg mx-auto text-sm leading-relaxed">
          Have a project in mind, an opportunity, or just want to say hi? My inbox is always open.
        </p>
        <div className="h-px w-24 mx-auto mt-4 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {/* Form */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-3">
          <div className="glass-dark rounded-2xl p-7 gradient-border h-full">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Send className="h-4 w-4 text-violet-400" />
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="cn" className="block text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-2">Name</label>
                <input type="text" id="cn" value={name} onChange={e => setName(e.target.value)} className={inputCls} placeholder="Your name" required />
              </div>
              <div>
                <label htmlFor="ce" className="block text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-2">Email</label>
                <input type="email" id="ce" value={email} onChange={e => setEmail(e.target.value)} className={inputCls} placeholder="your@email.com" required />
              </div>
              <div>
                <label htmlFor="cm" className="block text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-2">Message</label>
                <textarea id="cm" value={message} onChange={e => setMessage(e.target.value)} rows={5} className={`${inputCls} resize-none`} placeholder="Tell me about your project or just say hi..." required />
              </div>

              <motion.button type="submit" disabled={isLoading || formStatus === 'success'} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-violet-900/30 shimmer">
                {isLoading ? (
                  <><svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>Sending...</>
                ) : formStatus === 'success' ? (
                  <><CheckCircle2 className="h-4 w-4" />Sent!</>
                ) : (
                  <><Send className="h-4 w-4" />Send Message<ArrowRight className="h-4 w-4 ml-1" /></>
                )}
              </motion.button>

              {formStatus === 'success' && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm text-center flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Opening your email client... I'll get back to you soon!
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>

        {/* Info Panel */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-2 space-y-5">
          <div className="glass-dark rounded-2xl p-6 gradient-border space-y-4">
            <h3 className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">Contact Info</h3>
            {infoItems.map(({ icon: Icon, label, value, href, colorClass }) => (
              <div key={label} className="flex items-center gap-4 p-4 rounded-xl bg-white/3 border border-white/8 hover:border-violet-500/20 transition-all duration-200">
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0 ${colorClass}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-foreground/40 mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm font-medium text-foreground/80 hover:text-violet-300 transition-colors truncate block">{value}</a>
                  ) : (
                    <p className="text-sm font-medium text-foreground/80 truncate">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="glass-dark rounded-2xl p-6 gradient-border">
            <h3 className="text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-4">Find Me Online</h3>
            <div className="space-y-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl glass border border-white/8 text-foreground/50 hover:text-foreground/90 hover:border-violet-500/30 transition-all duration-200"
                  whileHover={{ x: 4 }}>
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm font-medium">{label}</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-auto opacity-40" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-2xl border border-violet-500/20 bg-violet-500/5">
            <p className="text-xs text-foreground/50 leading-relaxed">
              I typically respond within <span className="text-violet-300 font-medium">24 hours</span>. Whether it's a collaboration, internship, or just a chat — I'm all ears!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}