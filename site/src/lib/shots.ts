import type { ImageMetadata } from "astro";

// Ekran goruntuleri README ile ortak: repo kokundeki assets/screenshots.
const files = import.meta.glob<{ default: ImageMetadata }>("../../../assets/screenshots/*.webp", { eager: true });

export function shotImage(file: string): ImageMetadata | undefined {
  return Object.entries(files).find(([path]) => path.endsWith(`/${file}`))?.[1].default;
}

/** Henuz cekilmemis bir ekran canli sitede bos kutu olarak gorunmesin diye. */
export function hasShot(name: string): boolean {
  return shotImage(`${name}-light.webp`) !== undefined;
}
