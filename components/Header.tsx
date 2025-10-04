"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Locale = "ja" | "en";

type BaseLink = {
  path: string;
  label: {
    ja: string;
    en: string;
  };
};

const baseLinks: BaseLink[] = [
  { path: "/", label: { ja: "トップ", en: "Home" } },
  { path: "/#highlights", label: { ja: "展示カテゴリー", en: "Highlights" } },
  { path: "/#about", label: { ja: "町直について", en: "About" } },
  { path: "/#legacy", label: { ja: "技", en: "Legacy" } },
  { path: "/#seal", label: { ja: "落款紹介", en: "Seals" } },
  { path: "/gallery", label: { ja: "作品ギャラリー", en: "Gallery" } },
  { path: "/collectors", label: { ja: "コレクターズギャラリー", en: "Collectors" } },
  { path: "/contact", label: { ja: "お問い合わせ", en: "Contact" } },
];

const createHref = (path: string, locale: Locale) => {
  const prefix = locale === "en" ? "/en" : "";
  if (path === "/") {
    return locale === "en" ? "/en" : "/";
  }
  if (path.startsWith("/#")) {
    const hash = path.slice(2);
    return prefix ? `${prefix}#${hash}` : `/#${hash}`;
  }
  return `${prefix}${path}`;
};

export function Header() {
  const pathname = usePathname() || "/";
  const isEnglish = pathname.startsWith("/en");
  const locale: Locale = isEnglish ? "en" : "ja";
  const normalizedPath = isEnglish ? pathname.replace(/^\/en/, "") || "/" : pathname;
  const japanesePath = isEnglish ? normalizedPath || "/" : pathname;
  const englishPath = isEnglish ? pathname : normalizedPath === "/" ? "/en" : `/en${normalizedPath}`;
  const roleLabel = isEnglish ? "CERAMIC ARTIST" : "陶芸家";
  const nameLabel = isEnglish ? "Machinao Imaoka" : "今岡町直";
  const taglineLabel = isEnglish ? "Creative Legacy" : "創作の軌跡";
  const nameWrapperClass = isEnglish
    ? "flex flex-col items-start gap-1"
    : "flex items-baseline gap-2 whitespace-nowrap";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
        <Link href={isEnglish ? "/en" : "/"} className="flex flex-nowrap items-center gap-4">
          <span className="relative h-12 w-12 overflow-hidden">
            <Image
              src="/images/top/imaokamachinao-favicon.jpg"
              alt="Machinao Imaoka favicon"
              fill
              sizes="48px"
              className="object-cover"
              priority
            />
          </span>
          <span className="font-serif text-xs tracking-[0.2em] leading-none md:text-sm">
            <span className={nameWrapperClass}>
              <span className={`text-[0.65rem] tracking-[0.32em] md:text-xs ${isEnglish ? "uppercase" : ""}`}>
                {roleLabel}
              </span>
              <span className="text-base tracking-[0.28em] md:text-lg">
                {nameLabel}
              </span>
            </span>
            <span className="mt-1 block font-sans text-[0.75rem] uppercase tracking-[0.48em] text-primary/60 md:text-sm">
              {taglineLabel}
            </span>
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-4 font-serif text-[0.75rem] tracking-[0.18em] text-primary md:gap-6 md:text-sm">
          {baseLinks.map((link) => {
            const targetPath = createHref(link.path, locale);
            const isAnchor = link.path.startsWith("/#");
            const isActive = isAnchor
              ? normalizedPath === "/"
              : normalizedPath === link.path || (link.path !== "/" && normalizedPath.startsWith(link.path));
            return (
              <Link
                key={`${locale}-${link.path}`}
                href={targetPath}
                aria-current={isActive ? "page" : undefined}
                className="text-primary transition-colors hover:text-accent visited:text-primary"
              >
                {link.label[locale]}
              </Link>
            );
          })}
          <div className="flex items-center gap-2 pl-4 text-[0.65rem] uppercase tracking-[0.32em]">
            <Link
              href={japanesePath}
              aria-current={!isEnglish ? "page" : undefined}
              className={`transition-colors ${!isEnglish ? "text-primary" : "text-primary/50 hover:text-accent"}`}
            >
              JP
            </Link>
            <span className="text-primary/30">/</span>
            <Link
              href={englishPath}
              aria-current={isEnglish ? "page" : undefined}
              className={`transition-colors ${isEnglish ? "text-primary" : "text-primary/50 hover:text-accent"}`}
            >
              EN
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
