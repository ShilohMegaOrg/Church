/**
 * Curated youth fellowship gallery: JPEGs live in `public/youth-gallery/` and are
 * served as static files. Do not use fs.readdir on that folder in a Server
 * Component — Vercel bundles traced files into the route function and exceeds
 * the serverless size limit.
 */
export interface YouthGalleryItem {
  id: string
  title: string
  caption: string
  imageSrc: string
  width: number
  height: number
}

/** Default dimensions for this camera roll (landscape). */
const W = 4752
const H = 3168

const captions = [
  'Youth fellowship at RCCG Shiloh Mega Parish.',
  'Growing in faith together.',
  'Worship, friendship, and community.',
  'Moments from our youth gatherings.',
  'Celebrating life in Christ as one family.',
]

function captionFor(index: number): string {
  return captions[index % captions.length]
}

/**
 * Display order. Add/remove filenames here when updating `public/youth-gallery/`.
 */
export const YOUTH_GALLERY_FILENAMES: readonly string[] = [
  'IMG_8308.JPG',
  'IMG_8309.JPG',
  'IMG_8310.JPG',
  'IMG_8312.JPG',
  'IMG_8317.JPG',
  'IMG_8318.JPG',
  'IMG_8322.JPG',
  'IMG_8324.JPG',
  'IMG_8327.JPG',
  'IMG_8328.JPG',
  'IMG_8329.JPG',
  'IMG_8330.JPG',
  'IMG_8333.JPG',
  'IMG_8335.JPG',
  'IMG_8339.JPG',
  'IMG_8341.JPG',
  'IMG_8342.JPG',
  'IMG_8343.JPG',
  'IMG_8344.JPG',
  'IMG_8355.JPG',
  'IMG_8367.JPG',
  'IMG_8392.JPG',
  'IMG_8393.JPG',
  'IMG_8395.JPG',
  'IMG_8396.JPG',
  'IMG_8400.JPG',
  'IMG_8401.JPG',
  'IMG_8402.JPG',
  'IMG_8404(1).JPG',
  'IMG_8404.JPG',
  'IMG_8405.JPG',
  'IMG_8406.JPG',
  'IMG_8407.JPG',
  'IMG_8408.JPG',
  'IMG_8412.JPG',
  'IMG_8413.JPG',
  'IMG_8413.jpeg',
  'IMG_8414.JPG',
  'IMG_8415.JPG',
  'IMG_8416.jpeg',
  'IMG_8420.JPG',
  'IMG_8421.JPG',
  'IMG_8422.jpeg',
  'IMG_8424.jpeg',
  'IMG_8429.JPG',
  'IMG_8439.JPG',
  'IMG_8441.JPG',
  'IMG_8442(1).JPG',
  'IMG_8442.JPG',
  'IMG_8443.JPG',
  'IMG_8445.JPG',
  'IMG_8448.JPG',
  'IMG_8464.JPG',
  'IMG_8466.JPG',
  'IMG_8467.JPG',
  'IMG_8468.JPG',
  'IMG_8469.JPG',
  'IMG_8470.JPG',
  'IMG_8487.JPG',
  'IMG_8491.JPG',
  'IMG_8495.JPG',
  'IMG_8497.JPG',
  'IMG_8501.JPG',
  'IMG_8503.JPG',
  'IMG_8504.JPG',
  'IMG_8505.JPG',
  'IMG_8507.JPG',
  'IMG_8509.JPG',
  'IMG_8510.JPG',
  'IMG_8512.JPG',
  'IMG_8513.JPG',
  'IMG_8514.JPG',
  'IMG_8518.JPG',
  'IMG_8519.JPG',
  'IMG_8520.JPG',
  'IMG_8523.JPG',
  'IMG_8524.JPG',
  'IMG_8525.JPG',
  'IMG_8528.JPG',
  'IMG_8530.JPG',
  'IMG_8555.JPG',
  'IMG_8558.JPG',
  'IMG_8560.JPG',
  'IMG_8561.JPG',
  'IMG_8563.JPG',
  'IMG_8567.JPG',
  'IMG_8568.JPG',
  'IMG_8569.JPG',
  'IMG_8571.JPG',
  'IMG_8572.JPG',
  'IMG_8574.JPG',
  'IMG_8577.JPG',
]

export function buildYouthGalleryItems(filenames: readonly string[]): YouthGalleryItem[] {
  return filenames.map((filename, index) => ({
    id: String(index + 1),
    title: 'Youth fellowship',
    caption: captionFor(index),
    imageSrc: `/youth-gallery/${filename}`,
    width: W,
    height: H,
  }))
}

/** Static list for the gallery page (no filesystem reads — Vercel-safe). */
export const youthGalleryItems: YouthGalleryItem[] = buildYouthGalleryItems(
  YOUTH_GALLERY_FILENAMES,
)
