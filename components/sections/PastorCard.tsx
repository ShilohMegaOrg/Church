"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface PastorCardProps {
  name: string
  title: string
  image: string
  objectPosition?: string
  bio?: string
}

export function PastorCard({ name, title, image, objectPosition, bio }: PastorCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden transition-shadow hover:shadow-lg">
        <div className="relative h-80 w-full overflow-hidden sm:h-96">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full"
          >
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              style={{ objectPosition: objectPosition ?? "center" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        </div>
        <CardContent className="p-6">
          <h3 className="mb-1 text-xl font-semibold">{name}</h3>
          <p className="mb-3 text-sm text-muted-foreground">{title}</p>
          {bio && <p className="text-sm text-muted-foreground">{bio}</p>}
        </CardContent>
      </Card>
    </motion.div>
  )
}
