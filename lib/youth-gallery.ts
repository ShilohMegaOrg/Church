/**
 * Curated youth fellowship gallery: photos live in `public/youth-gallery/`
 * (URL `/youth-gallery/...`). The page only includes files that exist on disk.
 * Most Canon exports are 4752×3168.
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
 * Preferred display order. Only files that exist under `public/youth-gallery/`
 * are shown (see getYouthGalleryItems in youth-gallery-server.ts).
 */
export const YOUTH_GALLERY_FILENAMES: readonly string[] = [
  'IMG_8503.JPG',
  'IMG_8563.JPG',
  'IMG_8464.JPG',
  'IMG_8512.JPG',
  'IMG_8401.JPG',
  'IMG_8491.JPG',
  'IMG_8509.JPG',
  'IMG_8393.JPG',
  'IMG_8505.JPG',
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

export function buildYouthGalleryItems(filenames: string[]): YouthGalleryItem[] {
  return filenames.map((filename, index) => ({
    id: String(index + 1),
    title: 'Youth fellowship',
    caption: captionFor(index),
    imageSrc: `/youth-gallery/${filename}`,
    width: W,
    height: H,
  }))
}
