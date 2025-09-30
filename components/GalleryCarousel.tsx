"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryImage } from "@/lib/gallery";

type Props = {
  title: string;
  images: GalleryImage[];
};

export function GalleryCarousel({ title, images }: Props) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const handlePrev = () => {
    setIndex((current) => (current - 1 + total) % total);
  };

  const handleNext = () => {
    setIndex((current) => (current + 1) % total);
  };

  const currentImage = images[index];

  return (
    <div className="relative overflow-hidden rounded-3xl bg-surface shadow-card">
      <div className="relative aspect-square w-full">
        <Image
          key={currentImage.src}
          src={currentImage.src}
          alt={`${title} ${index + 1}/${total}`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover"
        />
      </div>
      {total > 1 && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            aria-label="前の画像"
            className="group absolute left-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-md transition hover:bg-accent/80"
          >
            <span aria-hidden className="block h-0 w-0 border-y-[6px] border-y-transparent border-r-[10px] border-r-primary transition group-hover:border-r-white" />
            <span className="sr-only">前の画像</span>
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="次の画像"
            className="group absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-md transition hover:bg-accent/80"
          >
            <span aria-hidden className="block h-0 w-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-primary transition group-hover:border-l-white" />
            <span className="sr-only">次の画像</span>
          </button>
          <div className="absolute bottom-4 right-4 rounded-full bg-white/80 px-3 py-1 text-xs text-primary">
            {index + 1} / {total}
          </div>
        </>
      )}
    </div>
  );
}
