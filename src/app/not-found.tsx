"use client";

import { motion } from "framer-motion";
import { Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlowEffect } from "@/components/ui/glow-effect";

const digitVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.6 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      delay: 0.08 * i,
    },
  }),
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-bg" />

      {/* Floating error codes */}
      <div className="absolute top-[15%] right-[10%] text-[10px] font-mono text-brand/10 tracking-wider animate-float hidden sm:block select-none">
        0x194
      </div>
      <div
        className="absolute bottom-[20%] left-[8%] text-[10px] font-mono text-brand/10 tracking-wider animate-float select-none"
        style={{ animationDelay: "-3s" }}
      >
        NULL_REF
      </div>
      <div className="absolute top-[25%] left-[15%] text-[10px] font-mono text-brand/[0.07] tracking-wider animate-pulse-slow hidden sm:block select-none">
        SEGFAULT
      </div>

      {/* Glow orb */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 pointer-events-none"
        animate={{
          y: [0, -12, 0],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <GlowEffect size="600px" color="rgba(204, 255, 0, 0.035)" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        {/* 404 with staggered digit entrance */}
        <div className="flex justify-center items-center">
          {[4, 0, 4].map((digit, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={digitVariants}
              initial="hidden"
              animate="visible"
              className="text-[10rem] sm:text-[14rem] lg:text-[18rem] font-bold font-mono leading-none text-brand neon-glow select-none animate-digit-glitch"
            >
              {digit}
            </motion.span>
          ))}
        </div>

        {/* Content stagger */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm font-mono text-brand/70 tracking-widest uppercase"
          >
            &gt; Error 404 — Page Not Found
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-sm sm:text-base text-foreground-secondary max-w-md mx-auto leading-relaxed"
          >
            This page wandered off the grid. It might have been eaten by a stray
            semicolon or lost in a stack trace.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Button variant="solid" size="md" href="/" className="w-full sm:w-auto">
              <Home size={14} />
              Back Home
            </Button>
            <Button
              variant="outline"
              size="md"
              href="https://discord.gg/4H2v6UwjmY"
              className="w-full sm:w-auto"
            >
              Join Discord
              <ArrowRight size={14} />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
