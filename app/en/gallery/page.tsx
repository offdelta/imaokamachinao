import { getGalleryGroups } from "@/lib/gallery";
import { GalleryGrid } from "@/components/GalleryGrid";

export const dynamic = "force-dynamic";

export default function GalleryPage() {
  const groups = getGalleryGroups();

  return (
    <div className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-serif text-sm tracking-[0.16em] text-accent">GALLERY</p>
        <h1 className="mt-6 font-serif text-3xl tracking-[0.12em]">Gallery of Works</h1>
        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted">
          *Titles are provisional and will be updated to their formal names.
        </p>
        {groups.length === 0 ? (
          <p className="mt-12 text-sm text-muted">
            No JPG images were found. Please add files to the public/images directory.
          </p>
        ) : (
          <div className="mt-12">
            <GalleryGrid groups={groups} locale="en" />
          </div>
        )}
      </div>
    </div>
  );
}
