"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainerVariant } from "@/lib/animations";

const features = [
  {
    title: "One-Stop Service",
    jpTitle: "完全一貫体制",
    desc: "設計から施工まで自社完結。\n中間マージンをカットし、伝達漏れのない\n高精度のクリエイティブを実現します。",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Proposal Power",
    jpTitle: "提案力と実装力",
    desc: "多種多様な業態での豊富な実績。\nお客様の「ぼんやりしたイメージ」を\n具体的な機能美として具現化します。",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "Total Support",
    jpTitle: "運営・管理サポート",
    desc: "作って終わりではありません。\n引き渡し後のメンテナンスや運営管理まで\n建物のライフサイクルを支えます。",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

export default function WhyUs() {
  return (
    <section id="company" className="section-padding bg-[var(--color-gray-50)] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[var(--color-gold)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[var(--color-navy)]/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUpVariant} className="text-[var(--color-gold-dark)] font-bold tracking-widest uppercase mb-4 text-sm">
            Why C-SPACE
          </motion.p>
          <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl font-bold text-[var(--color-navy)]">
            私たちが選ばれる理由
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariant}
              className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Gold Accents */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex flex-col items-center text-center">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-[var(--color-gold)]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-gray-50)] text-[var(--color-gold-dark)] group-hover:bg-[var(--color-navy)] group-hover:text-[var(--color-gold)] transition-colors duration-500">
                    {feature.icon}
                  </div>
                </div>

                <h3 className="text-[var(--color-gold-dark)] font-bold tracking-widest text-xs uppercase mb-3">
                  {feature.title}
                </h3>
                <h4 className="text-xl md:text-2xl font-bold text-[var(--color-navy)] mb-6 group-hover:text-[var(--color-navy-light)] transition-colors">
                  {feature.jpTitle}
                </h4>
                <p className="text-gray-500 leading-loose text-sm whitespace-pre-line group-hover:text-gray-600 transition-colors">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
