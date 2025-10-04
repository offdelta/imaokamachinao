import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ｜町直鉢・盆栽鉢の資料提供",
  description:
    "今岡町直（町直）の町直鉢や辰砂・梅花皮など盆栽鉢に関する資料提供、掲載依頼はこちらから。高解像度画像や来歴情報の共有をお待ちしています。",
  keywords: [
    "今岡町直",
    "町直",
    "町直鉢",
    "盆栽鉢",
    "辰砂",
    "梅花皮",
    "お問い合わせ",
  ],
};

export default function ContactPage() {
  return (
    <div className="bg-surface">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <p className="font-serif text-sm tracking-[0.16em] text-accent">CONTACT</p>
        <h1 className="mt-6 font-serif text-3xl tracking-[0.12em]">お問い合わせ</h1>
        <section className="mt-8 rounded-3xl border border-primary/10 bg-white/80 p-6 text-sm leading-relaxed text-primary/80 shadow-card">
          <p>
            大変恐縮ですが、画像ファイルを送信してくださる場合には直接、
            <span className="font-mono text-[0.85rem] text-primary">imaoka.machinao.official@gmail.com</span>
            宛にお名前や詳細内容と共に送ってくださいますようお願い申し上げます。また、各SNSアカウントからも受け付けております。
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="mailto:imaoka.machinao.official@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-accent"
            >
              メールを送る
            </a>
            <a
              href="https://x.com/machinao_imaoka?s=11"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-[0.65rem] uppercase tracking-[0.24em] text-primary transition hover:border-accent/50 hover:bg-accent/5 hover:text-accent"
            >
              <Image
                src="/images/logo-icons/x-logo.jpg"
                alt="X ロゴ"
                width={16}
                height={16}
                className="h-4 w-4 object-contain"
              />
              <span>@machinao_imaoka</span>
            </a>
            <a
              href="https://www.instagram.com/imaoka.machinao.official/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-[0.65rem] uppercase tracking-[0.24em] text-primary transition hover:border-accent/50 hover:bg-accent/5 hover:text-accent"
            >
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                width="16"
                height="16"
                className="h-4 w-4 text-primary"
                fill="currentColor"
              >
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zm6.25-3.75a.75.75 0 1 1-.75.75.75.75 0 0 1 .75-.75z" />
              </svg>
              <span>@imaoka.machinao.official</span>
            </a>
          </div>
        </section>
        <div className="mt-10">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScBjwwTYICTTGP-2csQE1qU-4c2T9bc2Z7fTmFEMNYWqevT0g/viewform?embedded=true"
            width="100%"
            height="1200"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >読み込んでいます…</iframe>
        </div>

        <section className="mt-16 space-y-4 text-sm leading-relaxed text-primary/80">
          <h2 className="font-serif text-xl tracking-[0.06em]">運営ポリシー</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>営利目的の無断転載・二次利用を固く禁じます。</li>
            <li>学術目的での利用をご希望の場合は事前にお問い合わせください。</li>
            <li>ご提供いただいた資料は、確認のうえアーカイブに反映いたします。</li>
            <li>データはクラウドおよび外部ストレージにバックアップし、長期保存に努めます。</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
