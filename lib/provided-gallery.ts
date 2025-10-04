import fs from "fs";
import path from "path";
import { providedContributorMeta } from "@/data/provided-gallery";

type Locale = "ja" | "en";

type FileEntry = {
  key: string;
  isoDate: string;
  dateValue: number;
  order: number;
  descriptor: string;
  label: string;
  keywords: string[];
  src: string;
  fileName: string;
};

export type ProvidedImage = {
  src: string;
  fileName: string;
  isoDate: string;
  order: number;
  label?: string;
  keywords?: string[];
};

export type ProvidedCollection = {
  key: string;
  displayName: string;
  latestDateIso: string;
  images: ProvidedImage[];
  sns?: Array<{
    service?: "instagram" | "x" | "facebook" | "website" | "threads" | "other";
    label: string;
    url: string;
  }>;
  note?: string;
};

const FILENAME_REGEX = /^(?<key>.+)-(?<date>\d{8})(?:-(?<suffix>.+))?\.(jpe?g|png|webp)$/i;

const KEYWORD_PATTERNS: Array<{ pattern: RegExp; label: string }> = [
  { pattern: /白釉/, label: "白釉" },
  { pattern: /辰砂釉/, label: "辰砂釉" },
  { pattern: /青磁釉/, label: "青磁釉" },
  { pattern: /コバルト釉/, label: "コバルト釉" },
  { pattern: /海鼠釉/, label: "海鼠釉" },
  { pattern: /梅花皮釉/, label: "梅花皮釉" },
  { pattern: /桃花紅釉/, label: "桃花紅釉" },
  { pattern: /箔釉/, label: "箔釉" },
  { pattern: /釉裏紅/, label: "釉裏紅" },
  { pattern: /緋襷/, label: "緋襷" },
  { pattern: /飛釉/, label: "飛釉" },
  { pattern: /銀彩/, label: "銀彩" },
  { pattern: /金彩/, label: "金彩" },
  { pattern: /金飛ばし/, label: "金飛ばし" },
  { pattern: /銀飛ばし/, label: "銀飛ばし" },
  { pattern: /窯変/, label: "窯変" },
  { pattern: /円形/, label: "円形" },
  { pattern: /丸鉢/, label: "丸鉢" },
  { pattern: /正方/, label: "正方" },
  { pattern: /長方/, label: "長方" },
  { pattern: /楕円/, label: "楕円" },
  { pattern: /六角/, label: "六角" },
  { pattern: /撫肩/, label: "撫肩" },
  { pattern: /内縁/, label: "内縁" },
  { pattern: /外縁/, label: "外縁" },
  { pattern: /三足/, label: "三足" },
  { pattern: /四足/, label: "四足" },
  { pattern: /五足/, label: "五足" },
  { pattern: /直足/, label: "直足" },
  { pattern: /木瓜/, label: "木瓜" },
  { pattern: /極小/, label: "極小" },
  { pattern: /小鉢/, label: "小鉢" },
  { pattern: /富士/, label: "富士の図" },
  { pattern: /もみじ/, label: "もみじの図" },
];

function normalizeDescriptor(descriptor: string): string {
  return descriptor.replace(/\d+$/, "").replace(/[()（）]/g, "").trim();
}

function extractKeywords(label: string): string[] {
  if (!label) {
    return [];
  }

  const normalized = label.normalize("NFKC");
  const keywords = new Set<string>();

  for (const { pattern, label: keywordLabel } of KEYWORD_PATTERNS) {
    if (pattern.test(normalized)) {
      keywords.add(keywordLabel);
    }
  }

  if (keywords.size === 0) {
    const fallbackSegments = normalized
      .split(/[・／/,_\s]+/)
      .map((segment) => segment.replace(/\d+$/, "").trim())
      .filter(Boolean);

    fallbackSegments.slice(0, 3).forEach((segment) => keywords.add(segment));
  }

  return Array.from(keywords);
}

