"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  src: string;
  alt: string;
};

const slides: Slide[] = [
  { src: "/images/top/top-image.jpg", alt: "代表作品スライド 1" },
  { src: "/images/top/top-image2.jpg", alt: "代表作品スライド 2" },
  { src: "/images/top/top-image3.jpg", alt: "代表作品スライド 3" },
  { src: "/images/top/top-image4.jpg", alt: "代表作品スライド 4" },
];

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length === 0) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  if (slides.length === 0) {
    return null;
  }

  return (
    <div className="relative aspect-[3/2] w-full overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-[1200ms] ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-full w-full object-cover"
          />
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, dotIndex) => (
          <span
            key={dotIndex}
            className={`h-2 w-2 rounded-full transition ${dotIndex === index ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}
