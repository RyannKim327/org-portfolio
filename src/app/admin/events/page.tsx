import { Card } from "@/components/ui/card";

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
];

export default function Events() {
  return (
    <div className="flex flex-row h-full w-full gap02">
      {/* Form for making another event */}
      <div className="h-full w-[calc(70%-0.5rem)]">
        Form here
      </div>
      <div className="flex flex-col h-full w-[calc(30%-0.5rem)] gap-2 overflow-hidden overflow-y-auto scrollbar-track-transparent scrollbar-thumb-brand">
        Lists here

        {
          events.map((event) => {
            return (
              <Card className="flex flex-col">
                <div>
                  <span>{event.title}</span>
                  <span className="text-xs">{event.date} - {event.location}</span>
                </div>
                <blockquote className="text-sm border-l-3 pl-2 border-l-brand border-l-solid">&emsp;{event.description}</blockquote>
                <span>{ }</span>
              </Card>
            )
          })
        }
      </div>
    </div>
  )
}
