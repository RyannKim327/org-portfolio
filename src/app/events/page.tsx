import { Card } from "@/components/ui/card";
import { eventsProperties } from "@/interfaces";
import { get } from "@/lib/api";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { use } from "react";

const api = get("/events")

export default function EventsPage() {
  const events = use(api) as eventsProperties[]

  return (
    <div className="flex flex-col">
      <span>Events Lists</span>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2 w-full">
        {
          events.map((event: eventsProperties, i: number) => {
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
                  <span className="text-xs">{event.started} - {event.end} [{event.location}]</span>
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
