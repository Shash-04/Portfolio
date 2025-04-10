"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { Moon, Sun, Menu, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setMounted(true);
    
    // Track active section based on scroll position
    const handleScroll = () => {
      const sections = ["projects", "about", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      setActiveSection(currentSection || "");
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const navItems = [
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <a className="flex pl-4 items-center space-x-2 mr-8" href="/">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">S</div>
            <span className="font-bold text-lg">
              Shashwat's Portfolio
            </span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                className={`relative py-2 text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.name.toLowerCase() ? "text-primary" : "text-foreground/80"
                }`}
                href={item.href}
              >
                {item.name}
                {activeSection === item.name.toLowerCase() && (
                  <motion.div 
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" 
                  />
                )}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex items-center gap-2 border-primary text-primary hover:bg-primary/10"
            onClick={() => window.open("mailto:shashwat1@gmail.com", "_blank")}
          >
            <span>Get in Touch</span>
            <ExternalLink className="h-4 w-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden md:hidden"
          >
            <div className="px-4 py-4 space-y-4 bg-background/95 backdrop-blur">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navItems.indexOf(item) * 0.1 }}
                  className={`block py-2 px-2 text-lg rounded-md ${
                    activeSection === item.name.toLowerCase() 
                      ? "bg-primary/10 text-primary font-medium" 
                      : "hover:bg-accent text-foreground/80"
                  }`}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <Button
                  variant="default"
                  className="w-full mt-2 flex items-center justify-center gap-2"
                  onClick={() => {
                    window.open("mailto:contact@shashwat.com", "_blank");
                    setIsOpen(false);
                  }}
                >
                  <span>Get in Touch</span>
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}