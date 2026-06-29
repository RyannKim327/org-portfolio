"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Hammer, Share2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const pillars = [
  {
    index: "01",
    title: "Learn",
    icon: BookOpen,
    description:
      "Master modern technologies through hands-on collaboration. Grow your skills with structured paths and peer mentorship.",
  },
  {
    index: "02",
    title: "Build",
    icon: Hammer,
    description:
      "Create real-world projects with strong engineering practices. Ship products that matter and build your portfolio.",
  },
  {
    index: "03",
    title: "Share",
    icon: Share2,
    description:
      "Exchange knowledge, give feedback, and open doors to new opportunities. Contribute to open source and grow together.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function Mission() {
  return (
    <section id="pillars" className="relative py-20 sm:py-24">
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
            Our Foundation
          </span>
          <h2 className="mt-2.5 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Three Pillars of Growth
          </h2>
          <p className="mt-3 text-sm text-foreground-secondary max-w-lg mx-auto">
            Everything we do revolves around learning, building, and sharing — the
            foundation that makes our community thrive.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div key={pillar.title} variants={cardVariants}>
                <Card className="h-full group p-5">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-brand/15 group-hover:text-brand/30 transition-colors duration-300 select-none leading-none">
                        {pillar.index}
                      </span>
                      <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-muted group-hover:bg-brand/20 transition-colors duration-300">
                        <Icon size={16} className="text-brand" />
                      </div>
                    </div>

                    <h3 className="mt-4 text-base font-semibold text-white">
                      {pillar.title}
                    </h3>

                    <p className="mt-2 text-xs text-foreground-secondary leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
