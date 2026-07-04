import { Card } from "@/components/ui/card";
import { defaultParams } from "@/interfaces";
import { Send } from "lucide-react";
import Link from "next/link";

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
    user: "0c3ef8",
    message: "sdgfsdf sddnjsf sdjf skf sdkjf kjdf hskdhfsfsdfsdwedw"
  },
  {
    user: "Jampol",
    message: "sdgfsdf sddnjsf sdjf skf sdkjf kjdf hskdhfsfsdfsdwedw"
  },
  {
    user: "RyannKim327",
    message: "sdgfsdf sddnjsf sdjf skf sdkjf kjdf hskdhfsfsdfsdwedw"
  }
]

export default async function EventsDiscussion({ params }: defaultParams) {

  // TODO: To extract the parameters for the discussions
  const param = await params

  // TODO: This part must be a call from API.
  const event = events[parseInt(param.slug ?? "0")]
  const user = "jampol"

  return (
    <div className="flex flex-row gap-2 p-2 h-[calc(90vh-3rem)] w-full">
      <div className="grid grid-cols-2 w-[calc(60%-0.5rem)] content-start">
        <span >Event Name</span>
        <span >{event.title}</span>

        <span >Event Location</span>
        <span>{event.location}</span>

        <span>Time and Time</span>
        <span>{event.date}</span>

        <span>Description</span>
        <span>{event.description}</span>

        <span className="col-span-2">
          <Link href={event.href}>{event.actionText}</Link>
        </span>
      </div>
      <div className="flex flex-col h-full w-[calc(40%-0.5rem)]">
        <span className="text-lg">{event.title} - Discussion</span>
        <hr />
        <div className="flex flex-col flex-1 h-full py-5 overflow-y-auto">
          {
            messages.map((msg) => {
              return (
                <div className={`flex flex-col w-full ${msg.user.toLowerCase() === user.toLowerCase() ? "items-end" : "items-start"} py-2`}>
                  <span className="text-xs">{msg.user}</span>
                  <Card hover={false} className="max-w-[calc(75%-0.5rem)]">{msg.message}</Card>
                </div>
              )
            })
          }
        </div>
        <div className="flex bg-card-bg w-full p-2 rounded gap-2">
          <input className="flex-1 outline-none" type="text" />
          <Send />
        </div>
      </div>
    </div>
  )
}