function parseFileName(fileName: string): FileEntry | null {
  const match = fileName.match(FILENAME_REGEX);
  if (!match || !match.groups) {
    return null;
  }

  const { key, date, suffix } = match.groups;
  if (!key || !date) {
    return null;
  }

  const year = Number(date.slice(0, 4));
  const month = Number(date.slice(4, 6));
  const day = Number(date.slice(6, 8));
  if (Number.isNaN(year) || Number.isNaN(month) || Number.isNaN(day)) {
    return null;
  }

  const isoDate = `${year.toString().padStart(4, "0")}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;
  const dateValue = year * 10000 + month * 100 + day;

  const descriptor = (suffix ?? "").trim();

  let order = Number.MAX_SAFE_INTEGER;
  if (descriptor.length === 0) {
    order = 0;
  } else {
    const indexMatch = descriptor.match(/(\d+)(?!.*\d)/);
    if (indexMatch) {
      order = Number.parseInt(indexMatch[1], 10);
    }
  }

  const label = normalizeDescriptor(descriptor);
  const keywords = extractKeywords(label);

  return {
    key,
    isoDate,
    dateValue,
    order,
    descriptor,
    label,
    keywords,
    src: `/images/provided/${fileName}`,
    fileName,
  };
}

export function getProvidedCollections(locale: Locale): ProvidedCollection[] {
  const providedDir = path.join(process.cwd(), "public", "images", "provided");
  if (!fs.existsSync(providedDir)) {
    return [];
  }

  const files = fs
    .readdirSync(providedDir)
    .filter((file) => file.match(/\.(jpe?g|png|webp)$/i))
    .map(parseFileName)
    .filter((entry): entry is FileEntry => Boolean(entry));

  if (files.length === 0) {
    return [];
  }

  const metaEntries: Array<[string, (typeof providedContributorMeta)[number]]> = [];
  for (const meta of providedContributorMeta) {
    const normalizedKey = meta.key.normalize("NFKC").toLowerCase();
    metaEntries.push([normalizedKey, meta]);
    if (meta.aliases) {
      for (const alias of meta.aliases) {
        metaEntries.push([alias.normalize("NFKC").toLowerCase(), meta]);
      }
    }
  }
  const metaMap = new Map(metaEntries);
  const groups = new Map<
    string,
    {
      metaName: string;
      note?: string;
      sns?: ProvidedCollection["sns"];
      latest: number;
      images: FileEntry[];
    }
  >();

  for (const entry of files) {
    const normalizedKey = entry.key.normalize("NFKC").toLowerCase();
    const meta = metaMap.get(normalizedKey);

    if (!groups.has(entry.key)) {
      const displayName = meta?.displayName?.[locale] ?? entry.key;
      const note = meta?.note?.[locale];
      const sns = meta?.sns;
      groups.set(entry.key, {
        metaName: displayName,
        note,
        sns,
        latest: entry.dateValue,
        images: [entry],
      });
      continue;
    }

    const group = groups.get(entry.key)!;
    group.images.push(entry);
    if (entry.dateValue > group.latest) {
      group.latest = entry.dateValue;
    }
  }

  const collections: ProvidedCollection[] = Array.from(groups.entries()).map(([key, value]) => {
    const sortedImages = [...value.images].sort((a, b) => {
      if (a.dateValue === b.dateValue) {
        if (a.order !== b.order) {
          return a.order - b.order;
        }
        return a.descriptor.localeCompare(b.descriptor, "ja", { numeric: true, sensitivity: "base" });
      }
      return b.dateValue - a.dateValue;
    });

    return {
      key,
      displayName: value.metaName,
      latestDateIso: sortedImages[0]?.isoDate ?? "",
      images: sortedImages.map((image) => ({
        src: image.src,
        fileName: image.fileName,
        isoDate: image.isoDate,
        order: image.order,
        label: image.label || undefined,
        keywords: image.keywords,
      })),
      sns: value.sns,
      note: value.note,
    };
  });

  return collections.sort((a, b) => {
    if (a.latestDateIso === b.latestDateIso) {
      return a.displayName.localeCompare(b.displayName, locale === "ja" ? "ja" : "en", {
        sensitivity: "base",
      });
    }
    return b.latestDateIso.localeCompare(a.latestDateIso);
  });
}
