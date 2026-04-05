"use client"

import { Clock, Calendar as CalendarIcon } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { StaggerChildren } from "@/components/animations/StaggerChildren"
import { FadeInItem } from "@/components/animations/FadeInItem"
import Link from "next/link"

const services = [
  {
    day: "Every Sunday",
    time: "9:50 AM",
    name: "Sunday Service",
    description: "Main worship service",
  },
  {
    day: "Every Wednesday",
    time: "7:00 PM",
    name: "Digging Deep / Faith Clinic",
    description: "Bible study and prayer session",
  },
  {
    day: "1st Sunday",
    time: "9:50 AM",
    name: "Thanksgiving Service",
    description: "Monthly thanksgiving celebration",
  },
  {
    day: "1st Sunday",
    time: "6:00 PM",
    name: "Communion Service",
    description: "Holy Communion — first Sunday evening each month",
  },
  {
    day: "3rd Sunday",
    time: "9:50 AM",
    name: "Youth Ministry",
    description: "Youth-focused service every third Sunday",
  },
]

export function ServiceSchedule() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6">
      <FadeInItem>
        <div className="mb-4 sm:mb-6 text-center">
          <h2 className="mb-2 text-xl font-semibold text-white sm:text-2xl md:text-3xl">
            Church Schedule
          </h2>
          <p className="text-sm sm:text-base text-white/80">Please join our services</p>
        </div>
      </FadeInItem>

      <StaggerChildren
        className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:items-stretch"
        role="list"
      >
        {services.map((service) => (
          <FadeInItem key={service.name} className="h-full min-h-0">
            <motion.div
              className="h-full"
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card
                className="flex h-full min-h-0 min-w-0 flex-col border-white/20 bg-white/10 backdrop-blur-sm"
                role="listitem"
              >
                <CardContent className="flex h-full flex-1 flex-col p-4 text-center sm:p-5 md:p-6">
                  <div className="mb-2 flex shrink-0 justify-center sm:mb-3">
                    <div className="rounded-full bg-white/20 p-2 sm:p-3">
                      <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="mb-1 shrink-0 text-base font-semibold text-white sm:text-lg">
                    {service.name}
                  </h3>
                  <div className="flex flex-1 flex-col justify-center px-0.5 py-1">
                    <p className="text-balance text-xs text-white/80 sm:text-sm">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-auto shrink-0 border-t border-white/15 pt-3 text-center text-white sm:pt-4">
                    <div className="flex items-center justify-center gap-1.5 whitespace-nowrap sm:gap-2">
                      <CalendarIcon className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
                      <span className="text-sm font-medium sm:text-base">{service.day}</span>
                    </div>
                    <span className="text-sm sm:text-base">{service.time}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </FadeInItem>
        ))}
      </StaggerChildren>

      <div className="mt-6 text-center">
        <Link
          href="/visit"
          className="text-sm text-white/90 underline hover:text-white"
        >
          What to expect on your first visit →
        </Link>
      </div>
    </div>
  )
}

