"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, GitFork } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "DevConnect Platform",
    description:
      "Real-time developer collaboration platform with live code sharing, video calls, and project management.",
    tags: ["Next.js", "WebRTC", "TypeScript"],
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    author: "Alex Rivera",
  },
  {
    title: "AI Study Companion",
    description:
      "Intelligent study assistant powered by LLMs that generates flashcards, quizzes, and summaries from documents.",
    tags: ["Python", "LangChain", "React"],
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    author: "Mia Santos",
  },
  {
    title: "SecureVault CLI",
    description:
      "Open-source command-line password manager with AES-256 encryption, 2FA, and cross-platform sync.",
    tags: ["Rust", "Crypto", "Open Source"],
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    author: "Jordan Kim",
  },
  {
    title: "DesignFlow UI Kit",
    description:
      "Comprehensive Figma-to-code design system with 200+ components, dark mode, and a11y-first patterns.",
    tags: ["Figma", "Tailwind", "Storybook"],
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    author: "Sam Chen",
  },
  {
    title: "NetWatch Dashboard",
    description:
      "Real-time network monitoring dashboard with anomaly detection, traffic visualization, and alerts.",
    tags: ["Go", "Grafana", "Docker"],
    gradient: "from-red-500/20 via-rose-500/10 to-transparent",
    author: "Casey Tran",
  },
  {
    title: "OpenLearn LMS",
    description:
      "Modern open-source learning management system with interactive coding exercises and progress tracking.",
    tags: ["Next.js", "Prisma", "Open Source"],
    gradient: "from-indigo-500/20 via-violet-500/10 to-transparent",
    author: "Riley Park",
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-24">
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
            Showcase
          </span>
          <h2 className="mt-2.5 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Community Projects
          </h2>
          <p className="mt-3 text-sm text-foreground-secondary max-w-lg mx-auto">
            Real projects built by community members. From web apps to security
            tools — see what&apos;s being built at Ground Zero.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={cardVariants}>
              <Card className="h-full group flex flex-col p-4">
                <div className="relative z-10 flex flex-col h-full">
                  {/* Gradient Preview */}
                  <div
                    className={`h-24 rounded-lg bg-gradient-to-br ${project.gradient} border border-white/[0.04] mb-4 flex items-center justify-center`}
                  >
                    <GitFork
                      size={24}
                      className="text-white/15 group-hover:text-white/30 transition-colors duration-300"
                    />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-semibold text-white group-hover:text-brand transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-1.5 text-xs text-foreground-secondary leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Footer */}
                  <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between">
                    <span className="text-[10px] text-foreground-muted">
                      by {project.author}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-foreground-muted group-hover:text-brand transition-colors">
                      View Project
                      <ArrowUpRight
                        size={10}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                      />
                    </span>
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
