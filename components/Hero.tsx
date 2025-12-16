"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainerVariant } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Ken Burns Effect */}
      {/* Background with Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2560&q=80"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-navy-dark)]/90 via-[var(--color-navy)]/50 to-[var(--color-navy-dark)]/90" />
        <div className="absolute inset-0 bg-[var(--color-navy)]/30 mix-blend-multiply" />
      </div>

      {/* Content */}
      <motion.div
        variants={staggerContainerVariant}
        initial="hidden"
        animate="visible"
        className="relative z-10 container-custom text-center px-4 pt-20"
      >
        <div className="max-w-5xl mx-auto">
          {/* Main Copy */}
          <div className="overflow-hidden mb-8">
            <motion.h1
              variants={fadeUpVariant}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-2xl"
            >
              想いをカタチに、<br />
              <span className="gold-gradient-text relative inline-block">
                空間をチカラに。
                {/* Subtle Glow behind text */}
                <span className="absolute inset-0 bg-[var(--color-gold)]/20 blur-2xl -z-10" />
              </span>
            </motion.h1>
          </div>

          {/* Sub Copy */}
          <motion.p
            variants={fadeUpVariant}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed tracking-wide font-light drop-shadow-md"
          >
            店舗・住宅のデザインから施工まで。<br className="hidden sm:block" />
            理想の空間を叶える、ワンストップ・ソリューション。
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUpVariant}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="#works"
              className="group w-full sm:w-auto relative px-10 py-4 bg-[var(--color-gold)] text-[var(--color-navy-dark)] font-bold text-lg rounded overflow-hidden shadow-[0_0_20px_rgba(196,169,98,0.4)] hover:shadow-[0_0_40px_rgba(196,169,98,0.6)] hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 w-full h-full bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                施工実績を見る
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            <Link
              href="#segmentation"
              className="group w-full sm:w-auto px-10 py-4 border border-white/30 bg-white/5 backdrop-blur-md text-white font-medium text-lg rounded hover:bg-white hover:text-[var(--color-navy)] transition-all duration-300 hover:shadow-lg"
            >
              事業内容について
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-[-15vh] sm:bottom-[-20vh] left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-400 font-mono tracking-widest uppercase">Scroll</span>
            <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white/50 to-transparent relative overflow-hidden">
              <motion.div
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-gold)] to-transparent"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
