"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainerVariant } from "@/lib/animations";

const features = [
  {
    title: "Construction Professional",
    jpTitle: "職人主体の「施工プロ」集団",
    desc: "私たちの本業は「工事」そのものです。\n商業施設から保育園、住宅までジャンルを問わず、\n自らの手で作り上げるからこそ、品質に責任を持てます。",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Trust & References",
    jpTitle: "紹介とリピートによる信頼",
    desc: "弊社には営業職がおりません。\n仕事のほとんどは、お客様からのご紹介やリピートです。\n「また頼みたい」と思わせる品質こそが、最大の営業です。",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    )
  },
  {
    title: "Diverse Challenges",
    jpTitle: "変化に対応する「挑戦心」",
    desc: "新築・改装にとどまらず、シェアハウス運営や\n飲食事業、清掃・メンテナンスまで。\n多角的な視点を持つからこそ、最適な提案が可能です。",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
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
