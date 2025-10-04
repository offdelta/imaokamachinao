import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { PortraitSlider } from "@/components/PortraitSlider";
import { timeline } from "@/data/timeline";

export const metadata: Metadata = {
  title: "町直鉢と辰砂作品の公式アーカイブ｜今岡町直",
  description:
    "陶芸家 今岡町直（町直）が遺した町直鉢・盆栽鉢を高解像度で公開。辰砂や梅花皮など代表的な釉薬作品と盆栽文化への貢献を伝える公式アーカイブです。",
  keywords: [
    "今岡町直",
    "町直",
    "町直鉢",
    "盆栽鉢",
    "盆栽",
    "辰砂",
    "梅花皮",
    "豆盆栽",
    "窯変",
  ],
};

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      <section className="-mt-32 bg-white pt-32 md:-mt-36 md:pt-36">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="space-y-8">
            <div>
              <p className="font-serif text-sm tracking-[0.16em] text-accent">OFFICIAL ARCHIVE</p>
              <h1 className="mt-6 font-serif text-4xl tracking-[0.1em] leading-tight md:text-5xl">
                <span className="block">陶芸家 今岡町直</span>
                <span className="mt-4 block font-sans text-base uppercase tracking-[0.5em] text-accent md:text-lg">
                  創作の軌跡と町直鉢
                </span>
              </h1>
            </div>
            <div className="max-w-xl space-y-4 font-serif text-base text-muted md:text-lg">
              <p>ようこそ、今岡町直の公式ウェブサイトへ。</p>
              <p>祖父・町直（今岡町直）が手掛けた町直鉢や豆盆栽のための盆栽鉢、辰砂や梅花皮など多彩な釉薬作品を、後世に残すためにまとめています。</p>
              <p>ここでは、窯変辰砂や梅花皮の景色をはじめ、盆栽と共鳴する器づくりに込めた情熱を記録し、全国の町直ファンと共有してまいります。</p>
              <p>皆様と共に、町直鉢の魅力と盆栽文化を未来へ繋いでいけましたら幸いです。</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3 text-xs uppercase tracking-[0.18em] text-white transition hover:bg-accent"
              >
                作品ギャラリーへ
              </Link>
              <Link
                href="#seal"
                className="inline-flex items-center gap-3 rounded-full border border-primary px-7 py-3 text-xs uppercase tracking-[0.18em] text-primary transition hover:border-accent hover:text-accent"
              >
                落款を見る
              </Link>
            </div>
          </div>
          <HeroSlideshow />
        </div>
      </section>

      <section id="highlights">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-serif text-sm tracking-[0.16em] text-accent">HIGHLIGHTS</p>
          <h2 className="mt-6 font-serif text-3xl tracking-[0.12em]">町直鉢を彩る主要カテゴリー</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-primary/80">
            町直鉢の核となる辰砂、梅花皮、青磁などのシリーズを中心に、盆栽鉢としての実用性と芸術性を兼ね備えた作品群をご紹介します。
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              {
                href: "/gallery?filter=shinsa",
                title: "辰砂",
                meta: "町直を象徴する窯変辰砂釉",
                body: "窯の中で釉薬が変化する「窯変（ようへん）」を巧みにコントロールし、辰砂の赤に紫や藍色が混じり合った景色を生み出しました。町直鉢の名を決定づけた代表シリーズです。",
                image: "/images/辰砂釉正方直足鉢おどりその1図-正面.jpg",
                alt: "辰砂踊りの図その1 町直鉢",
              },
              {
                href: "/gallery?filter=kaeragi",
                title: "梅花皮（かいらぎ）",
                meta: "盆栽鉢に立体感を与える肌理",
                body: "素地と釉薬の収縮率の違いを利用し、梅の木の皮のような荒々しい肌を作り出す梅花皮釉。盆栽の樹姿を包み込む景色として高い人気を誇ります。",
                image: "/images/梅花皮釉円形三足鉢-梅の木-正面.jpg",
                alt: "梅花皮釉の町直鉢",
              },
              {
                href: "/gallery?filter=seiji",
                title: "青磁釉",
                meta: "静謐な青が映える盆栽鉢",
                body: "厚みのある青磁釉は、盆栽の緑を引き立てる深い青が魅力。辰砂と併せて町直の釉薬研究の幅広さを物語ります。",
                image: "/images/クローム青磁釉正方直足鉢-キツネの図-正面.jpg",
                alt: "青磁釉の町直鉢",
              },
              {
                href: "/gallery?filter=kannyu",
                title: "大貫入釉",
                meta: "器肌に刻まれた文様",
                body: "素地と釉薬の収縮率の違いを利用し、釉薬表面に細かなヒビを入れる技法です。町直の大貫入釉は偶然ではなく、緻密にコントロールされた美しい景色として知られています。",
                image: "/images/青磁釉墨貫入撫肩直足鉢.jpg",
                alt: "大貫入釉の町直鉢",
              },
              {
                href: "/gallery?filter=mame",
                title: "豆鉢",
                meta: "豆盆栽を彩る極小サイズ",
                body: "指先に乗るほどの極小サイズでありながら、辰砂や梅花皮、窯変釉など高度な釉薬技術が凝縮。豆盆栽を魅せる町直鉢の真骨頂です。",
                image: "/images/top/top-image3.jpg",
                alt: "豆盆栽用の町直鉢",
              },
              {
                href: "/gallery",
                title: "その他",
                meta: "町直鉢の多彩な表現",
                body: "金飛ばし、火襷（ひだすき）、銅置、釉裏紅乱斑模様など、町直の独創的な作品群は伝統技法に独自のアレンジを加えた点に特徴があります。",
                image: "/images/黒釉黄釉茄子型極小鉢.jpg",
                alt: "多彩な町直鉢",
              },
            ].map((item) => {
              const imageUrl = encodeURI(item.image);
              const cardContent = (
                <>
                  <div
                    className="h-56 w-full bg-cover bg-center"
                    style={{ backgroundImage: `url("${imageUrl}")` }}
                    aria-label={item.alt}
                  />
                  <div className="space-y-3 px-6 py-6">
                    <h3 className="font-serif text-xl tracking-[0.06em] group-hover:text-accent">{item.title}</h3>
                    <p className="text-sm text-muted">{item.meta}</p>
                    <p className="text-sm leading-relaxed text-primary/80">{item.body}</p>
                  </div>
                </>
              );

              if (item.href) {
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group block overflow-hidden rounded-3xl bg-surface shadow-card transition hover:-translate-y-1 hover:shadow-soft"
                  >
                    {cardContent}
                  </Link>
                );
              }

              return (
                <article
                  key={item.title}
                  className="group overflow-hidden rounded-3xl bg-surface shadow-card transition hover:-translate-y-1 hover:shadow-soft"
                >
                  {cardContent}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-serif text-sm tracking-[0.16em] text-accent">ABOUT</p>
          <h2 className="mt-6 font-serif text-3xl tracking-[0.12em]">今岡町直<span className="text-sm">（いまおか まちなお）</span>について</h2>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-primary/80">
            ここでは町直の略歴を掲載いたします。盆栽鉢としての実用性と鑑賞陶としての美を両立させた町直鉢の背景を、年譜と合わせてご覧ください。
          </p>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <PortraitSlider />
            <div className="space-y-6 text-sm leading-relaxed text-primary/80">
              <div>
                <h3 className="font-serif text-xl tracking-[0.08em]">年譜と主な出来事</h3>
                <ul className="mt-4 space-y-3">
                  {timeline.map((item) => (
                    <li key={item.year + item.event} className="flex gap-4">
                      <span className="font-serif text-base tracking-[0.1em]">{item.year}</span>
                      <span className="flex-1 text-sm leading-relaxed">{item.event}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="legacy" className="border-t border-black/5 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-serif text-sm tracking-[0.16em] text-accent">LEGACY</p>
          <h2 className="mt-6 font-serif text-3xl tracking-[0.12em] leading-relaxed">
            町直の功績：「赤」辰砂を操る技術
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-primary/80">
            町直は特に小品盆栽の世界において、その釉薬技術で数々の作品を世に送り出しました。町直鉢の大きな魅力は、焼成が極めて難しい「辰砂（しんしゃ）」釉を操り、燃えるような赤から深みのある赤紫色まで、多彩で安定した発色を可能にした点にあります。
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { src: "/images/鶏血釉反縁正方直足廃窯鉢-正面.jpg", alt: "鶏血釉廃窯鉢" },
              { src: "/images/辰砂釉丸鉢直足小鉢-正面.jpg", alt: "辰砂丸鉢" },
              { src: "/images/桃花紅釉円形鉢-正面.jpg", alt: "桃花紅丸鉢" },
              { src: "/images/辰砂釉窯変撫肩角鉢-正面.jpg", alt: "窯変釉撫肩角鉢" },
            ].map((image) => (
              <div key={image.src} className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <h3 className="mt-10 font-serif text-2xl tracking-[0.1em]">辰砂という“赤”への挑戦と功績</h3>
          <p className="mt-4 text-sm leading-relaxed text-primary/80">
            辰砂釉は、銅を呈色剤として還元焼成することで美しい赤色を得る技法ですが、その発色は焼成時の炎の具合や温度変化に極めて敏感で、少しでも条件がずれると赤くならず、黒ずんだりくすんだりしてしまいます。そのため、古くから多くの陶芸家を悩ませてきた「幻の釉薬」とも言える存在でした。
          </p>
          <h3 className="mt-10 font-serif text-2xl tracking-[0.1em]">多彩な赤の表現</h3>
          <p className="mt-4 text-sm leading-relaxed text-primary/80">
            単一の赤色だけでなく、窯の中で釉薬が変化する「窯変（ようへん）」を巧みにコントロールし、辰砂の赤に紫や藍色が混じり合った、複雑で深みのある景色を生み出しました。この「窯変辰砂」は、町直鉢の個性を代表する表現です。
          </p>
          <h3 className="mt-10 font-serif text-2xl tracking-[0.1em]">芸術性の向上</h3>
          <p className="mt-4 text-sm leading-relaxed text-primary/80">
            彼の辰砂鉢は、それまで鉢が果たしてきた「盆栽を入れる器」という役割を超え、鉢そのものが高い鑑賞価値を持つ芸術品としての地位を確立しました。植えられた盆栽の美しさを最大限に引き出すとともに、鉢単体での芸術性を見出しました。
          </p>
          <p className="mt-4 text-sm leading-relaxed text-primary/80">
            町直は、この辰砂釉の研究に情熱を注ぎ、長年の試行錯誤の末に、その配合や焼成方法を徹底的に探求。これにより、これまで偶然の産物とされがちだった辰砂の美しい赤色を、高いレベルで安定して作品に焼き付ける技術を確立しました。それにより、辰砂釉の価値と表現の幅は飛躍的に広がり、「辰砂の町直」とも呼ばれておりました。
          </p>
        </div>
      </section>

      <section id="seal" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-serif text-sm tracking-[0.16em] text-accent">SEAL SIGNATURE</p>
          <h2 className="mt-6 font-serif text-3xl tracking-[0.12em]">落款紹介</h2>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-primary/80">
            落款は作品の制作年代やシリーズを見分ける重要な手がかりです。町直の作品の落款には「町」と「町直」の2種類が見受けられます。初期には「風」と印字されたものもあり、町直鉢コレクションの来歴を知るヒントとなります。
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {[{
              src: "/images/落款町.jpg",
              title: "「町」",
              description: "主に1970年代の作品で確認されます。柔らかな曲線の中に力強さが宿り、町直の実直な性格を反映するようです。サイトロゴのデザインにも使用しております。",
            },
            {
              src: "/images/落款町直.jpg",
              title: "「町直」",
              description: "中期から後期にかけて刻まれています。流れるような優しい文字は辰砂や造形作品など幅広いシリーズで確認でき、町直鉢を鑑定する際の重要な手掛かりとなります。",
            }].map((item) => (
              <figure key={item.title} className="space-y-4">
                <div className="relative h-72 w-full overflow-hidden rounded-3xl bg-surface shadow-card">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="space-y-2">
                  <h3 className="font-serif text-xl tracking-[0.08em]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-primary/80">{item.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="features">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-serif text-sm tracking-[0.16em] text-accent">FEATURES</p>
          <h2 className="mt-6 font-serif text-3xl tracking-[0.12em]">当サイトのこだわり</h2>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {[
              {
                title: "多言語による情報発信",
                body: "当サイトは、日本語と英語のページを併設しております。国内外の研究者やコレクターの皆様へ、町直鉢や盆栽鉢の魅力を国境を越えてお届けすることを目指しています。",
              },
              {
                title: "町直の歴史を正しく後世へ",
                body: "インターネットが普及する以前の時代に生きた町直の足跡を、散逸することなく後世へと伝えていくことを目標にしています。辰砂や梅花皮などの技術資料も可能な限り整理して公開します。",
              },
              {
                title: "愛好家の皆様の交流の場として",
                body: "この場所が、単なる情報サイトに留まらず、町直鉢を愛してくださる世界中のファンや研究者の皆様が交流を深めるコミュニティとなることを願っています。",
              },
            ].map((item) => (
              <article key={item.title} className="space-y-4">
                <h3 className="font-serif text-xl tracking-[0.06em]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-primary/80">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
