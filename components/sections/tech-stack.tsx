"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Marquee } from "../magicui/marquee";

const techIcons = [
  { src: "https://skillicons.dev/icons?i=react", alt: "React" },
  { src: "https://skillicons.dev/icons?i=nextjs", alt: "Next.js" },
  { src: "https://skillicons.dev/icons?i=ts", alt: "TypeScript" },
  { src: "https://skillicons.dev/icons?i=js", alt: "JavaScript" },
  { src: "https://skillicons.dev/icons?i=tailwind", alt: "Tailwind CSS" },
  { src: "https://skillicons.dev/icons?i=nodejs", alt: "Node.js" },
  { src: "https://skillicons.dev/icons?i=express", alt: "Express" },
  { src: "https://skillicons.dev/icons?i=mongodb", alt: "MongoDB" },
  { src: "https://skillicons.dev/icons?i=prisma", alt: "Prisma" },
  { src: "https://skillicons.dev/icons?i=mysql", alt: "MySQL" },
  { src: "https://skillicons.dev/icons?i=firebase", alt: "Firebase" },
  { src: "https://skillicons.dev/icons?i=git", alt: "Git" },
  { src: "https://skillicons.dev/icons?i=github", alt: "GitHub" },
  { src: "https://skillicons.dev/icons?i=vscode", alt: "VS Code" },
  { src: "https://skillicons.dev/icons?i=vite", alt: "Vite" },
  { src: "https://skillicons.dev/icons?i=java", alt: "Java" },
  { src: "https://skillicons.dev/icons?i=cpp", alt: "C++" },
  { src: "https://skillicons.dev/icons?i=html", alt: "HTML5" },
  { src: "https://skillicons.dev/icons?i=css", alt: "CSS3" },
  { src: "https://skillicons.dev/icons?i=bootstrap", alt: "Bootstrap" },
];

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const firstHalf = techIcons.slice(0, Math.ceil(techIcons.length / 2));
  const secondHalf = techIcons.slice(Math.ceil(techIcons.length / 2));

  return (
    <section ref={ref} className="py-8 w-full">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="eyebrow mb-4">my toolkit</div>
        <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">Tech Stack</h2>
        <p className="text-foreground/50 max-w-lg mx-auto text-sm">
          Technologies I use daily to bring ideas to life — from frontend to backend to databases.
        </p>
        <div className="h-px w-24 mx-auto mt-4 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
      </motion.div>

      {/* Dual Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-4"
      >
        {/* Row 1 — Left to Right */}
        <Marquee pauseOnHover className="[--duration:60s]" repeat={3}>
          {firstHalf.map((icon, index) => (
            <IconCard key={index} icon={icon} />
          ))}
        </Marquee>

        {/* Row 2 — Right to Left */}
        <Marquee pauseOnHover reverse className="[--duration:55s]" repeat={3}>
          {secondHalf.map((icon, index) => (
            <IconCard key={index} icon={icon} />
          ))}
        </Marquee>
      </motion.div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
    </section>
  );
}

function IconCard({ icon }: { icon: { src: string; alt: string } }) {
  return (
    <div className="group flex flex-col items-center justify-center gap-2 w-20 h-20 glass-dark border border-white/8 hover:border-amber-400/30 hover:glow-violet-sm transition-all duration-300 mx-2 cursor-default">
      <img
        src={icon.src}
        alt={icon.alt}
        className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
      />
      <span className="text-[10px] text-foreground/30 group-hover:text-foreground/60 transition-colors duration-200 text-center leading-tight">
        {icon.alt}
      </span>
    </div>
  );
}