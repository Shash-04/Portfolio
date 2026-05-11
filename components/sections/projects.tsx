"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Filter } from 'lucide-react';
import type { ReactElement } from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  url: string;
  github: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: "AI Feedback Management System",
    description: "Full-stack feedback analytics platform enabling dynamic form creation, real-time submissions, and AI-powered insight extraction using Langchain.",
    image: "/feedback1.png",
    tags: ["Next.js", "Neon DB", "Langchain"],
    category: "web",
    url: "https://feedback-analysis-ai.vercel.app",
    github: "https://github.com/Shash-04/feedback",
    featured: true,
  },
  {
    id: 2,
    title: "VibeCode Editor",
    description: "AI-powered browser-based code editor with real-time execution, terminal integration, and intelligent code assistance using WebContainers.",
    image: "/vibecode.png",
    tags: ["Monaco Editor", "WebContainers", "Xterm.js"],
    category: "web",
    url: "https://ai-vibe-code-editor-two.vercel.app",
    github: "https://github.com/Shash-04/AI-vibe-code-editor",
    featured: true,
  },
  {
    id: 3,
    title: "Quick Compare",
    description: "Quick-commerce price comparison tool that aggregates grocery prices across platforms using web scraping to help users find the best deals instantly.",
    image: "/quick.jpg",
    tags: ["Playwright", "RapidFuzz", "FastAPI"],
    category: "fullstack",
    url: "https://quick-compare-sigma.vercel.app",
    github: "https://github.com/Shash-04/QuickCompare",
    featured: true,
  },
  {
    id: 4,
    title: "PixelSaaS",
    description: "A Media Optimization Kit powered by Cloudinary AI — smart image transformations, compression, and delivery at scale.",
    image: "/Pixel-2.png",
    tags: ["Next.js", "Neon DB", "Cloudinary AI"],
    category: "web",
    url: "https://pixel-saas.vercel.app/",
    github: "https://github.com/Shash-04/PixelSaas",
  },
  {
    id: 5,
    title: "Riverflow",
    description: "A real-time Q&A community platform for developers to ask and solve questions, with authentication and rich text support.",
    image: "/riverflow.png",
    tags: ["Next.js", "Appwrite", "Next Auth"],
    category: "web",
    url: "https://qna-sandy.vercel.app",
    github: "https://github.com/Shash-04/qna",
  },
  {
    id: 6,
    title: "EchoSecrets",
    description: "End-to-end encrypted secret messaging app with anonymous message sending and a clean privacy-first experience.",
    image: "/echosecrets.png",
    tags: ["Next.js", "MongoDB", "Encryption"],
    category: "fullstack",
    url: "https://echo-secrets.netlify.app",
    github: "https://github.com/Shash-04/ama",
  },
  {
    id: 7,
    title: "Tracktide",
    description: "Music discovery platform powered by the Spotify API with personalized recommendations and playlist management.",
    image: "/rapsheet.png",
    tags: ["Next.js", "Spotify API", "Next Auth"],
    category: "web",
    url: "https://tracktide.vercel.app",
    github: "https://github.com/Shash-04/Rapsheet",
  },
  {
    id: 8,
    title: "Shash-Blogs",
    description: "A minimalist blogging platform focused on clean typography, great reading experience, and fast performance.",
    image: "/shashblog.jpeg",
    tags: ["React", "Appwrite", "Tailwind CSS"],
    category: "web",
    url: "https://shashblog.vercel.app",
    github: "https://github.com/Shash-04/shashblog",
  },
  {
    id: 9,
    title: "Medtrack",
    description: "Healthcare application for tracking medications and appointments with a smart reminder system and a clean dashboard.",
    image: "/Medtrack.png",
    tags: ["React", "Express", "MongoDB"],
    category: "fullstack",
    url: "https://medtrack-hans-innvoverse.vercel.app",
    github: "https://github.com/Shash-04/Medtrack-HansInnvoverse",
  },
];

const categories = [
  { key: 'all', label: 'All Projects' },
  { key: 'web', label: 'Web Apps' },
  { key: 'fullstack', label: 'Full-Stack' },
];

const tagColors: Record<string, string> = {
  "Next.js": "bg-white/10 text-white/70",
  "React": "bg-blue-500/15 text-blue-300",
  "MongoDB": "bg-emerald-500/15 text-emerald-300",
  "TypeScript": "bg-blue-400/15 text-blue-300",
};

export default function ProjectsShowcase(): ReactElement {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    const filtered = activeFilter === 'all'
      ? projects
      : projects.filter(p => p.category === activeFilter);
    setFilteredProjects(filtered);
  }, [activeFilter]);

  return (
    <section ref={ref} className="py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        {/* <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20 mb-4">
          <Sparkles className="h-3 w-3" />
          What I've built
        </span> */}
        <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">My Projects</h2>
        <p className="text-foreground/50 max-w-xl mx-auto text-sm leading-relaxed">
          A collection of real-world projects — from AI tools to developer platforms, each solving a genuine problem.
        </p>
        <div className="h-px w-24 mx-auto mt-4 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
      </motion.div>

      {/* Filter Pills */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex flex-wrap justify-center gap-2 mb-10"
      >
        {categories.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveFilter(key)}
            className={`flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeFilter === key
                ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-900/30'
                : 'glass border border-white/10 text-foreground/50 hover:text-foreground hover:border-violet-500/30'
            }`}
          >
            {key === 'all' && <Filter className="h-3.5 w-3.5" />}
            {label}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }): ReactElement {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl overflow-hidden glass-dark border border-white/8 hover:border-violet-500/25 transition-all duration-400 hover:glow-violet-sm flex flex-col"
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg">
          <Sparkles className="h-2.5 w-2.5" />
          Featured
        </div>
      )}

      {/* Image */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f23] via-[#0f0f23]/40 to-transparent" />

        {/* Hover action overlay */}
        <motion.div
          initial={false}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 flex items-center justify-center gap-3 bg-black/60 backdrop-blur-sm"
        >
          <Link href={project.url} target="_blank" rel="noopener noreferrer">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg cursor-pointer"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </motion.span>
          </Link>
          <Link href={project.github} target="_blank" rel="noopener noreferrer">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold glass border border-white/20 text-white cursor-pointer"
            >
              <Github className="h-3.5 w-3.5" />
              Code
            </motion.span>
          </Link>
        </motion.div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Gradient top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <h3 className="text-base font-bold text-foreground/90 group-hover:text-violet-300 transition-colors duration-300 mb-2 leading-snug">
          {project.title}
        </h3>
        <p className="text-foreground/50 text-xs leading-relaxed mb-4 line-clamp-2 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-medium border border-white/10 ${
                tagColors[tag] ?? "bg-white/5 text-foreground/50"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
