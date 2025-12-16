"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy-dark)] text-white pt-20 pb-10">
      <div className="container-custom">
        {/* Top Section: CTA */}
        <div className="bg-[var(--color-navy)] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-20 shadow-2xl shadow-black/20">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              空間づくりに関するご相談・お見積り
            </h2>
            <p className="text-gray-300">
              専門スタッフが丁寧に対応いたします。お気軽にお問い合わせください。
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a
              href="tel:0367776563"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-[var(--color-navy)] font-bold rounded hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              03-6777-6563
            </a>
            <Link
              href="#contact"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-gold)] text-[var(--color-navy-dark)] font-bold rounded hover:bg-[var(--color-gold-dark)] hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Webからのお問い合わせ
            </Link>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-16 mb-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold tracking-widest mb-6">C-SPACE</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              株式会社シー・スペース<br />
              〒170-0004<br />
              東京都豊島区北大塚3-32-4<br />
              北大塚OBCビル2階
            </p>
          </div>

          <div>
            <h4 className="text-[var(--color-gold)] font-bold text-sm uppercase tracking-wider mb-6">Service</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-white transition-colors">店舗デザイン・施工</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">住宅リフォーム</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">シェアハウス運営</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">建物メンテナンス</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--color-gold)] font-bold text-sm uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-white transition-colors">私たちについて</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">施工実績</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">お知らせ</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">採用情報</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--color-gold)] font-bold text-sm uppercase tracking-wider mb-6">Other</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-white transition-colors">プライバシーポリシー</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">サイトマップ</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">お問い合わせ</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} C-SPACE Co.,Ltd. All Rights Reserved.</p>
          <div className="flex gap-4">
            {/* Social Icons Placeholder */}
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-[var(--color-navy)] transition-colors cursor-pointer">
              <span className="font-bold">Ig</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-[var(--color-navy)] transition-colors cursor-pointer">
              <span className="font-bold">Fb</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
