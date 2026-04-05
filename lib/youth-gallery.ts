/**
 * Curated youth fellowship gallery: high-resolution parish photos from
 * `/youthGallery` (served at `/youth-gallery`). Add or remove entries here;
 * most Canon exports are 4752×3168.
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
  "Youth fellowship at RCCG Shiloh Mega Parish.",
  "Growing in faith together.",
  "Worship, friendship, and community.",
  "Moments from our youth gatherings.",
  "Celebrating life in Christ as one family.",
]

function captionFor(index: number): string {
  return captions[index % captions.length]
}

/**
 * Hand-picked subset of the `youthGallery` folder: strong file sizes (quality)
 * and spread across different events. Not every file in the folder is shown.
 */
export const youthGalleryItems: YouthGalleryItem[] = [
  {
    id: "1",
    title: "Youth fellowship",
    caption: captionFor(0),
    imageSrc: "/youth-gallery/IMG_8503.JPG",
    width: W,
    height: H,
  },
  {
    id: "2",
    title: "Youth fellowship",
    caption: captionFor(1),
    imageSrc: "/youth-gallery/IMG_8563.JPG",
    width: W,
    height: H,
  },
  {
    id: "3",
    title: "Youth fellowship",
    caption: captionFor(2),
    imageSrc: "/youth-gallery/IMG_8504.JPG",
    width: W,
    height: H,
  },
  {
    id: "4",
    title: "Youth fellowship",
    caption: captionFor(3),
    imageSrc: "/youth-gallery/IMG_8512.JPG",
    width: W,
    height: H,
  },
  {
    id: "5",
    title: "Youth fellowship",
    caption: captionFor(4),
    imageSrc: "/youth-gallery/IMG_8401.JPG",
    width: W,
    height: H,
  },
  {
    id: "6",
    title: "Youth fellowship",
    caption: captionFor(0),
    imageSrc: "/youth-gallery/IMG_8491.JPG",
    width: W,
    height: H,
  },
  {
    id: "7",
    title: "Youth fellowship",
    caption: captionFor(1),
    imageSrc: "/youth-gallery/IMG_8509.JPG",
    width: W,
    height: H,
  },
  {
    id: "8",
    title: "Youth fellowship",
    caption: captionFor(2),
    imageSrc: "/youth-gallery/IMG_8393.JPG",
    width: W,
    height: H,
  },
  {
    id: "9",
    title: "Youth fellowship",
    caption: captionFor(3),
    imageSrc: "/youth-gallery/IMG_8505.JPG",
    width: W,
    height: H,
  },
  {
    id: "10",
    title: "Youth fellowship",
    caption: captionFor(4),
    imageSrc: "/youth-gallery/IMG_8513.JPG",
    width: W,
    height: H,
  },
  {
    id: "11",
    title: "Youth fellowship",
    caption: captionFor(0),
    imageSrc: "/youth-gallery/IMG_8355.JPG",
    width: W,
    height: H,
  },
  {
    id: "12",
    title: "Youth fellowship",
    caption: captionFor(1),
    imageSrc: "/youth-gallery/IMG_8318.JPG",
    width: W,
    height: H,
  },
  {
    id: "13",
    title: "Youth fellowship",
    caption: captionFor(2),
    imageSrc: "/youth-gallery/IMG_8328.JPG",
    width: W,
    height: H,
  },
  {
    id: "14",
    title: "Youth fellowship",
    caption: captionFor(3),
    imageSrc: "/youth-gallery/IMG_8470.JPG",
    width: W,
    height: H,
  },
  {
    id: "15",
    title: "Youth fellowship",
    caption: captionFor(4),
    imageSrc: "/youth-gallery/IMG_8467.JPG",
    width: W,
    height: H,
  },
  {
    id: "16",
    title: "Youth fellowship",
    caption: captionFor(0),
    imageSrc: "/youth-gallery/IMG_8335.JPG",
    width: W,
    height: H,
  },
  {
    id: "17",
    title: "Youth fellowship",
    caption: captionFor(1),
    imageSrc: "/youth-gallery/IMG_8324.JPG",
    width: W,
    height: H,
  },
  {
    id: "18",
    title: "Youth fellowship",
    caption: captionFor(2),
    imageSrc: "/youth-gallery/IMG_8308.JPG",
    width: W,
    height: H,
  },
]
