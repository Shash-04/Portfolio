"use client";

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Instagram, Download, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import devAnimation from "@/public/Developer.json";

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

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-bg dot-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
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
              className="text-foreground/50 text-lg font-medium"
            >
              Hey there, I'm
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
            className="text-xl text-foreground/60 flex items-center gap-2"
          >
            <span>I'm a</span>
            <span className="text-violet-400 font-semibold">
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
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-500 hover:to-indigo-500 transition-all duration-200 shadow-lg shadow-violet-900/40 glow-violet-sm">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
            <Link href="Shash-May-CV.pdf" target="_blank">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm glass border border-white/10 text-foreground/80 hover:text-foreground hover:border-violet-500/30 transition-all duration-200">
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
            <span className="text-sm text-foreground/30 font-medium">Find me on</span>
            <div className="h-px flex-1 max-w-[40px] bg-white/10" />
            <div className="flex gap-2">
              {socialLinks.map(({ href, icon: Icon, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`h-10 w-10 rounded-xl flex items-center justify-center glass border border-white/10 text-foreground/50 transition-all duration-200 ${color}`}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right — Lottie Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex items-center justify-center"
        >
          {/* Glowing ring behind animation */}
          <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-violet-600/20 to-indigo-600/20 blur-2xl animate-pulse-glow" />
          <div className="relative w-full max-w-md aspect-square animate-float">
            <Lottie animationData={devAnimation} loop={true} className="h-full w-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
