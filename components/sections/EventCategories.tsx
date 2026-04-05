"use client"

import { EventCalendar } from "./EventCalendar"
import type { Event } from "@/lib/cms/types"

interface EventCategoriesProps {
  /** Upcoming events only (filtered on the server). */
  events: Event[]
}

export function EventCategories({ events }: EventCategoriesProps) {
  if (events.length === 0) {
    return (
      <p className="text-center text-muted-foreground">
        There are no upcoming activities listed right now. Please check back
        soon.
      </p>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-6 text-2xl font-bold">Upcoming Events</h2>
        <EventCalendar events={events} showAll />
      </div>
    </div>
  )
}
