"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { defaultParams, get } from "@/lib/api";

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
  const [testimonials, setTestimonials] = useState<defaultParams | null>(null)

  useEffect(() => {
    (async () => {
      const data = await get("testimonials", {
        start: 0,
        limit: 3
      }) as defaultParams

      if (data.error) {
        return console.error(`ERR [Testimonials]: ${data.error}`)
      }
      setTestimonials(data)
    })()
  }, [])

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
          {!testimonials ?
            Array.from({ length: 3 }).map((_, i) => {
              <Card className="h-full flex flex-col justify-between p-5 relative overflow-hidden">
                <div className="flex flex-col h-full justify-between animate-pulse">
                  test
                  <div className="space-y-4">
                    {/* Quote icon */}
                    <div className="h-4 w-4 rounded bg-white/10" />

                    {/* Quote */}
                    <div className="space-y-2">
                      <div className="h-3 w-full rounded bg-white/10" />
                      <div className="h-3 w-11/12 rounded bg-white/10" />
                      <div className="h-3 w-10/12 rounded bg-white/10" />
                      <div className="h-3 w-7/12 rounded bg-white/10" />
                    </div>
                  </div>

                  {/* Profile */}
                  <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 shrink-0" />

                    <div className="flex-1 space-y-2">
                      <div className="h-3 w-24 rounded bg-white/10" />
                      <div className="h-2 w-16 rounded bg-white/10" />
                    </div>
                  </div>
                </div>
              </Card>
            })
            :
            testimonials.map((t) => (
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
