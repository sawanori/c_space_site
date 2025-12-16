"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainerVariant } from "@/lib/animations";

const cards = [
  {
    target: "B2B / For Owners",
    title: "店舗デザイン・施工",
    description: "繁盛店を創るための動線設計とデザイン。\n予算に合わせた最適なプランをご提案。",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    href: "#shop",
    cta_label: "店舗内装の概算見積もりシミュレーション",
    cta_sub: "最短30秒で完了"
  },
  {
    target: "B2C / For Living",
    title: "住宅リノベーション",
    description: "ライフスタイルに合わせた理想の住まい。\n一貫体制だからできる納得の品質。",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    href: "#home",
    cta_label: "リノベ相談会・資料請求はこちら",
    cta_sub: "無料プラン作成も受付中"
  },
  {
    target: "Asset / Management",
    title: "シェアハウス運営",
    description: "新しいつながりを生む\n安心・安全なシェアハウス「COUVERTURE」",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    href: "#couverture",
    cta_label: "運営委託・空室対策のご相談",
    cta_sub: "オーナー様向け"
  },
];

export default function Segmentation() {
  return (
    <section id="segmentation" className="section-padding bg-[var(--color-gray-50)]">
      <div className="container-custom">
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.p variants={fadeUpVariant} className="text-[var(--color-gold-dark)] font-bold tracking-widest uppercase mb-4 text-sm">
            Our Business
          </motion.p>
          <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-6">
            お客様の目的に合わせた<br className="sm:hidden" />空間づくり
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cards.map((card, index) => (
            <motion.div key={index} variants={fadeUpVariant} className="group flex flex-col h-full">
              {/* Main Card Link */}
              <Link href={card.href} className="block relative h-[400px] w-full overflow-hidden rounded-t-sm">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${card.image}')` }}
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-dark)] via-[var(--color-navy)]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-[var(--color-navy)]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <span className="inline-block px-3 py-1 bg-[var(--color-gold)] text-[var(--color-navy-dark)] text-xs font-bold tracking-wider mb-4">
                      {card.target}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-gray-200 text-sm leading-relaxed mb-6 border-l-2 border-[var(--color-gold)] pl-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {card.description}
                    </p>
                    <div className="flex items-center text-[var(--color-gold)] font-semibold text-sm tracking-widest group-hover:text-white transition-colors">
                      MORE DETAILS
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Secondary CTA Button (Micro-Conversion) */}
              <div className="bg-white border-x border-b border-gray-100 p-6 rounded-b-sm flex-1 flex flex-col justify-center">
                <Link href={card.href} className="block w-full py-3 px-4 rounded border border-[var(--color-navy)] text-[var(--color-navy)] text-sm font-bold text-center hover:bg-[var(--color-navy)] hover:text-white transition-all duration-300">
                  {card.cta_label}
                </Link>
                <p className="text-center text-xs text-gray-400 mt-2 font-medium">
                  {card.cta_sub}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Sub Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            href="#maintenance"
            className="group inline-flex items-center text-[var(--color-gray-500)] hover:text-[var(--color-navy)] transition-colors text-sm font-medium"
          >
            <span className="border-b border-transparent group-hover:border-[var(--color-navy)] transition-colors pb-0.5">
              建物メンテナンス・大規模修繕はこちら
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
