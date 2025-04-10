"use client";

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Lottie from "lottie-react";
import devAnimation from "@/public/Developer.json";


export function HeroSection() {
  return (

    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Hi, I'm{' '}
            <span className="text-primary">
              <TypeAnimation
                sequence={[
                  'Shashwat',
                  1000,
                  'a Developer',
                  1000,
                  'an Engineer',
                  1000,
                  'a Designer',
                  1000,
                  'a Student',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Full-stack developer crafting seamless digital experiences. Currently focused on building accessible, user-centric products with performance and design in mind.
          </p>
          <div className="flex gap-4">
            <Link href="Shash-New-CV.pdf" target='_blank'>
              <Button size="lg">
                Download CV
              </Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="outline">
                Contact Me
              </Button>
            </Link>
          </div>
          <div className="flex space-x-4">
            <motion.a
              href="https://github.com/Shash-04/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition-all duration-300"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-6 w-6 text-white" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/shashwat-vaish-6256442b4/rname"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition-all duration-300"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-6 w-6 text-white" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/shash.ded/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition-all duration-300"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram className="h-6 w-6 text-white" />
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 0.79 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-square"
        >
          <Lottie animationData={devAnimation} loop={true} className="h-full w-full" />
        </motion.div>
      </div>
    </section>
  );
}