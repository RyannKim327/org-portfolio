import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Send, Calendar, MapPin, ArrowRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";

// TODO: Dumy data for events and in layouting
const events = [
  {
    title: "Weekly Code Jam #42",
    description: "Bring your projects, collaborate with peers, ask questions, and build together in real time.",
    date: "Jul 04, 2026",
    time: "7:00 PM - 9:00 PM PST",
    location: "Discord Voice Channels",
    status: "registration open",
    type: "Virtual",
    actionText: "RSVP on Discord",
    href: "https://discord.gg/4H2v6UwjmY",
  },
  {
    title: "Introduction to System Design",
    description: "Learn how to design scalable architectures, microservices, databases, and caching layers.",
    date: "Jul 11, 2026",
    time: "6:00 PM - 7:30 PM PST",
    location: "Discord Stage Channel",
    status: "upcoming",
    type: "Workshop",
    actionText: "Set Reminder",
    href: "https://discord.gg/4H2v6UwjmY",
  },
  {
    title: "ZeroToHero hackathon 2026",
    description: "A 48-hour challenge to design and build open-source products that solve real-world problems.",
    date: "Jul 24 - 26, 2026",
    time: "Weekend Event",
    location: "Hybrid (Discord & Local Hubs)",
    status: "upcoming",
    type: "Hackathon",
    actionText: "Register Team",
    href: "https://discord.gg/4H2v6UwjmY",
  },
  {
    title: "ZeroToHero hackathon 2026",
    description: "A 48-hour challenge to design and build open-source products that solve real-world problems.",
    date: "Jul 24 - 26, 2026",
    time: "Weekend Event",
    location: "Hybrid (Discord & Local Hubs)",
    status: "ongoing",
    type: "Hackathon",
    actionText: "Register Team",
    href: "https://discord.gg/4H2v6UwjmY",
  },
];

// TODO: Dummy Message for layout only
const messages = [
  {
    "user": "RyannKim327",
    "message": "Hello World"
  },
  {
    "user": "0xp47",
    "message": "Test"
  },
  {
    user: "Jampol",
    message: "sdgfsdf sddnjsf sdjf skf sdkjf kjdf hskdhfsfsdfsdwedw"
  },
  {
    user: "jirum",
    message: "sdgfsdf sddnjsf sdjf skf sdkjf kjdf hskdhfsfsdfsdwedw"
  },
  {
    user: "Jampol",
    message: "sdgfsdf sddnjsf sdjf skf sdkjf kjdf hskdhfsfsdfsdwedw"
  },
  {
    user: "RyannKsdfsdfsdfsdfsdf",
    message: "sdgfsdf sddnjsf sdjf skf sdkjf kjdf hskdhfsfsdfsdwedw"
  }
];

interface PageProps {
  params: Promise<{ slug?: string }>;
}

