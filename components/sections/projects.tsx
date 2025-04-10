"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
};

type ProjectCardProps = {
  project: Project;
};

export default function Projects(): ReactElement {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "Riverflow",
      description: "A real-time question answer community platform for asking and solving questions.",
      image: "/riverflow.png",
      tags: ["React", "Node.js", "D3.js"],
      category: "web",
      url: "https://qna-sandy.vercel.app",
      github: "https://github.com/Shash-04/qna"
    },
    {
      id: 2,
      title: "EchoSecrets",
      description: "End-to-end encrypted secret messaging application with anonymous message sending feature.",
      image: "/echosecrets.png",
      tags: ["React Native", "Firebase", "Encryption"],
      category: "mobile",
      url: "https://echo-secrets.netlify.app",
      github: "https://github.com/Shash-04/ama"
    },
    {
      id: 3,
      title: "Tracktide",
      description: "Music discovery platform with various courses and .",
      image: "/rapsheet.png",
      tags: ["Vue.js", "Python", "Machine Learning"],
      category: "web",
      url: "https://tracktide.vercel.app",
      github: "https://github.com/Shash-04/Rapsheet"
    },
    {
      id: 4,
      title: "Shash-Blogs",
      description: "A minimalist blogging platform focused on typography and reading experience.",
      image: "/shashblog.jpeg",
      tags: ["Next.js", "MongoDB", "Tailwind CSS"],
      category: "web",
      url: "https://shashblog.vercel.app",
      github: "https://github.com/Shash-04/shashblog"
    },
    {
      id: 5,
      title: "Medtrack",
      description: "Healthcare application for tracking medications and appointments with reminder system.",
      image: "/Medtrack.png",
      tags: ["React", "Express", "MongoDB"],
      category: "web",
      url: "https://medtrack-hans-innvoverse.vercel.app",
      github: "https://github.com/Shash-04/Medtrack-HansInnvoverse"
    },
    {
      id: 6,
      title: "Lifestats",
      description: "Personal analytics dashboard for health, productivity, and habit tracking.",
      image: "/lifestats.png",
      tags: ["React", "Chart.js", "Firebase"],
      category: "web",
      url: "https://life-stats-og-shashs-projects.vercel.app",
      github: "https://github.com/Shash-04/Life-Stats"
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Apps' },
    { key: 'mobile', label: 'Mobile Apps' }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  useEffect(() => {
    const filtered = activeFilter === 'all'
      ? projects
      : projects.filter(project => project.category === activeFilter);

    setFilteredProjects(filtered);
    setTimeout(() => setIsLoaded(true), 300);
  }, [activeFilter]);

  return (
    <div className="text-white min-h-screen">
      <Head>
        <title>Projects | Developer Portfolio</title>
        <meta name="description" content="Showcase of my development projects and work" />
      </Head>

      <main className="container mx-auto px-4 py-20 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-6xl font-bold mb-6">My Projects</h1>
          <div className="h-1 w-20 bg-purple-500 mx-auto mb-12 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A collection of my work across web development, mobile applications, and UI/UX design.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveFilter(category.key)}
              className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${activeFilter === category.key
                ? 'bg-purple-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isLoaded ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </main>
    </div>
  );
}

const ProjectCard = ({ project }: ProjectCardProps): ReactElement => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <motion.div
      variants={{
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
      }}
      className="relative overflow-hidden rounded-2xl bg-gray-900 group h-[400px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-[200px] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
      </div>

      {/* Project Info */}
      <div className="p-6 relative z-10">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-800 text-xs text-gray-300 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-black/80 flex items-center justify-center space-x-4 z-20"
      >
        <Link href={project.url} target="_blank">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full"
          >
            Live Demo
          </motion.button>
        </Link>
        <Link href={project.github} target="_blank">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full"
          >
            GitHub
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
};
