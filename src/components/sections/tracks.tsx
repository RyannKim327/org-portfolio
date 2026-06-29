"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Palette,
  Brain,
  Shield,
  Terminal,
  Layers,
  Database,
  Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const tracks = [
  {
    id: "se",
    label: "Software Engineering",
    shortLabel: "Software",
    icon: Code2,
    description:
      "Full-stack development, APIs, databases, DevOps, and production-grade systems. Build scalable applications with modern frameworks.",
    tools: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Docker"],
    activities: [
      "Code reviews & pair programming",
      "System design workshops",
      "Production deployment practice",
    ],
  },
  {
    id: "uiux",
    label: "UI/UX Design",
    shortLabel: "UI/UX",
    icon: Palette,
    description:
      "User research, wireframing, prototyping, and building beautiful interfaces. Create designs that users love through empathy-driven processes.",
    tools: ["Figma", "Framer", "Adobe XD", "Tailwind CSS", "Storybook", "Webflow"],
    activities: [
      "Design critiques & feedback sessions",
      "UI challenges & redesigns",
      "Accessibility audits",
    ],
  },
  {
    id: "aiml",
    label: "AI & Machine Learning",
    shortLabel: "AI/ML",
    icon: Brain,
    description:
      "Machine learning, deep learning, NLP, computer vision, and generative AI. Implement real-world ML solutions from concept to deployment.",
    tools: ["Python", "PyTorch", "TensorFlow", "Hugging Face", "LangChain", "Jupyter"],
    activities: [
      "Model training workshops",
      "Kaggle competitions",
      "Paper reading groups",
    ],
  },
  {
    id: "cyber",
    label: "Cybersecurity",
    shortLabel: "Security",
    icon: Shield,
    description:
      "Penetration testing, network security, cryptography, and ethical hacking. Learn to protect systems and understand modern vulnerabilities.",
    tools: ["Kali Linux", "Burp Suite", "Wireshark", "Metasploit", "Nmap", "OWASP ZAP"],
    activities: [
      "CTF competitions",
      "Vulnerability research",
      "Security audit simulations",
    ],
  },
];

const additionalTracks = [
  { icon: Terminal, label: "Open Source" },
  { icon: Layers, label: "Programming Support" },
  { icon: Database, label: "Learning Resources" },
  { icon: Globe, label: "Project Showcases" },
];

export function Tracks() {
  const [activeTrack, setActiveTrack] = useState("se");
  const currentTrack = tracks.find((t) => t.id === activeTrack)!;

  return (
    <section id="tracks" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 glow-overlay pointer-events-none opacity-50" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-medium text-brand uppercase tracking-widest">
            Explore
          </span>
          <h2 className="mt-2.5 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Community Tracks
          </h2>
          <p className="mt-3 text-sm text-foreground-secondary max-w-lg mx-auto">
            Dive deep into the disciplines that drive modern tech. Each track offers
            curated tools, activities, and a community of practitioners.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-1.5 p-1 bg-white/[0.02] border border-white/[0.06] rounded-lg mb-8 max-w-4xl mx-auto"
        >
          {tracks.map((track) => {
            const Icon = track.icon;
            const isActive = activeTrack === track.id;
            return (
              <button
                key={track.id}
                onClick={() => setActiveTrack(track.id)}
                className={cn(
                  "relative flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-colors duration-200 cursor-pointer select-none",
                  isActive
                    ? "text-white"
                    : "text-foreground-secondary hover:text-white"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTrackTab"
                    className="absolute inset-0 bg-white/[0.08] border border-white/[0.08] rounded-md z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <Icon size={12} />
                  <span className="hidden md:inline">{track.label}</span>
                  <span className="md:hidden">{track.shortLabel}</span>
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Track Content Panel */}
        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTrack.id}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="rounded-lg border border-white/[0.08] bg-card-bg p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left: Description */}
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-muted">
                      <currentTrack.icon size={15} className="text-brand" />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {currentTrack.label}
                    </h3>
                  </div>
                  <p className="text-sm text-foreground-secondary leading-relaxed">
                    {currentTrack.description}
                  </p>

                  <div className="mt-5">
                    <h4 className="text-[10px] font-semibold text-foreground-muted uppercase tracking-wider mb-2.5">
                      Tools & Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {currentTrack.tools.map((tool) => (
                        <Badge key={tool}>{tool}</Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Activities */}
                <div>
                  <h4 className="text-[10px] font-semibold text-foreground-muted uppercase tracking-wider mb-3">
                    Activities & Events
                  </h4>
                  <div className="space-y-2">
                    {currentTrack.activities.map((activity, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:border-brand/20 transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                        <span className="text-xs text-foreground-secondary">
                          {activity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Additional Tracks */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5"
        >
          {additionalTracks.map((track) => {
            const Icon = track.icon;
            return (
              <div
                key={track.label}
                className="flex items-center gap-2.5 p-3 rounded-lg border border-card-border bg-card-bg hover:border-card-border-hover transition-all duration-300 group"
              >
                <Icon
                  size={14}
                  className="text-foreground-muted group-hover:text-brand transition-colors"
                />
                <span className="text-xs text-foreground-secondary group-hover:text-white transition-colors">
                  {track.label}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
