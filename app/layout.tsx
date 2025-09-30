import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PreventImageDownload } from "@/components/PreventImageDownload";
import { SupportRequestModal } from "@/components/SupportRequestModal";
import "./globals.css";

const sans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "陶芸家 今岡町直 創作の軌跡",
  description:
    "今岡町直の作品を高解像度で記録し、後世に受け渡す公式アーカイブサイト。",
  icons: {
    icon: [
      {
        url: "/images/top/imaokamachinao-favicon.jpg",
        type: "image/jpeg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${sans.variable} ${serif.variable}`}>
      <body className="flex min-h-screen flex-col bg-background font-sans text-primary">
        <PreventImageDownload />
        <Header />
        <main className="flex-1 pt-32 md:pt-36">{children}</main>
        <SupportRequestModal />
        <Footer />
      </body>
    </html>
  );
}
