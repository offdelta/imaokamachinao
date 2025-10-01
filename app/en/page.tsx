import Image from "next/image";
import Link from "next/link";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { PortraitSlider } from "@/components/PortraitSlider";
import { timelineEn } from "@/data/timeline";

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      <section className="-mt-32 bg-white pt-32 md:-mt-36 md:pt-36">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="space-y-8">
            <div>
              <p className="font-serif text-sm tracking-[0.16em] text-accent">OFFICIAL ARCHIVE</p>
              <h1 className="mt-6 font-serif text-4xl tracking-[0.1em] leading-tight md:text-5xl">
                <span className="block">Machinao Imaoka, Ceramic Artist</span>
                <span className="mt-4 block font-sans text-base uppercase tracking-[0.5em] text-accent md:text-lg">
                  Creative Legacy
                </span>
              </h1>
            </div>
            <div className="max-w-xl space-y-4 font-serif text-base text-muted md:text-lg">
              <p>Welcome to the official website of Machinao Imaoka.</p>
              <p>We prepared this space so you can experience the works he left behind and follow the arc of his creative journey.</p>
              <p>Our aim is not only to share the pieces currently in our care, but to build an archive where Machinao’s works—wherever they reside—can gather as a living record.</p>
              <p>We hope to carry Machinao Imaoka’s creative world into the future together with you.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/en/gallery"
                className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3 text-xs uppercase tracking-[0.18em] text-white transition hover:bg-accent"
              >
                View Gallery
              </Link>
              <Link
                href="#seal"
                className="inline-flex items-center gap-3 rounded-full border border-primary px-7 py-3 text-xs uppercase tracking-[0.18em] text-primary transition hover:border-accent hover:text-accent"
              >
                View Seals
              </Link>
            </div>
          </div>
          <HeroSlideshow />
        </div>
      </section>

      <section id="highlights">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-serif text-sm tracking-[0.16em] text-accent">HIGHLIGHTS</p>
          <h2 className="mt-6 font-serif text-3xl tracking-[0.12em]">Signature Categories on Exhibit</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              {
                href: "/en/gallery?filter=shinsa",
                title: "Shinsya (Cinnabar Red)",
                meta: "Hallmark pieces glowing in crimson",
                body: "By expertly guiding kiln-transformation (yohen), Machinao blended vivid crimson with purples and indigo tones. This kiln-varied Shinsya glaze became synonymous with his name.",
                image: "/images/辰砂釉正方直足鉢おどりその1図-正面.jpg",
                alt: "Shinsya vase, Dancing Figure No.1",
              },
              {
                href: "/en/gallery?filter=kaeragi",
                title: "Kairagi Texture",
                meta: "Textures that tell a story",
                body: "Another signature technique is the kairagi glaze. Leveraging the different shrinkage rates of clay and glaze, he produced dramatic crackled surfaces reminiscent of plum bark—an achievement that demands great skill.",
                image: "/images/梅花皮釉円形三足鉢-梅の木-正面.jpg",
                alt: "Kairagi plum tree pot",
              },
              {
                href: "/en/gallery?filter=seiji",
                title: "Celadon Glazes",
                meta: "A tranquil world of blue",
                body: "His celadon work is noted for its dense, almost creamy depth of color. Thick, tactile glazes and subtle kiln variations reveal a mastery on par with his celebrated Shinsya pieces.",
                image: "/images/クローム青磁釉正方直足鉢-キツネの図-正面.jpg",
                alt: "Chrome celadon fox motif pot",
              },
              {
                href: "/en/gallery?filter=kannyu",
                title: "Large Craquelure Glaze",
                meta: "Patterns etched into the surface",
                body: "Harnessing the shrinkage difference between body and glaze, he created intricate crackle patterns. In Machinao’s works these lines become deliberate designs, meticulously controlled rather than accidental.",
                image: "/images/青磁釉墨貫入撫肩直足鉢.jpg",
                alt: "Large craquelure shoulder bowl",
              },
              {
                href: "/en/gallery?filter=mame",
                title: "Miniature Pots",
                meta: "Palm-sized expressions of form",
                body: "Even pieces small enough to rest on a fingertip compress advanced techniques such as Shinsya, kairagi, and kiln-varied glazes. They are complete works of art that elevate the ‘mame-bonsai’ displays they accompany.",
                image: "/images/top/top-image3.jpg",
                alt: "Miniature bonsai pot",
              },
              {
                href: "/en/gallery",
                title: "Other Works",
                meta: "A spectrum of experimental pieces",
                body: "Gold-splashed finishes, hidasuki firing marks, copper-set glazes, and expressive underglaze copper marbling all showcase Machinao’s creative spin on tradition. From the chemistry-driven glaze formulas to the deliberate placement of flecks based on classic techniques, you can see both his earnest discipline and playful spirit.",
                image: "/images/黒釉黄釉茄子型極小鉢.jpg",
                alt: "Eggplant-shaped micro pot",
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
          <h2 className="mt-6 font-serif text-3xl tracking-[0.12em]">About Machinao Imaoka</h2>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-primary/80">
            Here you will find a concise overview of Machinao’s life.
          </p>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <PortraitSlider />
            <div className="space-y-6 text-sm leading-relaxed text-primary/80">
              <div>
                <h3 className="font-serif text-xl tracking-[0.08em]">Timeline of Key Events</h3>
                <ul className="mt-4 space-y-3">
                  {timelineEn.map((item) => (
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
            Machinao’s Achievement: Mastering the Red of Shinsya
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-primary/80">
            Machinao Imaoka (1925-2001) made his name in the shohin bonsai world by releasing countless works through his command of glazes. One of his greatest contributions is said to be his mastery of the notoriously difficult Shinsya glaze, achieving stable hues that range from flaming crimson to deep reddish purple.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { src: "/images/鶏血釉廃窯鉢.jpg", alt: "Keiketsu glaze pot" },
              { src: "/images/辰砂丸鉢.jpg", alt: "Shinsya round pot" },
              { src: "/images/桃花紅丸鉢.jpg", alt: "Peach blossom red pot" },
              { src: "/images/窯変釉撫肩角鉢.jpg", alt: "Kiln-varied shoulder pot" },
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

          <h3 className="mt-10 font-serif text-2xl tracking-[0.1em]">Mastering the Elusive Red of Shinsya</h3>
          <p className="mt-4 text-sm leading-relaxed text-primary/80">
            Shinsya glaze uses copper as a colorant in a reduction firing to produce vibrant red tones, yet even slight shifts in flame or temperature can dull the color. This fragility long made it a phantom glaze that frustrated potters for generations.
          </p>
          <h3 className="mt-10 font-serif text-2xl tracking-[0.1em]">A Spectrum of Reds</h3>
          <p className="mt-4 text-sm leading-relaxed text-primary/80">
            Machinao went beyond a single shade, orchestrating kiln variations so that purples and indigos mingle with the red surface. The resulting kiln-varied Shinsya finish embodies the complex, layered beauty that defined his work.
          </p>
          <h3 className="mt-10 font-serif text-2xl tracking-[0.1em]">Elevating Artistic Value</h3>
          <p className="mt-4 text-sm leading-relaxed text-primary/80">
            His Shinsya pots transcend the role of mere containers, drawing out the beauty of the bonsai while revealing the artistic presence of the pots themselves.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-primary/80">
            Machinao devoted years of research and experimentation to Shinsya, exhaustively refining glaze formulas and firing methods. That devotion transformed a glaze once left to chance into a reproducible technique, greatly expanding the expressive range and value of Shinsya in bonsai pottery and earning him the nickname “Machinao of Shinsya.”
          </p>
        </div>
      </section>

      <section id="seal" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-serif text-sm tracking-[0.16em] text-accent">SEAL SIGNATURE</p>
          <h2 className="mt-6 font-serif text-3xl tracking-[0.12em]">Seal Impressions</h2>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-primary/80">
            Seal impressions provide essential clues to identify a work’s era and series. Machinao’s pieces feature two primary seals—the character 町 (“Mach”) and the full name 町直 (“Machinao”). Early pieces occasionally bear the character 風 (“Kaze”).
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {[
              {
                src: "/images/落款町.jpg",
                title: "Mach Seal",
                description: "Most often seen on works from the 1970s. Gentle curves carry a quiet strength that is said to reflect Machinao’s straightforward character. We also base the site logo on this seal.",
              },
              {
                src: "/images/落款町直.jpg",
                title: "Machinao Seal",
                description: "Used from the mid to late periods. Its flowing, graceful script appears across a wide range of series, including Shinsya and sculptural works.",
              },
            ].map((item) => (
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
          <h2 className="mt-6 font-serif text-3xl tracking-[0.12em]">What Sets This Archive Apart</h2>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {[
              {
                title: "Bilingual Documentation",
                body: "We maintain both Japanese and English pages, striving to reach researchers and collectors worldwide across borders.",
              },
              {
                title: "Preserving Machinao’s History",
                body: "Our goal is to document Machinao’s footsteps from the pre-internet era without loss and pass them to future generations.",
              },
              {
                title: "A Place for Enthusiasts",
                body: "We hope this archive becomes a community where admirers and researchers around the world who cherish Machinao’s bonsai pots can deepen their connections.",
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
