import type { Metadata } from "next";
import Link from "next/link";
import { ProvidedCollectionCard } from "@/components/ProvidedCollectionCard";
import { getProvidedCollections } from "@/lib/provided-gallery";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "町直鉢コレクターズギャラリー｜今岡町直の盆栽鉢を共有",
  description:
    "町直鉢を愛蔵するコレクターの皆さまから寄せられた辰砂・梅花皮・豆盆栽用の盆栽鉢写真を紹介するギャラリー。町直（今岡町直）の作品提供も随時募集中です。",
  keywords: [
    "町直鉢",
    "今岡町直",
    "辰砂",
    "梅花皮",
    "盆栽鉢",
    "コレクター",
  ],
};

export default function CollectorsPage() {
  const collections = getProvidedCollections("ja");

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#f7f4ef] via-white to-[#f9f7f2]">
      <div className="pointer-events-none absolute inset-x-1/2 top-[-160px] h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_top,_rgba(173,125,79,0.18),_transparent_65%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-[radial-gradient(circle_at_left,_rgba(93,110,130,0.12),_transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <section className="max-w-3xl space-y-6">
          <p className="font-sans text-xs uppercase tracking-[0.32em] text-accent">SHARED ARCHIVE</p>
          <h1 className="font-serif text-4xl tracking-[0.12em] text-primary md:text-5xl">コレクターズギャラリー</h1>
          <p className="text-sm leading-loose text-primary/80">
            今岡町直の作品をご愛好いただいている皆さまから、SNSやメッセージを通じてお寄せいただいた町直鉢・盆栽鉢の写真をまとめています。持ち主の個性や美意識を反映して表情を変える鉢の多彩な趣をお楽しみください。
          </p>
          <p className="text-sm leading-loose text-primary/80">
            掲載にご協力くださる方は、画像データをお送りください。ご自身のSNSアカウントから今岡町直のアカウントに送ってくださっても構いません。作品の背景や想い出のエピソードなど、短いコメントも歓迎です。
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-accent"
            >
              掲載にご協力ください
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-3 rounded-full border border-primary px-8 py-3 text-xs uppercase tracking-[0.24em] text-primary transition hover:border-accent hover:text-accent"
            >
              既存ギャラリーを見る
            </Link>
          </div>
        </section>

        {collections.length === 0 ? (
          <p className="mt-20 rounded-3xl border border-dashed border-primary/30 bg-white/60 px-8 py-12 text-center font-serif text-base text-primary/60">
            現在表示できる写真がありません。public/images/provided フォルダに町直鉢の画像を追加すると自動で表示されます。
          </p>
        ) : (
          <div className="mt-20 space-y-16">
            {collections.map((collection) => (
              <ProvidedCollectionCard key={collection.key} collection={collection} locale="ja" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
