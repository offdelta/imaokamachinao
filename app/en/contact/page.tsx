export default function ContactPage() {
  return (
    <div className="bg-surface">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <p className="font-serif text-sm tracking-[0.16em] text-accent">CONTACT</p>
        <div className="mt-10">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfM-7vV_SkkIKtM7ximIRHgAMh_lhNfwhgqXjYNnwglN_iVKg/viewform?embedded=true"
            width="640"
            height="1149"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >読み込んでいます…</iframe>
        </div>

        <section className="mt-16 space-y-4 text-sm leading-relaxed text-primary/80">
          <h2 className="font-serif text-xl tracking-[0.06em]">Usage Policy</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Unauthorized reproduction or commercial redistribution is strictly prohibited.</li>
            <li>Please contact us in advance if you wish to use the materials for academic purposes.</li>
            <li>Submitted resources will be reviewed and reflected in the archive where appropriate.</li>
            <li>Digital assets are backed up in the cloud and on external storage for long-term preservation.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
