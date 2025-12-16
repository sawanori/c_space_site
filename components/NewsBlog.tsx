"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainerVariant } from "@/lib/animations";

const newsItems = [
  {
    date: "2025.12.10",
    cat: "News",
    title: "年末年始休業のお知らせ",
    href: "#"
  },
  {
    date: "2025.11.24",
    cat: "Event",
    title: "「店舗デザイン展2025」に出展いたします",
    href: "#"
  },
  {
    date: "2025.10.15",
    cat: "News",
    title: "本社移転のお知らせ",
    href: "#"
  }
];

const blogItems = [
  {
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    cat: "Design Tips",
    title: "失敗しない店舗内装のポイントとは？プロが教える3つの極意",
    date: "2025.12.01",
    href: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    cat: "Works",
    title: "【施工事例解説】築40年のマンションが生まれ変わるまで",
    date: "2025.11.15",
    href: "#"
  }
];

export default function NewsBlog() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-[var(--color-gray-50)]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* News Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainerVariant}
          >
            <div className="flex items-end justify-between mb-10 border-b border-gray-200 pb-4">
              <div>
                <p className="text-[var(--color-gold)] font-bold tracking-widest uppercase mb-2 text-xs">Information</p>
                <h2 className="text-3xl font-bold text-[var(--color-navy)]">News</h2>
              </div>
              <Link href="#" className="group flex items-center gap-2 text-sm font-semibold text-[var(--color-gold-dark)] hover:text-[var(--color-navy)] transition-colors">
                <span>View All</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="space-y-4">
              {newsItems.map((item, i) => (
                <motion.div key={i} variants={fadeUpVariant}>
                  <Link href={item.href} className="group relative flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-5 px-4 rounded border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-400 font-mono tracking-wider">{item.date}</span>
                      <span className="inline-block px-3 py-1 bg-[var(--color-navy-light)] text-white text-[10px] uppercase font-bold tracking-wider rounded-full">
                        {item.cat}
                      </span>
                    </div>
                    <h3 className="flex-1 text-[var(--color-gray-700)] font-medium group-hover:text-[var(--color-navy)] transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <div className="hidden sm:block opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      <svg className="w-5 h-5 text-[var(--color-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Blog Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainerVariant}
          >
            <div className="flex items-end justify-between mb-10 border-b border-gray-200 pb-4">
              <div>
                <p className="text-[var(--color-gold)] font-bold tracking-widest uppercase mb-2 text-xs">Our Thoughts</p>
                <h2 className="text-3xl font-bold text-[var(--color-navy)]">Journal</h2>
              </div>
              <Link href="#" className="group flex items-center gap-2 text-sm font-semibold text-[var(--color-gold-dark)] hover:text-[var(--color-navy)] transition-colors">
                <span>View All</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="space-y-6">
              {blogItems.map((item, i) => (
                <motion.div key={i} variants={fadeUpVariant}>
                  <Link href={item.href} className="group flex flex-col sm:flex-row gap-6 items-start bg-white p-4 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="overflow-hidden rounded-lg w-full sm:w-[180px] aspect-[4/3] shrink-0">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url('${item.image}')` }}
                      />
                    </div>
                    <div className="flex-1 py-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-[10px] font-bold text-[var(--color-gold)] uppercase tracking-wider border border-[var(--color-gold)] px-2 py-0.5 rounded-sm">
                          {item.cat}
                        </span>
                        <span className="text-xs text-gray-400 font-mono tracking-wider">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-[var(--color-navy)] leading-snug group-hover:text-[var(--color-gold-dark)] transition-colors mb-3">
                        {item.title}
                      </h3>
                      <p className="inline-flex items-center text-xs text-gray-400 group-hover:text-[var(--color-navy)] transition-colors font-medium border-b border-gray-200 group-hover:border-[var(--color-navy)] pb-0.5">
                        Read More
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
