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
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }
  }, [pathname]);

  return (
    <main className="min-h-screen bg-background font-[family-name:var(--font-outfit)]">
      <Header />
      <section id="hero">
        <HeroSection />
      </section>
      <div className="container mx-auto px-4 md:px-6 space-y-24 pt-24 pb-24">
        <section id="tech-stack">
          <TechStack />
        </section>
        <section id="projects">
          <ProjectsShowcase />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 font-mono">
        <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground/30 text-xs">
            © {new Date().getFullYear()} <span className="text-amber-400 font-medium">Shashwat Vaish</span>
          </p>
          <div className="flex items-center gap-1.5 text-xs text-foreground/20">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for work</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
