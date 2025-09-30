"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "トップ" },
  { href: "/#highlights", label: "展示カテゴリー" },
  { href: "/#about", label: "町直について" },
  { href: "/#legacy", label: "技" },
  { href: "/#seal", label: "落款紹介" },
  { href: "/gallery", label: "作品ギャラリー" },
  { href: "/#features", label: "こだわり" },
  { href: "/contact", label: "お問い合わせ" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
        <Link
          href="/"
          className="font-serif text-xs tracking-[0.2em] leading-none md:text-sm"
        >
          <span className="block text-sm tracking-[0.28em] md:text-base">
            陶芸家 今岡町直
          </span>
          <span className="mt-1 block font-sans text-[0.65rem] uppercase tracking-[0.48em] text-primary/60 md:text-sm">
            創作の軌跡
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-4 font-serif text-[0.75rem] tracking-[0.18em] text-primary md:gap-6 md:text-sm">
          {links.map((link) => {
            const isAnchor = link.href.startsWith("/#");
            const isActive = isAnchor
              ? pathname === "/"
              : pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className="text-primary transition-colors hover:text-accent visited:text-primary"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
