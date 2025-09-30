"use client";

import { usePathname } from "next/navigation";

const footerText = {
  ja: {
    notice: "本サイトは今岡町直のご遺族が公式に管理・運営しています。画像の使用などにつきましてはお問い合わせからご連絡ください。",
    rights: "© 陶芸家 今岡町直 創作の軌跡 / Photography courtesy of family and collaborators.",
  },
  en: {
    notice:
      "This site is officially managed and maintained by the family of Machinao Imaoka. For image usage requests, please reach out via the contact page.",
    rights: "© Machinao Imaoka Official Archive / Photography courtesy of family and collaborators.",
  },
};

export function Footer() {
  const pathname = usePathname() || "/";
  const locale = pathname.startsWith("/en") ? "en" : "ja";
  const content = footerText[locale];

  return (
    <footer className="bg-[#22201d] text-white/90">
      <div className="mx-auto max-w-6xl space-y-2 px-6 py-10 text-sm">
        <p>{content.notice}</p>
        <p className="text-white/60">{content.rights}</p>
      </div>
    </footer>
  );
}
