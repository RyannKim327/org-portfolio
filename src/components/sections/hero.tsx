"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlowEffect } from "@/components/ui/glow-effect";
import { CodeParticles } from "@/components/ui/code-particles";

const titleContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

const words = ["Boundaries.", "Systems.", "Communities.", "Futures."];

export function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const activeWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    if (!isDeleting && currentText === activeWord) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }, 500);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? activeWord.substring(0, prev.length - 1)
            : activeWord.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-start overflow-hidden pt-24"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Code Particles Background */}
      <CodeParticles className="absolute inset-0 z-0 pointer-events-none opacity-60" />

      {/* Animated Glow Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/3 pointer-events-none"
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.05, 1],
          opacity: [0.25, 0.35, 0.25],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <GlowEffect size="700px" color="rgba(204, 255, 0, 0.04)" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 w-full">
        <div className="max-w-3xl flex flex-col items-start text-left space-y-6">

          {/* Text Container for Staggered Animations */}
          <motion.div
            variants={titleContainer}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {/* Giant Brand Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.95]"
            >
              <span className="text-white">GROUND </span>
              <span className="text-brand neon-glow">ZERO</span>
            </motion.h1>

            {/* Smaller Typewriter Tagline */}
            <motion.h2
              variants={itemVariants}
              className="text-xs sm:text-sm lg:text-base font-mono tracking-wider text-brand/90 uppercase min-h-[30px] flex items-center"
            >
              <span>Code Beyond Limits. Build Beyond&nbsp;</span>
              <span className="text-white inline-block">
                {currentText}
                <span className="text-white font-light animate-pulse ml-0.5">|</span>
              </span>
            </motion.h2>

            {/* Subtitle / Description */}
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-xs sm:text-sm text-foreground-secondary leading-relaxed pt-1"
            >
              A welcoming technology community for developers, students, designers,
              and tech enthusiasts to build practical projects, share knowledge, and
              learn together.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto pt-3"
            >
              <Button variant="solid" size="md" href="https://discord.gg/4H2v6UwjmY" className="w-full sm:w-auto">
                Join our Community
                <ArrowRight size={14} />
              </Button>
              <Button variant="outline" size="md" href="#projects" className="w-full sm:w-auto">
                Explore Projects
              </Button>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-10 sm:gap-14 pt-8"
            >
              {[
                { value: "500+", label: "Members" },
                { value: "50+", label: "Projects" },
                { value: "8", label: "Tracks" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-base sm:text-lg font-bold text-white tracking-tight font-mono">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-foreground-muted uppercase tracking-widest mt-1 font-mono">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
