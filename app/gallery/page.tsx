import { getGalleryGroups } from "@/lib/gallery";
import { GalleryGrid } from "@/components/GalleryGrid";

export const dynamic = "force-dynamic";

export default function GalleryPage() {
  const groups = getGalleryGroups();

  return (
    <div className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-serif text-sm tracking-[0.16em] text-accent">GALLERY</p>
        <h1 className="mt-6 font-serif text-3xl tracking-[0.12em]">作品ギャラリー</h1>
        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted">※作品名は仮称です。当時、町直が個々の作品にメモ書きしていたものをそのまま載せております。</p>
        {groups.length === 0 ? (
          <p className="mt-12 text-sm text-muted">JPG 画像が見つかりませんでした。public/images にファイルを追加してください。</p>
        ) : (
          <div className="mt-12">
            <GalleryGrid groups={groups} />
          </div>
        )}
      </div>
    </div>
  );
}
