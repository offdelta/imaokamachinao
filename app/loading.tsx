import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background text-primary">
      <Image
        src="/images/top/imaokamachinao-favicon.jpg"
        alt="今岡町直のスタンバイ画像"
        width={160}
        height={160}
        priority
      />
      <p className="font-serif text-sm tracking-[0.2em]">読み込み中…</p>
    </div>
  );
}
