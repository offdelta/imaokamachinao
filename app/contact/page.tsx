export default function ContactPage() {
  return (
    <div className="bg-surface">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <p className="font-serif text-sm tracking-[0.16em] text-accent">CONTACT</p>
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
