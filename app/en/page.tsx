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
            <p className="max-w-xl font-serif text-base text-muted md:text-lg">
              This official website is operated by the Imaoka family to share the works in their care and preserve a lasting record of Machinao Imaoka’s artistry. Explore his creative universe through these treasured archival images.
            </p>
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
                href: "/en/gallery",
                title: "Shinsya (Cinnabar Red)",
                meta: "Hallmark pieces glowing in crimson",
                body: "By expertly guiding kiln-transformation (yohen), Imaoka blended vivid crimson with purples and indigo tones. This kiln-varied Shinsya glaze became synonymous with his name.",
                image: "/images/辰砂踊りの図その1.jpg",
                alt: "Shinsya vase, Dancing Figure No.1",
              },
              {
                href: "/en/gallery",
                title: "Kairagi Texture",
                meta: "Textures that tell a story",
                body: "Another signature technique is the kairagi glaze. Leveraging the different shrinkage rates of clay and glaze, he produced dramatic crackled surfaces reminiscent of plum bark—an achievement that demands great skill.",
                image: "/images/梅の木.jpg",
                alt: "Kairagi plum tree pot",
              },
              {
                href: "/en/gallery",
                title: "Celadon Glazes",
                meta: "A tranquil world of blue",
                body: "His celadon work is noted for its dense, almost creamy depth of color. Thick, tactile glazes and subtle kiln variations reveal a mastery on par with his celebrated Shinsya pieces.",
                image: "/images/クローム青磁キツネの図.jpg",
                alt: "Chrome celadon fox motif pot",
              },
              {
                href: "/en/gallery",
                title: "Large Craquelure Glaze",
                meta: "Patterns etched into the surface",
                body: "Harnessing the shrinkage difference between body and glaze, he created intricate crackle patterns. In Imaoka’s works these lines become deliberate designs, meticulously controlled rather than accidental.",
                image: "/images/貫入撫肩鉢.jpg",
                alt: "Large craquelure shoulder bowl",
              },
              {
                href: "/en/gallery",
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
                body: "Gold-splashed finishes, hidasuki firing marks, copper-set glazes, and expressive underglaze copper marbling—each piece marries tradition with innovation, calculated chemistry with instinctive artistry.",
                image: "/images/茄子型極小鉢.jpg",
                alt: "Eggplant-shaped micro pot",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-3xl bg-surface shadow-card transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div
                  className="h-56 w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                  aria-label={item.alt}
                />
                <div className="space-y-3 px-6 py-6">
                  <h3 className="font-serif text-xl tracking-[0.06em] group-hover:text-accent">{item.title}</h3>
                  <p className="text-sm text-muted">{item.meta}</p>
                  <p className="text-sm leading-relaxed text-primary/80">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-serif text-sm tracking-[0.16em] text-accent">ABOUT</p>
          <h2 className="mt-6 font-serif text-3xl tracking-[0.12em]">About Machinao Imaoka</h2>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-primary/80">
            This site is officially maintained by the family of ceramic artist Machinao Imaoka (1935-2001) to preserve his work and legacy for future generations. Below is a concise overview of his life and creative philosophy.
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
            Achievements of Machinao Imaoka: Mastering Shinsya Red and Passing Down Technique
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-primary/80">
            Machinao Imaoka (1925-2001) was renowned in the shohin bonsai world for producing exquisite pots through exceptional glaze techniques. Among his greatest accomplishments was mastering the notoriously difficult Shinsya glaze, achieving stable hues that range from fiery scarlet to deep reddish purple.
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
            Imaoka went beyond a single shade, orchestrating kiln variations so that purples and indigos mingle with the red surface. The resulting kiln-varied Shinsya finish embodies the complex, layered beauty that defined his work.
          </p>
          <h3 className="mt-10 font-serif text-2xl tracking-[0.1em]">Elevating Artistic Value</h3>
          <p className="mt-4 text-sm leading-relaxed text-primary/80">
            His Shinsya pots transcend the role of mere containers, gaining status as art objects in their own right. They draw out the beauty of bonsai while captivating viewers even when displayed alone.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-primary/80">
            Through his innovations, the expressive range and value of Shinsya glazes in bonsai pottery expanded dramatically, securing his reputation as Machinao of Shinsya.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-primary/80">
            Devoting years of research and experimentation, Imaoka thoroughly explored glaze formulas and firing methods. He transformed what had been considered accidental success into a reproducible, high-level technique for producing brilliant Shinsya reds.
          </p>
        </div>
      </section>

      <section id="seal" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-serif text-sm tracking-[0.16em] text-accent">SEAL SIGNATURE</p>
          <h2 className="mt-6 font-serif text-3xl tracking-[0.12em]">Seal Impressions</h2>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-primary/80">
            Seal marks provide essential clues to a work’s era and series. Imaoka’s pieces feature two main seals—the character 町 (Mach) and the full name 町直 (Machinao). Early works occasionally bear the character 風.
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {[
              {
                src: "/images/落款町.jpg",
                title: "Mach Seal",
                description: "A round seal with gentle curves that still conveys strength, most often seen on works from the 1970s.",
              },
              {
                src: "/images/落款町直.jpg",
                title: "Machinao Seal",
                description: "A square frame containing finely carved characters. It appears across a wide range of series, including Shinsya and sculptural pieces.",
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
                body: "We are steadily preparing explanations in both Japanese and English to share accurate information with researchers and collectors around the world.",
              },
              {
                title: "Preserving the Artist’s History",
                body: "Our mission is to record the footsteps and achievements of an artist who worked before the internet age and ensure that nothing is lost to time.",
              },
              {
                title: "A Place for Enthusiasts",
                body: "We hope this archive becomes a community where admirers and researchers worldwide can exchange insights and celebrate Imaoka’s artistry.",
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
