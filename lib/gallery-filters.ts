export type GalleryFilterKey = "all" | "shinsa" | "kaeragi" | "seiji" | "kannyu" | "mame";

export const GALLERY_FILTER_KEYWORDS: Record<GalleryFilterKey, string[]> = {
  all: [],
  shinsa: ["辰砂", "Shinsya"],
  kaeragi: ["梅花皮", "Kairagi"],
  seiji: ["青磁釉", "Celadon"],
  kannyu: ["貫入", "Craquelure"],
  mame: ["豆", "Miniature", "Mame"],
};

export function resolveGalleryFilter(value: string | null | undefined): GalleryFilterKey {
  const normalized = (value || "").toLowerCase();
  if (normalized === "shinsa") return "shinsa";
  if (normalized === "kaeragi") return "kaeragi";
  if (normalized === "seiji") return "seiji";
  if (normalized === "kannyu") return "kannyu";
  if (normalized === "mame") return "mame";
  return "all";
}
