"use client";

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Instagram, Download, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  {
    href: "https://github.com/Shash-04/",
    icon: Github,
    label: "GitHub",
    color: "hover:border-white/30",
  },
  {
    href: "https://www.linkedin.com/in/shashwat-vaish-6256442b4/",
    icon: Linkedin,
    label: "LinkedIn",
    color: "hover:border-blue-500/40 hover:text-blue-400",
  },
  {
    href: "https://www.instagram.com/shash.ded/?hl=en",
    icon: Instagram,
    label: "Instagram",
    color: "hover:border-pink-500/40 hover:text-pink-400",
  },
];

const nodes = [
  { key: "fe", label: "FRONTEND", sub: "React · Next.js", x: 40, y: 55, tx: 130, ty: 90 },
  { key: "be", label: "BACKEND", sub: "Node · Express", x: 40, y: 175, tx: 130, ty: 175 },
  { key: "db", label: "DATABASE", sub: "Postgres · Mongo", x: 370, y: 55, tx: 280, ty: 90 },
  { key: "ai", label: "AI", sub: "Langchain", x: 370, y: 175, tx: 280, ty: 175 },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-bg dot-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-amber-600/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-sky-600/6 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left — Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 font-mono text-xs uppercase tracking-wider bg-amber-400/10 text-amber-300 border border-amber-400/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
              Available for opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-foreground/50 text-sm"
            >
              <span className="text-amber-400/70">{'>'}</span> whoami
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl lg:text-7xl font-bold tracking-tight"
            >
              <span className="gradient-text">Shashwat</span>
              <br />
              <span className="text-foreground/90">Vaish</span>
            </motion.h1>
          </div>

          {/* Type Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-foreground/60 flex items-center gap-2 font-mono"
          >
            <span className="text-foreground/40">{'//'}</span>
            <span className="text-amber-400 font-semibold">
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer',
                  1500,
                  'React Enthusiast',
                  1500,
                  'UI/UX Craftsman',
                  1500,
                  'Open Source Builder',
                  1500,
                  'BTech CSE Student',
                  1500,
                ]}
                wrapper="span"
                speed={55}
                repeat={Infinity}
              />
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-foreground/55 text-base leading-relaxed max-w-lg"
          >
            Full-stack developer crafting seamless digital experiences. Currently focused on building accessible, user-centric products with performance and design in mind.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-3"
          >
            <Link href="#projects">
              <button className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm bg-amber-400 text-[#1a1408] hover:bg-amber-300 transition-all duration-200 glow-violet-sm">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
            <Link href="Shash-July-CV.pdf" target="_blank">
              <button className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm glass border border-white/10 text-foreground/80 hover:text-foreground hover:border-amber-400/30 transition-all duration-200">
                <Download className="h-4 w-4" />
                Download CV
              </button>
            </Link>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="flex items-center gap-3"
          >
            <span className="font-mono text-xs text-foreground/30">Find me on</span>
            <div className="h-px flex-1 max-w-[40px] bg-white/10" />
            <div className="flex gap-2">
              {socialLinks.map(({ href, icon: Icon, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`h-10 w-10 flex items-center justify-center glass border border-white/10 text-foreground/50 transition-all duration-200 ${color}`}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right — Schematic system diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute w-72 h-72 rounded-full bg-amber-600/10 blur-3xl animate-pulse-glow pointer-events-none" />

          <div className="plate relative w-full max-w-md p-6">
            <div className="eyebrow mb-4">fig. 01 — system overview</div>
            <svg viewBox="0 0 410 230" className="w-full h-auto">
              {/* wires */}
              {nodes.map((n) => (
                <line
                  key={`wire-${n.key}`}
                  x1={n.tx}
                  y1={n.ty}
                  x2={205}
                  y2={115}
                  stroke="#6EA6E8"
                  strokeOpacity="0.5"
                  strokeWidth="1.2"
                  strokeDasharray="4 3"
                  className="wire-draw"
                />
              ))}

              {/* outer nodes */}
              {nodes.map((n) => (
                <g key={n.key}>
                  <circle cx={n.x} cy={n.y} r="22" fill="none" stroke="#E8A33D" strokeWidth="1.4" opacity="0.8" />
                  <text x={n.x} y={n.y + 4} textAnchor="middle" className="font-mono" fontSize="9" fill="#ECE6D8" opacity="0.85">
                    {n.label === "AI" ? "AI" : n.label.slice(0, 2)}
                  </text>
                  <text
                    x={n.x < 200 ? n.x + 30 : n.x - 30}
                    y={n.y - 14}
                    textAnchor={n.x < 200 ? "start" : "end"}
                    className="font-mono"
                    fontSize="9"
                    fill="#E8A33D"
                    opacity="0.75"
                  >
                    {n.label}
                  </text>
                  <text
                    x={n.x < 200 ? n.x + 30 : n.x - 30}
                    y={n.y - 2}
                    textAnchor={n.x < 200 ? "start" : "end"}
                    fontSize="8"
                    fill="#ECE6D8"
                    opacity="0.4"
                  >
                    {n.sub}
                  </text>
                </g>
              ))}

              {/* center node */}
              <circle cx="205" cy="115" r="34" fill="#1a1408" stroke="#E8A33D" strokeWidth="1.6" />
              <text x="205" y="112" textAnchor="middle" className="font-mono" fontSize="12" fontWeight="700" fill="#E8A33D">
                SV
              </text>
              <text x="205" y="126" textAnchor="middle" className="font-mono" fontSize="7" fill="#ECE6D8" opacity="0.5">
                core
              </text>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
