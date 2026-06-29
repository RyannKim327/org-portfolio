"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Card } from "@/components/ui/card";

const faqs = [
  {
    question: "Is Ground Zero free to join?",
    answer: "Yes, completely. Ground Zero is a volunteer-led, open community. All our study groups, code jams, and project collaborations are free and open to everyone.",
  },
  {
    question: "How do I get started or join a project team?",
    answer: "Once you join our Discord server, head over to the #get-started channel to choose your tracks. You can join ongoing projects in the #projects channel, participate in code jams, or start a new team.",
  },
  {
    question: "What if I have no prior coding experience?",
    answer: "Everyone is welcome. We have tracks tailored specifically for beginners, and our learning resources are designed to help you go from zero to building practical software.",
  },
  {
    question: "Can I suggest or lead a new project?",
    answer: "Absolutely. We encourage members to propose projects. Share your idea in our showcase channels, pitch it during community meetups, and recruit other members to build it with you.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 sm:py-24 border-t border-white/[0.04]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-medium text-brand uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="mt-2.5 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-foreground-secondary max-w-md mx-auto">
            Find answers to common questions about Ground Zero, project teams, and how to get involved.
          </p>
        </motion.div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Card
                key={faq.question}
                hover={false}
                className="p-0 border border-card-border overflow-hidden transition-all duration-300 hover:border-white/15"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left p-4 cursor-pointer select-none focus:outline-none"
                >
                  <span className="text-xs sm:text-sm font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <span className="shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-white/[0.04] text-foreground-secondary transition-colors duration-300">
                    {isOpen ? <Minus size={12} className="text-brand" /> : <Plus size={12} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-4 pb-4 pt-1 text-xs text-foreground-secondary leading-relaxed border-t border-white/[0.02]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
