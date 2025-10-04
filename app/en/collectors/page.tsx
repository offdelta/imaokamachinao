import type { Metadata } from "next";
import Link from "next/link";
import { ProvidedCollectionCard } from "@/components/ProvidedCollectionCard";
import { getProvidedCollections } from "@/lib/provided-gallery";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Machinao Bonsai Pot Collectors Showcase",
  description:
    "Photographs shared by collectors who care for Machinao Imaoka’s Shinsya, kairagi, and miniature bonsai pots. Contribute your Machinao pieces and connect with fellow enthusiasts.",
  keywords: [
    "Machinao Imaoka",
    "町直",
    "Machinao bonsai pots",
    "Shinsya",
    "Kairagi",
    "bonsai pot collectors",
  ],
};

export default function CollectorsPage() {
  const collections = getProvidedCollections("en");

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#f3f1ec] via-white to-[#f7f4ef]">
      <div className="pointer-events-none absolute inset-x-1/2 top-[-160px] h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_top,_rgba(105,140,171,0.16),_transparent_65%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_right,_rgba(173,125,79,0.12),_transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <section className="max-w-3xl space-y-6">
          <p className="font-sans text-xs uppercase tracking-[0.32em] text-accent">SHARED ARCHIVE</p>
          <h1 className="font-serif text-4xl tracking-[0.12em] text-primary md:text-5xl">Collectors Showcase</h1>
          <p className="text-sm leading-loose text-primary/80">
            This page gathers photographs generously shared by collectors who care for Machinao Imaoka’s bonsai pots—from vivid Shinsya bowls to kairagi-textured trays.
          </p>
          <p className="text-sm leading-loose text-primary/80">
            To be featured, please send us high-resolution images, the social media link you wish to display, and any stories about how the piece came into your hands.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/en/contact"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-accent"
            >
              Share your photos
            </Link>
            <Link
              href="/en/gallery"
              className="inline-flex items-center gap-3 rounded-full border border-primary px-8 py-3 text-xs uppercase tracking-[0.24em] text-primary transition hover:border-accent hover:text-accent"
            >
              View main gallery
            </Link>
          </div>
        </section>

        {collections.length === 0 ? (
          <p className="mt-20 rounded-3xl border border-dashed border-primary/30 bg-white/60 px-8 py-12 text-center font-serif text-base text-primary/60">
            No photographs yet. Add files to public/images/provided and they will appear here automatically.
          </p>
        ) : (
          <div className="mt-20 space-y-16">
            {collections.map((collection) => (
              <ProvidedCollectionCard key={collection.key} collection={collection} locale="en" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
