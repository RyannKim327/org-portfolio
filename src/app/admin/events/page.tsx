import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
    <div className="flex flex-row h-full w-full gap-2">

      {/* Form for making another event */}
      <form className="flex flex-col h-full w-[calc(70%-0.5rem)] gap-2">
        <div className="flex flex-col md:flex-row gap-2">
          <Input label="Name" type="text" required />
          <Input label="Type" type="text" required />
        </div>

        <div className="flex flex-col md:flex-row gap-2">
          <Input label="Location" type="text" required />
          <Input label="Schedule" type="datetime-local" required />
        </div>

        <div className="flex flex-col md:flex-row gap-2">
          <Textarea className="resize-none h-[10rem]" label="Description" required />
        </div>

        {/* Action buttons */}
        <div className="flex justify-end w-full gap-2">
          <Button variant="outline" type="submit">Create event</Button>
          <Button variant="solid" className="bg-error text-white hover:bg-error/75" type="submit">Clear</Button>
        </div>
      </form>
      <div className="flex flex-col h-full w-[calc(30%-0.5rem)] gap-2 overflow-hidden overflow-y-auto scrollbar-track-transparent scrollbar-thumb-brand">
        {
          events.map((event) => {
            return (
              <Card className="flex flex-col gap-2 cursor-pointer">
                <div className="flex flex-col">
                  <span>{event.title}</span>
                  <span className="text-xs">{event.date} - {event.location}</span>
                </div>
                <blockquote className="text-sm border-l-3 pl-2 border-l-brand border-l-solid">&emsp;{event.description}</blockquote>
              </Card>
            )
          })
        }
      </div>
    </div>
  )
}
