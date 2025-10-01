import { getGalleryGroups } from "@/lib/gallery";
import { GalleryFilterBoard } from "@/components/GalleryFilterBoard";
import { resolveGalleryFilter } from "@/lib/gallery-filters";

export const dynamic = "force-dynamic";

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
        <h1 className="mt-6 font-serif text-3xl tracking-[0.12em]">Gallery of Works</h1>
        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted">
          *Titles are provisional, drawn from Machinao’s original notes and the family’s recollections.
        </p>
        {groups.length === 0 ? (
          <p className="mt-12 text-sm text-muted">
            No JPG images were found. Please add files to the public/images directory.
          </p>
        ) : (
          <div className="mt-12">
            <GalleryFilterBoard groups={groups} locale="en" initialFilter={initialFilter} />
          </div>
        )}
      </div>
    </div>
  );
}
