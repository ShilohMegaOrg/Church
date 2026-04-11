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
 * Eighteen curated highlights only (order preserved). Other files may remain in
 * `public/youth-gallery/` for future use but are not listed on the site.
 */
export const YOUTH_GALLERY_FILENAMES: readonly string[] = [
  'IMG_8503.JPG',
  'IMG_8563.JPG',
  'IMG_8464.JPG',
  'IMG_8442.JPG',
  'IMG_8401.JPG',
  'IMG_8491.JPG',
  'IMG_8509.JPG',
  'IMG_8393.JPG',
  'IMG_8466.JPG',
  'IMG_8513.JPG',
  'IMG_8355.JPG',
  'IMG_8318.JPG',
  'IMG_8328.JPG',
  'IMG_8470.JPG',
  'IMG_8467.JPG',
  'IMG_8335.JPG',
  'IMG_8324.JPG',
  'IMG_8308.JPG',
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
