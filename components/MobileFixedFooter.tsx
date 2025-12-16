"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export default function MobileFixedFooter() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      {/* Footer Container with Glassmorphism */}
      <div className="glass-dark border-t border-white/10 px-4 py-3 flex items-center justify-between gap-4">

        {/* Phone Button */}
        <a
          href="tel:0367776563"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 rounded bg-[var(--color-navy-light)] text-white/90 active:scale-95 transition-all"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-[10px] font-medium tracking-wide">電話で相談</span>
        </a>

        {/* Web Contact Button */}
        <Link
          href="#contact"
          className="flex-[1.5] flex flex-col items-center justify-center gap-1 py-3 rounded bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-dark)] text-[var(--color-navy-dark)] font-bold shadow-lg shadow-gold/20 active:scale-95 transition-all"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="text-[10px] tracking-wide">Webでお問い合わせ</span>
        </Link>
      </div>
    </div>
  );
}
