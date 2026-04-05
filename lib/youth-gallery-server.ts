import fs from 'fs'
import path from 'path'
import { YOUTH_GALLERY_FILENAMES, buildYouthGalleryItems, type YouthGalleryItem } from './youth-gallery'

const SKIP = new Set(['.gitkeep', '.DS_Store'])

/**
 * Returns gallery items only for JPEGs that exist in `public/youth-gallery/`
 * (avoids 404s when assets are not committed yet or names differ by case).
 */
export function getYouthGalleryItems(): YouthGalleryItem[] {
  const dir = path.join(process.cwd(), 'public/youth-gallery')
  let onDisk: string[] = []
  try {
    const st = fs.statSync(dir)
    if (!st.isDirectory()) {
      return []
    }
    onDisk = fs.readdirSync(dir).filter((n) => !SKIP.has(n) && !n.startsWith('.'))
  } catch {
    return []
  }

  const byLower = new Map<string, string>()
  for (const name of onDisk) {
    byLower.set(name.toLowerCase(), name)
  }

  const resolved: string[] = []
  for (const want of YOUTH_GALLERY_FILENAMES) {
    const actual = byLower.get(want.toLowerCase())
    if (actual) {
      resolved.push(actual)
    }
  }

  return buildYouthGalleryItems(resolved)
}
