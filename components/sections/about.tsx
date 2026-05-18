"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code2, Server, Database, Layers, Cpu, BookOpen,
  Github, Linkedin, Instagram, MapPin, Mail,
  GraduationCap, Lightbulb, Coffee, Heart
} from 'lucide-react';

const skills = [
  { name: "JavaScript", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Prisma", category: "Database" },
  { name: "Neon DB", category: "Database" },
  { name: "Git & GitHub", category: "Tools" },
  { name: "Vercel", category: "Tools" },
  { name: "Appwrite", category: "Tools" },
  { name: "Langchain", category: "AI" },
  { name: "Cloudinary AI", category: "AI" },
  { name: "WebContainers", category: "Tools" },
  { name: "Java", category: "Languages" },
  { name: "C++", category: "Languages" },
];

const categoryColors: Record<string, string> = {
  Frontend: "bg-cyan-500/15 text-cyan-300 border-cyan-500/25",
  Backend: "bg-blue-500/15 text-blue-300 border-blue-500/25",
  Database: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
  Tools: "bg-amber-500/15 text-amber-300 border-amber-500/25",
  AI: "bg-pink-500/15 text-pink-300 border-pink-500/25",
  Languages: "bg-cyan-500/15 text-cyan-300 border-cyan-500/25",
};

const stats = [
  { label: "Projects Built", value: "11+", icon: Code2 },
  { label: "GitHub Repos", value: "40+", icon: Github },
  { label: "Tech Stacks", value: "5+", icon: Layers },
  { label: "Coffee Cups", value: "∞", icon: Coffee },
];

const interests = [
  "Open Source", "AI & ML", "UX Design", "AI Agents",
  "Cloud Computing", "Web3", "System Design", "Literature",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section ref={ref} className="relative py-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">About Me</h2>
        <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="grid grid-cols-1 lg:grid-cols-5 gap-8"
      >
        {/* ─── Left Column ─────────────────────────── */}
        <motion.div variants={item} className="lg:col-span-2 space-y-6">
          {/* Profile Photo */}
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-600 opacity-40 blur-md group-hover:opacity-60 transition-opacity duration-300" />
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="2.jpeg"
                alt="Shashwat Vaish"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                  <span>Delhi, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map(({ label, value, icon: Icon }) => (
              <motion.div
                key={label}
                variants={item}
                className="glass-dark rounded-xl p-4 text-center gradient-border group hover:glow-violet-sm transition-all duration-300"
              >
                <Icon className="h-5 w-5 text-cyan-400 mx-auto mb-2" />
                <div className="text-2xl font-bold gradient-text">{value}</div>
                <div className="text-xs text-foreground/50 mt-0.5">{label}</div>
              </motion.div>
            ))}
          </div>

          {/* Quick Contact */}
          <div className="glass-dark rounded-2xl p-5 gradient-border space-y-3">
            <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider">Quick Links</h3>
            <div className="flex gap-2">
              {[
                { href: "https://github.com/Shash-04", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/shashwat-vaish-6256442b4/", icon: Linkedin, label: "LinkedIn" },
                { href: "https://www.instagram.com/shash.ded", icon: Instagram, label: "Instagram" },
                { href: "mailto:shashwatvaish1@gmail.com", icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex-1 flex items-center justify-center h-10 rounded-xl bg-white/5 border border-white/10 text-foreground/50 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ─── Right Column ────────────────────────── */}
        <motion.div variants={item} className="lg:col-span-3 space-y-6">
          {/* Bio Card */}
          <div className="glass-dark rounded-2xl p-7 gradient-border">
            <div className="flex items-center gap-2 mb-5">
              <BookOpen className="h-5 w-5 text-cyan-400" />
              <h2 className="text-xl font-bold">My Story</h2>
            </div>
            <div className="space-y-4 text-foreground/65 leading-relaxed">
              <p>
                I'm <span className="text-foreground font-semibold">Shashwat Vaish</span>, a full-stack developer and Computer Science undergraduate at{" "}
                <span className="text-cyan-400 font-medium">GGS Indraprastha University</span>.who enjoys building products that combine clean design with solid engineering. What started as curiosity during school gradually turned into a strong passion for creating scalable, real-world applications.
              </p>
              <p>
                My work focuses on modern web development — crafting responsive frontends, designing backend systems, and building efficient APIs and databases. I’ve developed projects across AI, analytics, real-time platforms, and developer tools, always aiming to create products that are both practical and impactful.
              </p>
              <p>
                Outside of code, I'm into open-source contributions, exploring AI and cloud technologies, reading, gaming, binge-watching.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="glass-dark rounded-2xl p-7 gradient-border">
            <div className="flex items-center gap-2 mb-5">
              <GraduationCap className="h-5 w-5 text-cyan-400" />
              <h2 className="text-xl font-bold">Education</h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  degree: "BTech in Computer Science & Engineering",
                  school: "Indraprastha University",
                  period: "2023 – 2027",
                  status: "Current",
                  color: "text-cyan-400",
                  dot: "bg-cyan-500",
                },
                {
                  degree: "Senior Secondary (Class XII)",
                  school: "VBBS",
                  period: "2021 – 2022",
                  status: "Completed",
                  color: "text-blue-400",
                  dot: "bg-blue-500",
                },
              ].map((edu) => (
                <div key={edu.degree} className="flex gap-4">
                  <div className="flex flex-col items-center gap-1 pt-1">
                    <div className={`h-3 w-3 rounded-full ${edu.dot} ring-2 ring-offset-2 ring-offset-[#0f0f23] ring-white/10`} />
                    <div className="w-px flex-1 bg-white/10" />
                  </div>
                  <div className="pb-4">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-semibold text-foreground/90">{edu.degree}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${edu.status === 'Current' ? 'bg-cyan-500/15 text-cyan-300' : 'bg-blue-500/15 text-blue-300'}`}>
                        {edu.status}
                      </span>
                    </div>
                    <p className={`text-sm font-medium ${edu.color}`}>{edu.school}</p>
                    <p className="text-xs text-foreground/40 mt-0.5">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="glass-dark rounded-2xl p-7 gradient-border">
            <div className="flex items-center gap-2 mb-5">
              <Cpu className="h-5 w-5 text-cyan-400" />
              <h2 className="text-xl font-bold">Tech I Work With</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map(({ name, category }) => (
                <span
                  key={name}
                  className={`inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-medium border transition-all duration-200 hover:scale-105 cursor-default ${categoryColors[category]}`}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="glass-dark rounded-2xl p-7 gradient-border">
            <div className="flex items-center gap-2 mb-5">
              <Lightbulb className="h-5 w-5 text-cyan-400" />
              <h2 className="text-xl font-bold">Interests</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 rounded-xl text-sm font-medium bg-white/5 text-foreground/60 border border-white/10 hover:border-cyan-500/30 hover:text-foreground/80 transition-all duration-200 cursor-default"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}