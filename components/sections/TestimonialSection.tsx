"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { StaggerChildren } from "@/components/animations/StaggerChildren"
import { FadeInItem } from "@/components/animations/FadeInItem"
import { FadeInOnScroll } from "@/components/animations/FadeInOnScroll"
import type { Testimonial } from "@/lib/cms/types"

interface TestimonialSectionProps {
  testimonials: Testimonial[]
}

export function TestimonialSection({ testimonials }: TestimonialSectionProps) {
  return (
    <section className="bg-muted/50 py-12 sm:py-14 md:py-16">
      <div className="container px-4 sm:px-6">
        <FadeInOnScroll>
          <div className="mb-8 sm:mb-10 md:mb-12 text-center">
            <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-bold">What People Are Saying</h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Stories from our community
            </p>
          </div>
        </FadeInOnScroll>

        <StaggerChildren className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3" role="list">
          {testimonials.map((testimonial, index) => (
            <FadeInItem key={index} className="h-full">
              <motion.div
                className="h-full"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="flex h-full flex-col border-primary/20" role="listitem">
                  <CardContent className="flex flex-1 flex-col p-4 sm:p-6">
                    <Quote className="mb-3 sm:mb-4 h-6 w-6 sm:h-8 sm:w-8 text-primary/50" />
                    <p className="mb-4 flex-1 text-sm sm:text-base text-muted-foreground">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div className="mt-auto border-t border-primary/10 pt-3 sm:pt-4">
                      <p className="text-sm sm:text-base font-semibold">{testimonial.name}</p>
                      {testimonial.role && (
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeInItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

