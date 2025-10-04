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
        <p className="mt-4 text-sm leading-relaxed text-primary/80">
          町直鉢や辰砂・梅花皮の作品画像、掲載情報、来歴の共有については下記メールアドレスまでご連絡ください。盆栽鉢コレクションの最新情報をお待ちしております。
        </p>
        <section className="mt-8 rounded-3xl border border-primary/10 bg-white/80 p-6 text-sm leading-relaxed text-primary/80 shadow-card">
          <p>
            大変恐縮ですが、画像ファイルを送信してくださる場合には直接、
            <span className="font-mono text-[0.85rem] text-primary">imaoka.machinao.official@gmail.com</span>
            宛にお名前や詳細内容と共に送ってくださいますようお願い申し上げます。
          </p>
          <div className="mt-6">
            <a
              href="mailto:imaoka.machinao.official@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-accent"
            >
              メールを送る
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
