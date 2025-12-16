import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "株式会社シー・スペース | 店舗・住宅の設計・デザイン・施工",
  description:
    "店舗・住宅のデザインから施工まで。理想の空間を叶える、ワンストップ・ソリューション。シェアハウス「COUVERTURE」の企画・運営も行っています。",
  keywords: [
    "店舗設計",
    "店舗デザイン",
    "店舗施工",
    "住宅リフォーム",
    "リノベーション",
    "シェアハウス",
    "内装工事",
    "東京",
  ],
  openGraph: {
    title: "株式会社シー・スペース | 店舗・住宅の設計・デザイン・施工",
    description:
      "店舗・住宅のデザインから施工まで。理想の空間を叶える、ワンストップ・ソリューション。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
