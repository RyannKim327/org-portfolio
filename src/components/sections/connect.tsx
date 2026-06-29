"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Users, Globe, Send, GitFork } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GlowEffect } from "@/components/ui/glow-effect";

const socials = [
  {
    name: "Discord Server",
    description: "Real-time discussions, voice channels, and community events.",
    icon: MessageCircle,
    href: "https://discord.gg/4H2v6UwjmY",
    hoverColor: "hover:border-[rgba(88,101,242,0.4)]",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(88,101,242,0.08)]",
    iconColor: "group-hover:text-[#5865F2]",
    label: "Join Server",
  },
  {
    name: "Facebook Page",
    description: "Community updates, event announcements, and tech content.",
    icon: Globe,
    href: "https://www.facebook.com/GroundZeroDigital/",
    hoverColor: "hover:border-[rgba(24,119,242,0.4)]",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(24,119,242,0.08)]",
    iconColor: "group-hover:text-[#1877F2]",
    label: "Follow Page",
  },
  {
    name: "Facebook Group",
    description: "Deeper discussions, project showcases, and networking.",
    icon: Users,
    href: "https://www.facebook.com/groups/groundzerocommunity/",
    hoverColor: "hover:border-[rgba(24,119,242,0.4)]",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(24,119,242,0.08)]",
    iconColor: "group-hover:text-[#1877F2]",
    label: "Join Group",
  },
  {
    name: "Messenger Group",
    description: "Quick chats, memes, and casual conversations with the community.",
    icon: Send,
    href: "https://m.me/j/AbarRjK6c6jmhIn9/?send_source=gc%3Acopy_invite_link_t",
    hoverColor: "hover:border-[rgba(0,132,255,0.4)]",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(0,132,255,0.08)]",
    iconColor: "group-hover:text-[#0084FF]",
    label: "Open Chat",
  },
  {
    name: "GitHub Organization",
    description: "Open-source projects, code repositories, and collaborative libraries.",
    icon: GitFork,
    href: "https://github.com/GroundZero-Community",
    hoverColor: "hover:border-[rgba(255,255,255,0.2)]",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(255,255,255,0.04)]",
    iconColor: "group-hover:text-white",
    label: "View Repositories",
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

export function Connect() {
  return (
    <section id="connect" className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <GlowEffect size="700px" color="rgba(204, 255, 0, 0.03)" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-medium text-brand uppercase tracking-widest">
              Connect
            </span>
            <h2 className="mt-2.5 text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Ready to{" "}
              <span className="text-brand neon-glow">Build Together?</span>
            </h2>
            <p className="mt-4 text-sm text-foreground-secondary leading-relaxed max-w-sm">
              Join hundreds of developers, designers, and tech enthusiasts who are
              already building, learning, and growing together.
            </p>
            <div className="mt-6">
              <Button
                variant="solid"
                size="md"
                href="https://discord.gg/4H2v6UwjmY"
              >
                Join the Community
                <ArrowRight size={14} />
              </Button>
            </div>
          </motion.div>

          {/* Right: Social Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <motion.div key={social.name} variants={cardVariants}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <Card
                      beam={social.name === "Discord Server"}
                      className={`h-full group cursor-pointer transition-all duration-300 p-4 ${social.hoverColor} ${social.glowColor}`}
                    >
                      <div className="relative z-10">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.05] mb-3 transition-colors">
                          <Icon
                            size={15}
                            className={`text-foreground-muted transition-colors duration-300 ${social.iconColor}`}
                          />
                        </div>
                        <h3 className="text-sm font-semibold text-white">
                          {social.name}
                        </h3>
                        <p className="mt-1.5 text-[11px] text-foreground-secondary leading-relaxed">
                          {social.description}
                        </p>
                        <span className="mt-3 inline-flex items-center gap-1 text-[10px] text-foreground-muted group-hover:text-white transition-colors">
                          {social.label}
                          <ArrowRight
                            size={10}
                            className="group-hover:translate-x-0.5 transition-transform duration-300"
                          />
                        </span>
                      </div>
                    </Card>
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
