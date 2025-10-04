"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { ProvidedCollection } from "@/lib/provided-gallery";

type Locale = "ja" | "en";

type Orientation = "portrait" | "landscape" | "square";

type Props = {
  collection: ProvidedCollection;
  locale: Locale;
};

type ServiceIconProps = {
  service?: string;
  label: string;
};

function ServiceIcon({ service, label }: ServiceIconProps) {
  if (service === "x") {
    return (
      <Image
        src="/images/logo-icons/x-logo.jpg"
        alt={`${label} X ロゴ`}
        width={16}
        height={16}
        className="h-4 w-4 object-contain"
      />
    );
  }
  return null;
}

function QuoteIcon() {
  return (
    <svg
      aria-hidden
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      className="mt-1 h-7 w-7 text-accent"
    >
      <path
        d="M6 12c0-3.314 2.686-6 6-6h1v4h-2a1 1 0 00-1 1v2h3l-1.5 6H6v-7z"
        className="fill-current"
      />
      <path
        d="M15 12c0-3.314 2.686-6 6-6h1v4h-2a1 1 0 00-1 1v2h3l-1.5 6H15v-7z"
        className="fill-current"
      />
    </svg>
  );
}

function formatDateLabel(isoDate: string, locale: Locale) {
  const [yearStr, monthStr, dayStr] = isoDate.split("-");
  const year = Number(yearStr);
  const month = Number(monthStr);
  const day = Number(dayStr);

  if (!year || !month || !day) {
    return isoDate;
  }

  if (locale === "ja") {
    return `${year}年${month}月${day}日`;
  }

  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

function getPhotoLabel(locale: Locale, index: number, total: number) {
  if (locale === "ja") {
    return `${index + 1} / ${total} 枚`;
  }
  return `${index + 1} / ${total}`;
}

function buildAlt(
  collectionName: string,
  isoDate: string,
  locale: Locale,
  index: number,
  total: number,
  label?: string,
) {
  const dateLabel = formatDateLabel(isoDate, locale);
  const labelFragment = label && label.trim().length > 0 ? label.trim() : "";

  if (locale === "ja") {
    const caption = labelFragment ? `${collectionName} ${labelFragment}` : collectionName;
    return `${caption} 提供 ${dateLabel} 撮影 ${index + 1}枚目 (${total}枚中)`;
  }

  const caption = labelFragment ? `${collectionName} (${labelFragment})` : collectionName;
  return `Provided by ${caption} on ${dateLabel}, photo ${index + 1} of ${total}`;
}

function resolveOrientation(width: number, height: number): Orientation {
  if (!width || !height) {
    return "square";
  }
  const ratio = width / height;
  if (ratio > 1.15) {
    return "landscape";
  }
  if (ratio < 0.85) {
    return "portrait";
  }
  return "square";
}

export function ProvidedCollectionCard({ collection, locale }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [orientationMap, setOrientationMap] = useState<Record<string, Orientation>>({});
  const [dimensionMap, setDimensionMap] = useState<Record<string, { width: number; height: number }>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const total = collection.images.length;
  const hasImages = total > 0;

  const normalizedIndex = hasImages ? ((activeIndex % total) + total) % total : 0;
  const current = hasImages ? collection.images[normalizedIndex] : undefined;
  const orientation: Orientation = current ? orientationMap[current.src] ?? "square" : "square";
  const currentDimensions = current ? dimensionMap[current.src] : undefined;

  const allKeywords = useMemo(() => {
    const set = new Set<string>();
    collection.images.forEach((image) => {
      image.keywords?.forEach((keyword) => {
        const trimmed = keyword.trim();
        if (trimmed.length > 0) {
          set.add(trimmed);
        }
      });
    });
    return Array.from(set).sort((a, b) => a.localeCompare(b, "ja", { numeric: true, sensitivity: "base" }));
  }, [collection.images]);

  const currentKeywordSet = useMemo(() => new Set(current?.keywords ?? []), [current]);

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [isModalOpen]);

  const handlePrev = () => {
    if (total <= 1) return;
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    if (total <= 1) return;
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const registerOrientation = (src: string, width: number, height: number) => {
    if (!width || !height) {
      return;
    }
    const detected = resolveOrientation(width, height);
    setOrientationMap((prev) => {
      if (prev[src] === detected) {
        return prev;
      }
      return {
        ...prev,
        [src]: detected,
      };
    });
    setDimensionMap((prev) => {
      const currentValue = prev[src];
      if (currentValue && currentValue.width === width && currentValue.height === height) {
        return prev;
      }
      return {
        ...prev,
        [src]: { width, height },
      };
    });
  };

  const heroFrameClass = "relative aspect-[16/9] w-full overflow-hidden rounded-[28px]";
  const imageObjectClass = "object-cover";
  const noteText = collection.note;
  const filterHint =
    locale === "ja"
      ? "※ キーワードボタンは現在プレビュー表示のみです。"
      : "Keyword buttons are a preview of upcoming filters.";

  const openModalLabel =
    locale === "ja" ? "画像を拡大表示" : "Open full-size image";
  const modalTitle = locale === "ja" ? "画像プレビュー" : "Image preview";

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => {
    if (!current) return;
    setIsModalOpen(true);
  };

  if (!hasImages) {
    return null;
  }

  const modalImageWidth = currentDimensions?.width ?? 1600;
  const modalImageHeight = currentDimensions?.height ?? 1200;

  const modalImageClass = "h-auto max-h-[80vh] w-auto max-w-full object-contain";

  return (
    <article className="grid gap-10 overflow-hidden rounded-[36px] border border-primary/10 bg-white/80 shadow-xl shadow-primary/5 transition hover:border-accent/30 hover:shadow-2xl md:grid-cols-[1.05fr_0.95fr]">
      <div className="relative bg-gradient-to-br from-primary/10 via-transparent to-accent/10 p-6 md:p-8">
        <div className="relative overflow-hidden rounded-[28px] border border-white/40 bg-white/70 shadow-inner">
          <button
            type="button"
            onClick={openModal}
            className="group block w-full cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={openModalLabel}
          >
            <div className={`${heroFrameClass} bg-gradient-to-br from-white via-white to-primary/10`}>
              {current && (
                <Image
                  key={`${current.src}-${normalizedIndex}`}
                  src={current.src}
                  alt={buildAlt(collection.displayName, current.isoDate, locale, normalizedIndex, total, current.label)}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 640px"
                  className={`${imageObjectClass} transition-[transform,filter] duration-500 ease-out group-hover:scale-[1.01]`}
                  priority={normalizedIndex === 0}
                  onLoadingComplete={({ naturalWidth, naturalHeight }) =>
                    registerOrientation(current.src, naturalWidth, naturalHeight)
                  }
                />
              )}
            </div>
          </button>
          {total > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label={locale === "ja" ? "前の写真" : "Previous photo"}
                className="group absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/40 text-primary shadow transition hover:-translate-y-[55%] hover:bg-primary hover:text-white"
              >
                <span aria-hidden className="text-xl font-semibold">‹</span>
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label={locale === "ja" ? "次の写真" : "Next photo"}
                className="group absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/40 text-primary shadow transition hover:-translate-y-[45%] hover:bg-primary hover:text-white"
              >
                <span aria-hidden className="text-xl font-semibold">›</span>
              </button>
            </>
          )}
          {/* Removed photo counter overlay */}
        </div>
        {total > 1 && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {collection.images.map((image, idx) => {
              const isActive = idx === normalizedIndex;
              return (
                <button
                  key={`${image.fileName}-dot`}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`${locale === "ja" ? "写真" : "Photo"} ${idx + 1}`}
                  className={`h-2.5 w-8 rounded-full transition ${
                    isActive ? "bg-primary" : "bg-primary/20 hover:bg-primary/40"
                  }`}
                />
              );
            })}
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between gap-10 px-8 pb-8 pt-4 md:px-10 md:pb-10 md:pt-5">
        <header className="space-y-3">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-accent/70">
            {locale === "ja" ? "COLLECTOR STORIES" : "COLLECTOR STORIES"}
          </p>
          <div className="space-y-2">
            <h3 className="font-serif text-2xl tracking-[0.12em] text-primary md:text-3xl">{collection.displayName}</h3>
            {collection.sns && collection.sns.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {collection.sns.map((link) => (
                  <a
                    key={`${collection.key}-${link.url}`}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-[0.65rem] uppercase tracking-[0.24em] text-primary transition hover:border-accent/50 hover:bg-accent/5 hover:text-accent"
                  >
                    <ServiceIcon service={link.service} label={link.label} />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </header>
        <div className="space-y-6 text-sm leading-relaxed text-primary/80">
          {noteText && (
            <div className="flex items-start gap-4 rounded-2xl bg-primary/5 p-5 text-primary">
              <QuoteIcon />
              <p className="text-sm leading-relaxed">{noteText}</p>
            </div>
          )}
          {allKeywords.length > 0 && (
            <section className="space-y-3">
              <p className="font-serif text-sm tracking-[0.08em] text-primary/80">
                {locale === "ja" ? "キーワード" : "Keywords"}
              </p>
              <div className="flex flex-wrap gap-1">
                {allKeywords.map((keyword) => {
                  const isActive = currentKeywordSet.has(keyword);
                  return (
                    <button
                      key={`${collection.key}-${keyword}`}
                      type="button"
                      aria-pressed={isActive}
                      className={`rounded-full border px-2.5 py-1 text-[0.68rem] leading-tight transition disabled:cursor-not-allowed ${
                        isActive
                          ? "border-accent/60 bg-accent/10 text-accent"
                          : "border-primary/10 bg-white/90 text-primary hover:border-primary/20 hover:bg-primary/5"
                      }`}
                      disabled
                    >
                      {keyword}
                    </button>
                  );
                })}
              </div>
              <p className="text-[0.7rem] text-primary/50">{filterHint}</p>
            </section>
          )}
        </div>
      </div>
      {isModalOpen && current && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center px-4 py-10"
          role="dialog"
          aria-modal="true"
          aria-label={modalTitle}
        >
          <button
            type="button"
            aria-label={locale === "ja" ? "閉じる" : "Close"}
            className="absolute inset-0 bg-black/60"
            onClick={closeModal}
          />
          <div className="relative z-10 w-full max-w-5xl rounded-3xl bg-white/95 p-6 shadow-2xl">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={closeModal}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-primary transition hover:bg-primary hover:text-white"
                aria-label={locale === "ja" ? "閉じる" : "Close"}
              >
                <span aria-hidden className="text-lg">×</span>
              </button>
            </div>
            <div className="mt-4">
              <div className="relative mx-auto flex max-w-4xl items-center justify-center">
                <div className="relative">
                  <Image
                    src={current.src}
                    alt={buildAlt(collection.displayName, current.isoDate, locale, normalizedIndex, total, current.label)}
                    width={modalImageWidth}
                    height={modalImageHeight}
                    className={modalImageClass}
                    priority
                  />
                  {total > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={handlePrev}
                        aria-label={locale === "ja" ? "前の写真" : "Previous photo"}
                        className="group absolute left-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/40 text-primary shadow transition hover:-translate-y-[55%] hover:bg-primary hover:text-white"
                      >
                        <span aria-hidden className="text-xl font-semibold">‹</span>
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        aria-label={locale === "ja" ? "次の写真" : "Next photo"}
                        className="group absolute right-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/40 text-primary shadow transition hover:-translate-y-[45%] hover:bg-primary hover:text-white"
                      >
                        <span aria-hidden className="text-xl font-semibold">›</span>
                      </button>
                    </>
                  )}
                </div>
              </div>
              {total > 1 && (
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {collection.images.map((image, idx) => {
                    const isActive = idx === normalizedIndex;
                    return (
                      <button
                        key={`${collection.key}-modal-thumb-${image.fileName ?? idx}`}
                        type="button"
                        onClick={() => setActiveIndex(idx)}
                        className={`relative h-16 w-16 overflow-hidden rounded-2xl border transition ${
                          isActive
                            ? "border-accent shadow-lg shadow-accent/30"
                            : "border-transparent shadow-sm hover:border-primary/30"
                        }`}
                        aria-label={`${locale === "ja" ? "写真" : "Photo"} ${idx + 1}`}
                      >
                        <Image
                          src={image.src}
                          alt={buildAlt(collection.displayName, image.isoDate, locale, idx, total, image.label)}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
