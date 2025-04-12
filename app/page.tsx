'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { HeroSection } from '@/components/sections/hero';
import { TechStack } from '@/components/sections/tech-stack';
import ProjectsShowcase from '@/components/sections/projects';
import { Header } from '@/components/header';
import Contact from '@/components/sections/contact';
import About from '@/components/sections/about';

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    // Only run this code in the browser where document exists
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          const yOffset = -80; // adjust this if you have a sticky header
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }
  }, [pathname]);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 space-y-20">
        <section id="hero">
          {/* <HeroSection /> */}
        </section>
        <TechStack />
        <section id="projects">
          <ProjectsShowcase />
        </section>
        <section id='about'>
        <About/>
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </main>
  );
}
