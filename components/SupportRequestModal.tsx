"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

const copy = {
  ja: {
    button: "お願い",
    title: "お願い",
    body: [
      "この度は、今岡町直の作品世界に触れていただき、誠にありがとうございます。",
      "このサイトは、町直が遺した作品を公開し、彼が生涯を捧げた創作の記録を後世に残したいという想いから立ち上げました。",
      "生前、町直が心を込めて作り上げた作品の多くは、頒布会などを通じて皆様の暮らしの中へと旅立っていき、私共の手元にはそのごく一部の作品しか遺っておりません。皆様のお手元で今も大切にされている鉢の一つひとつもまた、その創作活動を物語る上で欠かすことのできない大切な記録であると認識しております。",
      "そこで、皆様にお願いがございます。 もし、お手元に町直鉢をお持ちの方がいらっしゃいましたら、そのお写真を本サイト管理者アドレス（imaoka.machinao.official@gmail.com）までお寄せいただけないでしょうか。",
      "お寄せいただいた作品は、このウェブサイトや公式インスタグラムでご紹介させていただき、町直の創作世界の全貌を伝えるためのデジタルアーカイブとして、皆様と共に育てていきたいと願っております。町直の作品を愛してくださった皆様とのご縁を、このような形で繋いでいけますことを心より願っております。",
    ],
    contact: "メールを送信",
  },
  en: {
    button: "Get Involved!",
    title: "A Request",
    body: [
      "Thank you sincerely for spending time with the creative world of Machinao Imaoka.",
      "We launched this site so that the works Machinao left behind—and the creative life to which he devoted himself—can be shared and preserved for future generations.",
      "Many of his carefully crafted pieces left our family through exhibitions and sales, and only a small portion remains with us today. We believe that every pot still cherished in your care is an indispensable part of documenting his life’s work.",
      "If you have one of Machinao’s bonsai pots, we would be deeply grateful if you could email photos to the archive team at imaoka.machinao.official@gmail.com.",
      "With your permission, we would like to feature the pieces you share on this website and on our official Instagram, growing this digital archive together so that Machinao’s creative universe can be passed forward. We hope to stay connected with everyone who has treasured his work.",
    ],
    contact: "Send an Email",
  },
};

export function SupportRequestModal() {
  const pathname = usePathname() || "/";
  const locale = pathname.startsWith("/en") ? "en" : "ja";
  const [open, setOpen] = useState(false);
  const text = copy[locale];
  const contactHref = useMemo(
    () => "mailto:imaoka.machinao.official@gmail.com",
    []
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed right-4 top-4 z-[60] rounded-full bg-primary px-6 py-3 text-sm font-semibold tracking-[0.2em] text-white shadow-lg transition hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent md:bottom-8 md:right-8 md:top-auto animate-bob-color"
      >
        {text.button}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 px-4 py-6 sm:px-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-white p-6 text-primary shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-full bg-black/5 p-2 text-xs uppercase tracking-[0.2em] text-primary/60 transition hover:bg-black/10"
              aria-label="Close"
            >
              ×
            </button>
            <div className="space-y-4">
              <h2 className="font-serif text-2xl tracking-[0.12em] text-primary">{text.title}</h2>
              {text.body.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-relaxed text-primary/80">
                  {paragraph}
                </p>
              ))}
              <div className="pt-2">
                <a
                  href={contactHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary px-5 py-2 text-xs uppercase tracking-[0.24em] text-primary transition hover:border-accent hover:text-accent"
                  onClick={() => setOpen(false)}
                >
                  {text.contact}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
