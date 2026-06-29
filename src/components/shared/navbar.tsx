"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Pillars", href: "#pillars" },
  { label: "Tracks", href: "#tracks" },
  { label: "Projects", href: "#projects" },
  { label: "Events", href: "#events" },
  { label: "FAQ", href: "#faq" },
  { label: "Connect", href: "#connect" },
];

export function Navbar() {
  const scrolled = useScroll(20);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <Image
              src="/images/logo.png"
              alt="GZ Logo"
              width={36}
              height={36}
              className="h-9 w-9 shrink-0 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex items-center gap-0.5">
              <span className="text-sm font-bold tracking-tight text-white transition-colors">
                GROUND{" "}
              </span>
              <span className="text-sm font-bold tracking-tight text-brand transition-all group-hover:drop-shadow-[0_0_12px_rgba(204,255,0,0.5)]">
                ZERO
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 text-sm text-foreground-secondary hover:text-white transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 bg-brand transition-all duration-300 group-hover:w-3/4" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Button
              variant="solid"
              size="sm"
              href="https://discord.gg/4H2v6UwjmY"
            >
              Join Discord
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white hover:text-brand transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-b border-white/[0.06]"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm text-foreground-secondary hover:text-white hover:bg-white/[0.03] rounded-lg transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3">
                <Button
                  variant="solid"
                  size="md"
                  href="https://discord.gg/4H2v6UwjmY"
                  className="w-full"
                >
                  Join Discord
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
