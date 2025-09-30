"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const portraits = [0, 1, 2, 3, 4, 5].map((index) => ({
  src: `/images/top/machinao${index}.jpg`,
  alt: `今岡町直のポートレート${index + 1}`,
}));

export function PortraitSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (portraits.length <= 1) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % portraits.length);
    }, 4000);

    return () => window.clearInterval(id);
  }, []);

  if (!portraits.length) {
    return null;
  }

  return (
    <div className="relative h-[560px] w-full overflow-hidden">
      {portraits.map((portrait, i) => (
        <div
          key={portrait.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={portrait.src}
            alt={portrait.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-contain"
            priority={i === 0}
          />
        </div>
      ))}
      {portraits.length > 1 && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {portraits.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
