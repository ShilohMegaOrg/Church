"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { YouthGalleryItem } from "@/lib/youth-gallery"

interface YouthGalleryGridProps {
  items: YouthGalleryItem[]
}

export function YouthGalleryGrid({ items }: YouthGalleryGridProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const close = useCallback(() => setOpenIndex(null), [])

  const goPrev = useCallback(() => {
    setOpenIndex((i) => {
      if (i === null || items.length === 0) return null
      return (i - 1 + items.length) % items.length
    })
  }, [items.length])

  const goNext = useCallback(() => {
    setOpenIndex((i) => {
      if (i === null || items.length === 0) return null
      return (i + 1) % items.length
    })
  }, [items.length])

  useEffect(() => {
    if (openIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") goPrev()
      if (e.key === "ArrowRight") goNext()
    }
    window.addEventListener("keydown", onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [openIndex, close, goPrev, goNext])

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-lg space-y-3 text-center">
        <p className="text-muted-foreground">
          Gallery photos will appear here soon.
        </p>
        {process.env.NODE_ENV === "development" && (
          <p className="text-xs text-muted-foreground">
            Dev: add JPEGs under{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono">public/youth-gallery/</code>{" "}
            and list filenames in{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono">YOUTH_GALLERY_FILENAMES</code>{" "}
            in <code className="font-mono">lib/youth-gallery.ts</code>.
          </p>
        )}
      </div>
    )
  }

  const active = openIndex !== null ? items[openIndex] : null

  return (
    <>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group relative w-full overflow-hidden rounded-lg border bg-muted text-left shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  /* Multi-MB full-res JPEGs: default optimizer often 500s on serverless */
                  unoptimized
                  className="object-cover transition duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 transition group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="font-semibold leading-tight">{item.title}</p>
                  <p className="mt-1 text-sm text-white/90 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
              <span className="sr-only">View larger: {item.title}</span>
            </button>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {active && openIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="youth-gallery-lightbox-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/80 touch-manipulation"
              aria-label="Close gallery"
              onClick={close}
            />
            <motion.div
              className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-lg bg-background shadow-xl"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative aspect-[16/10] w-full shrink-0 bg-muted sm:aspect-[16/9]">
                <Image
                  src={active.imageSrc}
                  alt={active.title}
                  fill
                  unoptimized
                  className="object-contain"
                  sizes="(max-width: 896px) 100vw, 896px"
                  priority
                />
              </div>
              <div className="flex items-start justify-between gap-3 border-t p-4 sm:p-5">
                <div className="min-w-0">
                  <h2
                    id="youth-gallery-lightbox-title"
                    className="text-lg font-semibold sm:text-xl"
                  >
                    {active.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                    {active.caption}
                  </p>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="shrink-0 touch-manipulation"
                  onClick={close}
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              {items.length > 1 && (
                <div className="flex items-center justify-center gap-2 border-t p-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={goPrev}
                    aria-label="Previous photo"
                    className="touch-manipulation"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-sm text-muted-foreground tabular-nums">
                    {openIndex + 1} / {items.length}
                  </span>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={goNext}
                    aria-label="Next photo"
                    className="touch-manipulation"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
