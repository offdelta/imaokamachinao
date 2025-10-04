import type { Metadata } from "next";
import Script from "next/script";
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

const title = "今岡町直公式アーカイブ｜町直鉢・盆栽鉢・辰砂作品";
const description =
  "陶芸家 今岡町直（町直）の町直鉢や盆栽鉢、辰砂・梅花皮など代表作を高解像度で記録する公式アーカイブサイト。";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "今岡町直",
    "町直",
    "町直鉢",
    "盆栽鉢",
    "盆栽",
    "辰砂",
    "梅花皮",
    "豆盆栽",
    "陶芸",
  ],
  openGraph: {
    title,
    description,
    type: "website",
  },
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YN5V33D1PV"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YN5V33D1PV');
          `}
        </Script>
        <PreventImageDownload />
        <Header />
        <main className="flex-1 pt-32 md:pt-36">{children}</main>
        <SupportRequestModal />
        <Footer />
      </body>
    </html>
  );
}