export default async function EventsDiscussion({ params }: PageProps) {
  // TODO: To extract the parameters for the discussions
  const param = await params;

  // TODO: This part must be a call from API.
  const digit = /\d/
  if (param.slug) {
    if (!digit.test(param?.slug)) {
      redirect("/")
    }
  } else {
    redirect("/")
  }

  const eventIndex = parseInt(param.slug ?? "0");
  const event = events[eventIndex] || events[0];
  const user = "jampol";

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 lg:h-[calc(88vh-2rem)] w-full max-w-7xl mx-auto animate-fade-in">
      {/* Event details panel */}
      <div className="w-full lg:w-[58%] lg:h-full flex flex-col shrink-0">
        <Card hover={false} className="h-full flex flex-col p-6 sm:p-8 border-card-border justify-between">
          <div className="space-y-6">
            {/* Back to Events Nav */}
            <Link
              href="/events"
              className="inline-flex items-center gap-1.5 text-xs text-foreground-muted hover:text-brand transition-colors font-mono tracking-wider"
            >
              <ChevronLeft size={14} />
              BACK_TO_EVENTS
            </Link>

            {/* Event Category & Status Badges */}
            <div className="flex flex-wrap items-center gap-3">
              {event.type && (
                <Badge variant="default" className="text-[10px] tracking-wider uppercase font-mono px-2.5 py-0.5">
                  {event.type}
                </Badge>
              )}
              {event.status && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/[0.06] bg-black text-[10px] text-foreground-muted uppercase tracking-wider font-mono">
                  <span
                    className={cn(
                      "w-1.5 h-1.5 rounded-full",
                      event.status === "registration open" || event.status === "ongoing"
                        ? "bg-brand animate-pulse"
                        : "bg-neutral-500"
                    )}
                  />
                  {event.status}
                </span>
              )}
            </div>

            {/* Title */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase font-display leading-tight">
                {event.title}
              </h1>
            </div>

            {/* Metadata (Location & Date/Time) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-white/[0.01] border border-white/[0.04]">
                <Calendar className="text-brand shrink-0 mt-0.5" size={16} />
                <div className="space-y-0.5">
                  <span className="block text-[10px] font-mono text-foreground-muted uppercase tracking-wider">
                    Schedule / Date & Time
                  </span>
                  <span className="text-sm font-semibold text-white leading-snug">
                    {event.date}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-white/[0.01] border border-white/[0.04]">
                <MapPin className="text-brand shrink-0 mt-0.5" size={16} />
                <div className="space-y-0.5">
                  <span className="block text-[10px] font-mono text-foreground-muted uppercase tracking-wider">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-white leading-snug">
                    {event.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Description Block */}
            <div className="space-y-2">
              <span className="block text-[10px] font-mono text-foreground-muted uppercase tracking-wider">
                Event Overview
              </span>
              <p className="text-sm text-foreground-secondary leading-relaxed bg-white/[0.01] border-l-2 border-brand p-4 rounded-r-lg font-sans">
                {event.description}
              </p>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-6 border-t border-white/[0.04] mt-6 lg:mt-0">
            <Button
              variant="solid"
              className="w-full sm:w-auto py-3 px-6 text-xs uppercase tracking-widest font-mono font-bold"
              href={event.href}
            >
              {event.actionText}
              <ArrowRight size={14} />
            </Button>
          </div>
        </Card>
      </div>

      {/* Event discussion room */}
      <div className="w-full lg:w-[42%] h-[600px] lg:h-full flex flex-col">
        <Card hover={false} className="h-full flex flex-col p-5 border-card-border overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
              <h3 className="text-xs font-mono font-bold text-white tracking-wider uppercase">
                DISCUSSION_ROOM // {event.title.substring(0, 18)}
                {event.title.length > 18 && "..."}
              </h3>
            </div>
            <span className="text-[9px] font-mono text-foreground-muted bg-white/[0.03] border border-white/[0.06] px-2 py-0.5 rounded">
              {messages.length} MESSAGES
            </span>
          </div>

          {/* Message History */}
          <div className="flex flex-col flex-1 h-full pr-1 overflow-y-auto space-y-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-brand">
            {messages.map((msg, idx) => {
              const isMe = msg.user.toLowerCase() === user.toLowerCase();
              return (
                <div
                  key={idx}
                  className={cn(
                    "flex flex-col w-full",
                    isMe ? "items-end" : "items-start"
                  )}
                >
                  <span className="text-[10px] font-mono text-foreground-muted mb-1 px-1 flex items-center gap-1 select-none">
                    <span className={isMe ? "text-brand" : "text-white"}>&gt;_</span>
                    {msg.user.substring(0, 15)}
                    {msg.user.length > 15 && "..."}
                  </span>
                  <Card
                    hover={false}
                    className={cn(
                      "max-w-[85%] text-xs p-3.5 leading-relaxed font-mono border-card-border",
                      isMe
                        ? "bg-brand-muted/10 border-brand/20 text-white rounded-tr-none rounded-2xl"
                        : "bg-white/[0.02] border-white/[0.06] text-foreground-secondary rounded-tl-none rounded-2xl"
                    )}
                  >
                    {msg.message}
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Input Area */}
          <div className="flex items-center gap-2 mt-4 p-2 bg-black border border-white/[0.06] rounded-lg focus-within:border-brand/40 transition-colors shrink-0">
            <input
              className="flex-1 bg-transparent border-none text-xs font-mono text-white placeholder-foreground-muted outline-none px-2 py-1"
              type="text"
              placeholder="Type your message... [press Enter]"
            />
            <button
              className="flex items-center justify-center w-8 h-8 rounded-md bg-white/[0.03] border border-white/[0.08] hover:bg-brand/10 hover:border-brand/30 text-foreground-secondary hover:text-brand transition-all duration-200 cursor-pointer">
              <Send size={12} />
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}
