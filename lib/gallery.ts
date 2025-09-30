import fs from "fs";
import path from "path";

export type GalleryImage = {
  src: string;
  alt: string;
};

export type GalleryGroup = {
  key: string;
  title: string;
  images: GalleryImage[];
};

type FileEntry = {
  file: string;
  segment: string;
};

const EXCLUDED_PREFIXES = ["落款町", "落款町直", "盆栽", "Top", "top", "かえで丸鉢"];
const CUSTOM_PREFIX_RULES = [
  {
    match: (name: string) => name.normalize("NFKC").startsWith("もみじ"),
    key: "もみじ",
  },
];

const CUSTOM_IMAGE_REORDER = [
  {
    match: (key: string) => key.normalize("NFKC") === "辰砂踊りの図その1",
    reorder: (images: GalleryImage[]) => [...images].reverse(),
  },
  {
    match: (key: string) => key.normalize("NFKC") === "辰砂踊りの図その3",
    reorder: (images: GalleryImage[]) => [...images].reverse(),
  },
  {
    match: (key: string) => key.normalize("NFKC") === "もみじ",
    reorder: (images: GalleryImage[]) => [images[1], images[0], images[2]].filter(Boolean),
  },
];

function tokenize(fileName: string): string {
  const name = path.parse(fileName).name;
  const segment = name.split(/[-_\s]/)[0];
  return (segment || name).trim();
}

function normalizeTitle(key: string): string {
  if (/^\d+$/.test(key)) {
    return `作品 ${key}`;
  }

  const spaced = key
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Za-z])(\d)/g, "$1 $2")
    .replace(/\d([A-Za-z])/g, (match) => `${match[0]} ${match.slice(1)}`)
    .replace(/[-_]/g, " ");

  return spaced
    .split(/\s+/)
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ");
}

export function getGalleryGroups(): GalleryGroup[] {
  const imagesDir = path.join(process.cwd(), "public", "images");

  if (!fs.existsSync(imagesDir)) {
    return [];
  }

  const files = fs
    .readdirSync(imagesDir)
    .filter((file) => file.match(/\.(jpe?g)$/i))
    .filter((file) => {
      const name = path.parse(file).name;
      return !EXCLUDED_PREFIXES.some((prefix) => name.startsWith(prefix));
    });

  const entries: FileEntry[] = files.map((file) => ({
    file,
    segment: tokenize(file),
  }));

  const segmentSet = new Set(entries.map((entry) => entry.segment.toLowerCase()));

  const groups = new Map<string, GalleryGroup>();

  for (const { file, segment } of entries) {
    const lowerSegment = segment.toLowerCase();
    let key = lowerSegment;
    const normalizedSegment = segment.normalize("NFKC");
    let isCustom = false;

    const custom = CUSTOM_PREFIX_RULES.find((rule) => rule.match(normalizedSegment));
    if (custom) {
      key = custom.key;
      isCustom = true;
    }

    if (!isCustom) {
      const leadingDigits = segment.match(/^\d+/);
      if (leadingDigits) {
        key = leadingDigits[0];
      } else {
        const alphaNumeric = segment.match(/^[A-Za-z]+\d+/);
        if (alphaNumeric) {
          key = alphaNumeric[0].toLowerCase();
        } else {
          const trimmed = segment.replace(/\d+$/, "");
          if (trimmed && segmentSet.has(trimmed.toLowerCase())) {
            key = trimmed.toLowerCase();
          }
        }
      }
    }

    if (!groups.has(key)) {
      groups.set(key, {
        key,
        title: normalizeTitle(key) || segment,
        images: [],
      });
    }

    const group = groups.get(key)!;
    group.images.push({
      src: `/images/${file}`,
      alt: `${group.title} - ${file}`,
    });
  }

  const sortedGroups = Array.from(groups.values()).map((group) => {
    const sortedImages = group.images.sort((a, b) => a.src.localeCompare(b.src, undefined, { numeric: true }));

    const customOrder = CUSTOM_IMAGE_REORDER.find((rule) => rule.match(group.key));
    const images = customOrder ? customOrder.reorder(sortedImages) : sortedImages;

    return {
      ...group,
      images,
    };
  });

  return sortedGroups.sort((a, b) => a.title.localeCompare(b.title, "ja", { numeric: true }));
}
