"use client";

import { useEffect, useMemo, useState } from "react";
import type { GalleryGroup } from "@/lib/gallery";
import { GalleryGrid } from "@/components/GalleryGrid";
import {
  GALLERY_FILTER_KEYWORDS,
  resolveGalleryFilter,
  type GalleryFilterKey,
} from "@/lib/gallery-filters";

type Locale = "ja" | "en";

type FilterOption = {
  key: GalleryFilterKey;
  label: string;
};

type Props = {
  groups: GalleryGroup[];
  locale: Locale;
  initialFilter?: GalleryFilterKey;
};

const LABELS: Record<Locale, Record<GalleryFilterKey, string>> = {
  ja: {
    all: "すべて",
    shinsa: "辰砂",
    kaeragi: "梅花皮",
    seiji: "青磁釉",
    kannyu: "貫入",
    mame: "豆鉢",
  },
  en: {
    all: "All",
    shinsa: "Shinsya",
    kaeragi: "Kairagi",
    seiji: "Celadon",
    kannyu: "Craquelure",
    mame: "Miniature",
  },
};

export function GalleryFilterBoard({ groups, locale, initialFilter = "all" }: Props) {
  const [active, setActive] = useState<GalleryFilterKey>(initialFilter);

  useEffect(() => {
    setActive(initialFilter);
  }, [initialFilter]);

  const options: FilterOption[] = useMemo(
    () => [
      { key: "all", label: LABELS[locale].all },
      { key: "shinsa", label: LABELS[locale].shinsa },
      { key: "kaeragi", label: LABELS[locale].kaeragi },
      { key: "seiji", label: LABELS[locale].seiji },
      { key: "kannyu", label: LABELS[locale].kannyu },
      { key: "mame", label: LABELS[locale].mame },
    ],
    [locale]
  );

  const filteredGroups = useMemo(() => {
    if (active === "all") {
      return groups;
    }

    const keywords = GALLERY_FILTER_KEYWORDS[active].map((keyword) => keyword.normalize("NFKC").toLowerCase());

    return groups.filter((group) => {
      const title = group.title.normalize("NFKC").toLowerCase();
      if (keywords.some((keyword) => title.includes(keyword))) {
        return true;
      }

      return group.images.some((image) => {
        const alt = (image.alt || "").normalize("NFKC").toLowerCase();
        return keywords.some((keyword) => alt.includes(keyword));
      });
    });
  }, [active, groups]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {options.map((option) => (
          <button
            key={option.key}
            type="button"
            onClick={() => setActive(option.key)}
            className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.24em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              active === option.key
                ? "border-accent bg-accent text-white"
                : "border-primary/40 bg-white text-primary hover:border-accent hover:text-accent"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <GalleryGrid groups={filteredGroups} locale={locale} />
    </div>
  );
}
