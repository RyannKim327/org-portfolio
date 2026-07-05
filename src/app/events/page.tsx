import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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

export default function EventsPage() {
  return (
    <div className="flex flex-col">
      <span>Events Lists</span>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2 w-full">
        {
          events.map((event, i) => {
            return (
              <Card
                key={i}
                className="flex flex-col gap-2 cursor-pointer"
                beam={event.status === "ongoing"}>
                <div className="flex flex-col">
                  <div className="flex gap-2">
                    <span>{event.title}</span>
                    <span className="border-card-border">{event.status}</span>
                  </div>
                  <span className="text-xs">{event.date} - {event.location}</span>
                </div>
                <blockquote className="text-sm border-l-3 pl-2 border-l-brand border-l-solid">&emsp;{event.description}</blockquote>
                <Link
                  className="flex text-brand items-center gap-2"
                  href={`/events/${i}`}>Go Here <ArrowRight size={15} /></Link>
              </Card>
            )
          })
        }
      </div>
    </div>
  )
}
