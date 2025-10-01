import Image from "next/image";
import Link from "next/link";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { PortraitSlider } from "@/components/PortraitSlider";
import { timeline } from "@/data/timeline";

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
                  創作の軌跡
                </span>
              </h1>
            </div>
            <div className="max-w-xl space-y-4 font-serif text-base text-muted md:text-lg">
              <p>ようこそ、今岡町直の公式ウェブサイトへ。</p>
              <p>祖父・町直が遺した作品を、そしてその創作の軌跡をご覧いただくために、この場所を設えました。</p>
              <p>このサイトを、単に手元にある作品を公開するだけでなく、世に広まった町直の作品が集う「記録の場」としたいと考えております。</p>
              <p>皆様と共に、今岡町直の創作世界を未来へ繋いでいけましたら幸いです。</p>
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
          <h2 className="mt-6 font-serif text-3xl tracking-[0.12em]">展示中の主要カテゴリー</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              {
                href: "/gallery?filter=shinsa",
                title: "辰砂",
                meta: "深紅が映える代表作",
                body: "窯の中で釉薬が変化する「窯変（ようへん）」を巧みにコントロールし、辰砂の赤に紫や藍色が混じり合った景色を生み出しました。この「窯変辰砂」は、町直の代名詞です。",
                image: "/images/辰砂釉正方直足鉢おどりその1図-正面.jpg",
                alt: "辰砂踊りの図その1",
              },
              {
                href: "/gallery?filter=kaeragi",
                title: "梅花皮（かいらぎ）",
                meta: "肌理が語る景色",
                body: "彼のもう一つの代名詞が「梅花皮」と呼ばれる技法です。素地と釉薬の収縮率の違いを利用して表面に大きな貫入を生み、その模様が梅の木の皮に似ていることから名付けられました。美しく均一な梅花皮を作り出すには高度な技術が要求され、これも町直が得意とした表現の一つです。",
                image: "/images/梅花皮釉円形三足鉢-梅の木-正面.jpg",
                alt: "梅の木",
              },
              {
                href: "/gallery?filter=seiji",
                title: "青磁釉",
                meta: "静謐な青の世界",
                body: "彼の青磁釉は「練っとりとした深みのある発色」が最大の特徴です。釉薬に厚みと独特の粘り気が感じられる重厚な質感に加え、窯変による微妙な濃淡や白へ寄せた青も見られ、辰砂と同様に高い釉薬技術を物語っています。",
                image: "/images/クローム青磁釉正方直足鉢-キツネの図-正面.jpg",
                alt: "クローム青磁キツネの図",
              },
              {
                href: "/gallery?filter=kannyu",
                title: "大貫入釉",
                meta: "器肌に刻まれた文様",
                body: "素地と釉薬の収縮率の違いを利用し、釉薬表面に細かなヒビを入れる技法です。町直の作品ではこのヒビが景色となり、計算されたデザインとして大きな魅力を放ちます。彼の貫入釉・大貫入釉は偶然ではなく、緻密にコントロールされた技術によって生み出されました。",
                image: "/images/青磁釉墨貫入撫肩直足鉢.jpg",
                alt: "貫入撫肩鉢",
              },
              {
                href: "/gallery?filter=mame",
                title: "豆鉢",
                meta: "手のひらサイズの造形美",
                body: "指先に乗るほどの極小サイズでありながら、辰砂や梅花皮（かいらぎ）、窯変釉など高度な釉薬技術が凝縮されているのが特徴です。単なる器ではなく、美術品としての完成度を誇ります。豆盆栽を飾る「豆盆の景」において、主役の植物を引き立てつつ景色の一部となる重要な役割を果たします。",
                image: "/images/top/top-image3.jpg",
                alt: "top-image3",
              },
              {
                href: "/gallery",
                title: "その他",
                meta: "多彩な作品群",
                body: "金飛ばし、火襷（ひだすき）、銅置、釉裏紅乱斑模様など、町直の独創的な作品群は、伝統技法に独自のアレンジを加えた点に特徴があります。釉薬の化学変化を計算し尽くして再現する技法や、伝統技法を基に斑点を飛ばす技術からは、町直の実直さと遊び心の双方を見ることができます。",
                image: "/images/黒釉黄釉茄子型極小鉢.jpg",
                alt: "茄子型極小鉢",
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
          <h2 className="mt-6 font-serif text-3xl tracking-[0.12em]">今岡町直（いまおか まちなお）について</h2>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-primary/80">
            ここでは町直の略歴を掲載いたします。
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
            町直は、特に小品盆栽の世界において、その釉薬技術で数々の作品を世に送り出しました。彼がこの世に残した最大の功績の一つが、焼成が極めて難しいとされる「辰砂（しんしゃ）」釉を操り、燃えるような赤から深みのある赤紫色まで、多彩で安定した発色を可能にしたことだと言われています。
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { src: "/images/鶏血釉廃窯鉢.jpg", alt: "鶏血釉廃窯鉢" },
              { src: "/images/辰砂丸鉢.jpg", alt: "辰砂丸鉢" },
              { src: "/images/桃花紅丸鉢.jpg", alt: "桃花紅丸鉢" },
              { src: "/images/窯変釉撫肩角鉢.jpg", alt: "窯変釉撫肩角鉢" },
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
            単一の赤色だけでなく、窯の中で釉薬が変化する「窯変（ようへん）」を巧みにコントロールし、辰砂の赤に紫や藍色が混じり合った、複雑で深みのある景色を生み出しました。この「窯変辰砂」は、彼の代名詞とも言えるでしょう。
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
            落款は作品の制作年代やシリーズを見分ける重要な手がかりです。町直の作品の落款には「町」と「町直」の2種類が見受けられます。初期には「風」と印字されたものもあります。
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
              description: "中期から後期にかけて刻まれています。流れるような優しい文字は辰砂や造形作品など幅広いシリーズで確認できます。",
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
                body: "当サイトは、日本語と英語のページを併設しております。国内外の研究者やコレクターの皆様へ、国境を越えてお届けすることを目指しています。",
              },
              {
                title: "町直の歴史を正しく後世へ",
                body: "インターネットが普及する以前の時代に生きた町直の足跡を、散逸することなく、後世へと伝えていくことを目標にしています。",
              },
              {
                title: "愛好家の皆様の交流の場として",
                body: "この場所が、単なる情報サイトに留まらず、町直鉢を愛してくださる世界中のファンや研究者の皆様が、交流を深めることのできるコミュニティとなることを願っています。",
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
