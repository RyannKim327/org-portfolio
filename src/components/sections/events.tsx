"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { get } from "@/lib/api";
import { eventsProperties } from "@/interfaces";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export function Events() {

  const [events, setEvents] = useState([])

  useEffect(() => {
    (async () => {
      const data = await get('events')
      setEvents(data)
    })()
  }, [])

  const status = (start: string | Date, end: string | Date) => {
    const today = Date.now()
    start = new Date(start)
    end = new Date(end)
    if (today < start.getDate()) {
      return "Upcomming"
    }
    if (today < end.getDate()) {
      return "Ongoing"
    }
    return "Ended"
  }

  return (
    <section id="events" className="relative py-20 sm:py-24 border-t border-white/[0.04]">
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
            Schedule
          </span>
          <h2 className="mt-2.5 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Upcoming Events
          </h2>
          <p className="mt-3 text-sm text-foreground-secondary max-w-lg mx-auto">
            Stay active, build connection, and level up with workshops, guest talks, and collaborative coding sessions.
          </p>
        </motion.div>

        {/* Events List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-4"
        >
          {events.map((event: eventsProperties) => (
            <motion.div key={event.title} variants={itemVariants}>
              <Card className="p-4 sm:p-5 hover:border-brand/35 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Left Column: Date & Details */}
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="default" className="text-[10px] font-semibold tracking-wider uppercase">
                        {event.type}
                      </Badge>
                      <span className="text-[10px] text-foreground-muted uppercase tracking-wider flex items-center gap-1">
                        <Calendar size={10} className="text-brand" />
                        {event.started} - {event.end}
                      </span>
                      {/* <span className="text-[10px] text-foreground-muted uppercase tracking-wider flex items-center gap-1"> */}
                      {/*   <Clock size={10} className="text-brand" /> */}
                      {/*   {event.time} */}
                      {/* </span> */}
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-brand transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-xs text-foreground-secondary leading-relaxed max-w-2xl">
                      {event.description}
                    </p>

                    <div className="flex items-center gap-1.5 text-[11px] text-foreground-secondary/90">
                      <MapPin size={12} className="text-brand" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {/* Right Column: Status & Action Button */}
                  <div className="flex items-center md:flex-col justify-between md:justify-center md:items-end gap-3 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-white/[0.05]">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${event.status === "registration open" ? "bg-brand animate-pulse" : "bg-neutral-500"}`} />
                      <span className="text-[10px] text-foreground-muted uppercase tracking-widest">
                        {status(event.started, event.end)}
                      </span>
                    </div>
                    <Button variant="outline" size="sm" href={event.href} className="text-xs py-1.5 px-4">
                      {event.action}
                      <ArrowRight size={12} />
                    </Button>
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
