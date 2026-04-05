/**
 * Youth fellowship gallery entries. Replace `imageSrc` with paths under
 * `/public/images/youth/` when official photos are available, or keep
 * remote URLs if you prefer a CDN.
 */
export interface YouthGalleryItem {
  id: string
  title: string
  caption: string
  imageSrc: string
  width: number
  height: number
}

export const youthGalleryItems: YouthGalleryItem[] = [
  {
    id: "1",
    title: "Youth worship night",
    caption: "Praise and worship with our young people.",
    imageSrc:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
    width: 1200,
    height: 800,
  },
  {
    id: "2",
    title: "Fellowship gathering",
    caption: "Building friendships and growing together in faith.",
    imageSrc:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    width: 1200,
    height: 800,
  },
  {
    id: "3",
    title: "Bible study & discussion",
    caption: "Digging into Scripture as a community.",
    imageSrc:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    width: 1200,
    height: 800,
  },
  {
    id: "4",
    title: "Youth outreach",
    caption: "Serving our neighbors and sharing hope.",
    imageSrc:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80",
    width: 1200,
    height: 800,
  },
  {
    id: "5",
    title: "Group games & activities",
    caption: "Fun, laughter, and teamwork.",
    imageSrc:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    width: 1200,
    height: 800,
  },
  {
    id: "6",
    title: "Retreat weekend",
    caption: "Time away to refresh and reconnect.",
    imageSrc:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
    width: 1200,
    height: 800,
  },
  {
    id: "7",
    title: "Community celebration",
    caption: "Marking special moments together.",
    imageSrc:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    width: 1200,
    height: 800,
  },
  {
    id: "8",
    title: "Youth choir",
    caption: "Lifting voices in harmony.",
    imageSrc:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=1200&q=80",
    width: 1200,
    height: 800,
  },
  {
    id: "9",
    title: "Prayer & reflection",
    caption: "Seeking God together in quiet and in song.",
    imageSrc:
      "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1200&q=80",
    width: 1200,
    height: 800,
  },
]
