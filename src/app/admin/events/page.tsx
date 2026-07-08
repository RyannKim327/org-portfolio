"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { get } from "@/lib/api";
import { use } from "react";

const eventApi = get("events")

export default function Events() {
  const events = use(eventApi)

  return (
    <div className="flex flex-row h-full w-full gap-2">

      {/* Form for making another event */}
      <form className="flex flex-col h-full w-[calc(70%-0.5rem)] gap-2 overflow-hidden overflow-y-auto scrollbar-track-transparent scrollbar-thumb-brand"> <div className="flex flex-col md:flex-row gap-2">
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
          <Button variant="solid" className="bg-error text-white hover:bg-error/75" type="reset">Clear</Button>
        </div>
      </form>
      <div className="flex flex-col h-full w-[calc(30%-0.5rem)] gap-2 overflow-hidden overflow-y-auto scrollbar-track-transparent scrollbar-thumb-brand">
        {events.length > 0 ?
          events.map((event, i) => {
            return (
              <Card
                className="flex flex-col gap-2 cursor-pointer"
                key={i}>
                <div className="flex flex-col">
                  <span>{event.title}</span>
                  <span className="text-xs">{event.date} - {event.location}</span>
                </div>
                <blockquote className="text-sm border-l-3 pl-2 border-l-brand border-l-solid">&emsp;{event.description}</blockquote>
              </Card>
            )
          }) : null
        }
      </div>
    </div>
  )
}
