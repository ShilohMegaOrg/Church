import { YouthGalleryGrid } from "@/components/sections/YouthGalleryGrid"
import { youthGalleryItems } from "@/lib/youth-gallery"

export const metadata = {
  title: "Youth Gallery | RCCG Shiloh Mega Parish",
  description:
    "Photos from youth fellowship events, worship, outreach, and activities at RCCG Shiloh Mega Parish.",
}

export default function YouthGalleryPage() {
  return (
    <div className="container py-12">
      <div className="mb-10 max-w-2xl text-center mx-auto">
        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-primary">
          Youth fellowship
        </p>
        <h1 className="mb-4 text-4xl font-bold">Gallery</h1>
        <p className="text-lg text-muted-foreground">
          Moments from our youth events, worship, fellowship, and outreach.
          Select a photo to view it larger.
        </p>
      </div>

      <YouthGalleryGrid items={youthGalleryItems} />
    </div>
  )
}
