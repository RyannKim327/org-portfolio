"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Frontend Developer",
    quote: "Ground Zero gave me the space to collaborate on real production-grade code. The feedback loops here helped me advance my framework knowledge faster than any self-study course.",
    initials: "AR",
  },
  {
    name: "Mia Santos",
    role: "UI/UX Designer",
    quote: "The interactive design reviews at Ground Zero are incredibly valuable. It's refreshing to work side-by-side with engineers who are eager to bring design prototypes to life.",
    initials: "MS",
  },
  {
    name: "Jordan Kim",
    role: "Security Engineer",
    quote: "Participating in community CTFs and security walkthroughs kept me motivated. GZ is a fantastic place to share knowledge and discuss real-world infrastructure vulnerabilities.",
    initials: "JK",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-24 border-t border-white/[0.04]">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-medium text-brand uppercase tracking-widest">
            Spotlight
          </span>
          <h2 className="mt-2.5 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Member Spotlight
          </h2>
          <p className="mt-3 text-sm text-foreground-secondary max-w-lg mx-auto">
            See how developers, designers, and creators are leveraging the community to build skills and collaborate.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={cardVariants}>
              <Card className="h-full flex flex-col justify-between p-5 relative hover:border-brand/35 transition-all duration-300">
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="space-y-4">
                    <Quote size={16} className="text-brand/40" />
                    <p className="text-xs text-foreground-secondary leading-relaxed italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  {/* Profile info */}
                  <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-muted text-[10px] font-bold text-brand tracking-wider shrink-0 select-none">
                      {t.initials}
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white leading-tight">
                        {t.name}
                      </h4>
                      <p className="text-[10px] text-foreground-muted">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
