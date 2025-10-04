import type { Metadata } from "next";
import { getGalleryGroups } from "@/lib/gallery";
import { GalleryFilterBoard } from "@/components/GalleryFilterBoard";
import { resolveGalleryFilter } from "@/lib/gallery-filters";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "町直鉢ギャラリー｜辰砂・梅花皮・盆栽鉢コレクション",
  description:
    "町直（今岡町直）が手掛けた町直鉢をカテゴリー別に閲覧できるギャラリー。辰砂釉、梅花皮釉、青磁釉など盆栽鉢の代表シリーズを高解像度で収蔵しています。",
  keywords: [
    "町直鉢",
    "今岡町直",
    "辰砂",
    "梅花皮",
    "盆栽鉢",
    "盆栽",
    "窯変",
  ],
};

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function GalleryPage({ searchParams }: PageProps) {
  const groups = getGalleryGroups();
  const rawFilter = searchParams?.filter;
  const filterParam = Array.isArray(rawFilter)
    ? rawFilter[0]
    : typeof rawFilter === "string"
      ? rawFilter
      : undefined;
  const initialFilter = resolveGalleryFilter(filterParam);

  return (
    <div className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-serif text-sm tracking-[0.16em] text-accent">GALLERY</p>
        <h1 className="mt-6 font-serif text-3xl tracking-[0.12em]">作品ギャラリー</h1>
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          町直鉢の代表シリーズを、辰砂・梅花皮・青磁・豆鉢などのカテゴリーで絞り込めます。町直（今岡町直）が追求した盆栽鉢の景色をお楽しみください。
        </p>
        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted">
          ※作品名は仮称です。町直が個々の作品にメモ書きしていたものや記憶を頼りに付けております。
        </p>
        {groups.length === 0 ? (
          <p className="mt-12 text-sm text-muted">JPG 画像が見つかりませんでした。public/images にファイルを追加してください。</p>
        ) : (
          <div className="mt-12">
            <GalleryFilterBoard groups={groups} locale="ja" initialFilter={initialFilter} />
          </div>
        )}
      </div>
    </div>
  );
}
