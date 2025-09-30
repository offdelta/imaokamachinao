"use client";

import { useCallback, useEffect, useState } from "react";
import type { GalleryGroup } from "@/lib/gallery";

type Props = {
  groups: GalleryGroup[];
};

export function GalleryGrid({ groups }: Props) {
  const [activeGroupIndex, setActiveGroupIndex] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openModal = useCallback((groupIndex: number, imageIndex = 0) => {
    setActiveGroupIndex(groupIndex);
    setActiveImageIndex(imageIndex);
  }, []);

  const closeModal = useCallback(() => {
    setActiveGroupIndex(null);
    setActiveImageIndex(0);
  }, []);

  useEffect(() => {
    if (activeGroupIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveImageIndex((current) => {
          const group = groups[activeGroupIndex];
          const total = group?.images.length ?? 0;
          return total ? (current - 1 + total) % total : current;
        });
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveImageIndex((current) => {
          const group = groups[activeGroupIndex];
          const total = group?.images.length ?? 0;
          return total ? (current + 1) % total : current;
        });
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [activeGroupIndex, closeModal, groups]);

  const goPrev = () => {
    if (activeGroupIndex === null) return;
    const total = groups[activeGroupIndex].images.length;
    setActiveImageIndex((current) => (current - 1 + total) % total);
  };

  const goNext = () => {
    if (activeGroupIndex === null) return;
    const total = groups[activeGroupIndex].images.length;
    setActiveImageIndex((current) => (current + 1) % total);
  };

  const activeGroup = activeGroupIndex !== null ? groups[activeGroupIndex] : null;
  const activeImage = activeGroup ? activeGroup.images[activeImageIndex] : null;

  return (
    <>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
        {groups.map((group, groupIndex) => {
          const cover = group.images[0];
          return (
            <article key={group.key} className="space-y-3 sm:space-y-4">
              <h2 className="font-serif text-sm tracking-[0.06em] sm:text-xl">{group.title}</h2>
              {cover ? (
                <button
                  type="button"
                  onClick={() => openModal(groupIndex)}
                  className="group block overflow-hidden shadow-card transition hover:-translate-y-1 hover:shadow-soft"
                  aria-label={`${group.title} の画像を表示`}
                >
                  <div className="relative aspect-square w-full overflow-hidden">
                    <img
                      src={cover.src}
                      alt={cover.alt}
                      className="block h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {group.images.length > 1 && (
                      <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 bg-black/60 px-3 py-1 text-xs text-white">
                        全 {group.images.length} 枚
                      </span>
                    )}
                  </div>
                </button>
              ) : (
                <div className="border border-dashed border-muted/40 bg-background px-6 py-12 text-center text-sm text-muted">
                  画像が登録されていません
                </div>
              )}
            </article>
          );
        })}
      </div>

      {activeGroup && activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeGroup.title} の画像ビューア`}
        >
          <div className="relative w-full max-w-5xl bg-surface p-6 shadow-soft">
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center bg-black/60 text-white transition hover:bg-black/80"
              aria-label="閉じる"
            >
              ×
            </button>

            <div className="space-y-4">
              <div className="flex h-[70vh] w-full items-center justify-center overflow-hidden">
                <img
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className="block max-h-full max-w-full object-contain"
                />
              </div>
              <div className="flex items-center justify-between text-sm text-muted">
                <div>{activeGroup.title}</div>
                <div>
                  {activeImageIndex + 1} / {activeGroup.images.length}
                </div>
              </div>
            </div>

            {activeGroup.images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="前の画像"
                  className="group absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white/80 shadow-md transition hover:bg-accent/80"
                >
                  <span aria-hidden className="block h-0 w-0 border-y-[7px] border-y-transparent border-r-[12px] border-r-primary transition group-hover:border-r-white" />
                  <span className="sr-only">前の画像</span>
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="次の画像"
                  className="group absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white/80 shadow-md transition hover:bg-accent/80"
                >
                  <span aria-hidden className="block h-0 w-0 border-y-[7px] border-y-transparent border-l-[12px] border-l-primary transition group-hover:border-l-white" />
                  <span className="sr-only">次の画像</span>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
