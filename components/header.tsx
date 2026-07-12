"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const navItems = [
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["projects", "about", "contact"];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      setActiveSection(current || "");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left"
        style={{
          scaleX,
          background: "linear-gradient(90deg, #E8A33D, #E8622C)",
        }}
      />

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          scrolled ? "glass-dark shadow-lg shadow-black/30" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#hero"
              className="font-mono text-lg text-foreground/60 hover:text-amber-400 transition-colors duration-200"
            >
              ~/<span className="text-foreground/90 font-semibold">shashwat</span><span className="text-amber-400">_</span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1 font-mono">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 text-sm uppercase tracking-wider transition-all duration-200 border-b ${
                    activeSection === item.name.toLowerCase()
                      ? "text-amber-400 border-amber-400/60"
                      : "text-foreground/60 hover:text-foreground border-transparent hover:border-white/15"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-2 inline-flex items-center gap-2 px-4 py-2 text-sm uppercase tracking-wider font-semibold bg-amber-400 text-[#1a1408] hover:bg-amber-300 transition-all duration-200"
              >
                Hire Me
              </a>
            </nav>

            {/* Mobile Toggle */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="md:hidden flex items-center justify-center h-10 w-10 text-foreground/70 hover:text-foreground hover:bg-white/5 transition-all duration-200"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden glass-dark border-t border-white/5 font-mono"
            >
              <div className="px-4 py-4 space-y-1">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center px-4 py-3 text-sm uppercase tracking-wider transition-all duration-200 border-l-2 ${
                      activeSection === item.name.toLowerCase()
                        ? "text-amber-400 border-amber-400/60 bg-amber-400/5"
                        : "text-foreground/60 hover:text-foreground border-transparent hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navItems.length * 0.07 }}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 mt-2 text-sm uppercase tracking-wider font-semibold bg-amber-400 text-[#1a1408]"
                >
                  Hire Me
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
