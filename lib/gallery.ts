import fs from "fs";
import path from "path";

export type GalleryImage = {
  src: string;
  alt: string;
  view?: string | null;
};

export type GalleryGroup = {
  key: string;
  title: string;
  images: GalleryImage[];
};

function getViewPriority(view?: string | null): number {
  if (!view) return 4;
  const normalized = view.normalize("NFKC");
  if (normalized === "正面") return 0;
  if (normalized.startsWith("正面")) return 1;
  if (normalized === "側面") return 2;
  if (normalized === "底") return 3;
  return 4;
}

type FileEntry = {
  file: string;
  base: string;
  variant: string | null;
  segment: string;
  view: string | null;
};

const EXCLUDED_PREFIXES = ["落款町", "落款町直", "盆栽", "Top", "top", "かえで丸鉢"];
const CUSTOM_PREFIX_RULES = [
  {
    match: (name: string) => name.normalize("NFKC").startsWith("もみじ"),
    key: "もみじ",
  },
];

const CUSTOM_TITLES: Record<string, string> = {
  ["梅花皮釉円形三足鉢-梅の木".normalize("NFKC").toLowerCase()]: "梅花皮釉円形三足鉢 梅の木",
};

const CUSTOM_IMAGE_REORDER: Array<{
  match: (key: string) => boolean;
  reorder: (images: GalleryImage[]) => GalleryImage[];
}> = [];

function parseFileName(fileName: string): {
  base: string;
  variant: string | null;
  view: string | null;
} {
  const name = path.parse(fileName).name;
  const hyphenIndex = name.indexOf("-");

  if (hyphenIndex !== -1) {
    const base = name.slice(0, hyphenIndex).trim();
    const remainder = name.slice(hyphenIndex + 1).trim();
    const parts = remainder.split("-").filter(Boolean);
    let variant: string | null = null;
    let view: string | null = null;

    if (parts.length > 1) {
      variant = parts.slice(0, -1).join("-");
      view = parts[parts.length - 1] || null;
    } else {
      view = parts[0] || null;
    }

    return {
      base: base || name,
      variant,
      view: view || null,
    };
  }

  const underscoreIndex = name.indexOf("_");
  if (underscoreIndex !== -1) {
    const base = name.slice(0, underscoreIndex).trim();
    return {
      base: base || name,
      variant: null,
      view: null,
    };
  }

  const spaceIndex = name.indexOf(" ");
  if (spaceIndex !== -1) {
    const base = name.slice(0, spaceIndex).trim();
    return {
      base: base || name,
      variant: null,
      view: null,
    };
  }

  return {
    base: name.trim() || fileName,
    variant: null,
    view: null,
  };
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

  const entries: FileEntry[] = files.map((file) => {
    const { base, variant, view } = parseFileName(file);
    const segment = variant ? `${base}-${variant}` : base;
    return {
      file,
      base,
      variant,
      segment,
      view,
    };
  });

  const segmentSet = new Set(entries.map((entry) => entry.segment.toLowerCase()));

  const groups = new Map<string, GalleryGroup>();

  for (const entry of entries) {
    const { file, segment, variant } = entry;
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
        title: (() => {
          const normalizedKey = key.normalize("NFKC").toLowerCase();
          if (CUSTOM_TITLES[normalizedKey]) {
            return CUSTOM_TITLES[normalizedKey];
          }
          return normalizeTitle(key) || segment;
        })(),
        images: [],
      });
    }

    const group = groups.get(key)!;
    const view = entry.view;
    const variantLabel = variant ? variant : null;
    const alt = (() => {
      if (variantLabel && view) {
        return `${group.title}（${variantLabel}・${view}）`;
      }
      if (variantLabel) {
        return `${group.title}（${variantLabel}）`;
      }
      if (view) {
        return `${group.title}（${view}）`;
      }
      return group.title;
    })();

    group.images.push({
      src: `/images/${file}`,
      alt,
      view,
    });
  }

  const sortedGroups = Array.from(groups.values()).map((group) => {
    const sortedImages = [...group.images].sort((a, b) => {
      const priorityDiff = getViewPriority(a.view) - getViewPriority(b.view);
      if (priorityDiff !== 0) {
        return priorityDiff;
      }

      return a.src.localeCompare(b.src, undefined, { numeric: true });
    });

    const customOrder = CUSTOM_IMAGE_REORDER.find((rule) => rule.match(group.key));
    const images = customOrder ? customOrder.reorder(sortedImages) : sortedImages;

    return {
      ...group,
      images,
    };
  });

  return sortedGroups.sort((a, b) => a.title.localeCompare(b.title, "ja", { numeric: true }));
}
