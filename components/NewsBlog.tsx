"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainerVariant } from "@/lib/animations";

const newsItems = [
  { date: "2025.11.28", cat: "News", title: "年末年始の営業についてのお知らせ。", href: "#" },
  { date: "2025.04.07", cat: "Corporate", title: "株式会社TASKの株式を取得しました。", href: "#" },
  { date: "2023.06.06", cat: "Works", title: "施工事例「CS.1新築工事」を更新しました。", href: "#" },
  { date: "2022.10.20", cat: "Works", title: "施工事例「なごみ歯科(戸越)」を更新しました。", href: "#" },
  { date: "2022.10.11", cat: "Works", title: "施工事例「フレイアクリニック 上野院」を更新しました。", href: "#" },
  { date: "2022.10.03", cat: "Works", title: "施工事例「ランドリータイム 駒越」を更新しました。", href: "#" },
  { date: "2022.09.20", cat: "Works", title: "施工事例「なごみ歯科 広尾」を更新しました。", href: "#" },
  { date: "2022.09.12", cat: "Works", title: "施工事例「薪焼かけはし」を更新しました。", href: "#" },
  { date: "2022.09.05", cat: "Works", title: "施工事例「まちのてらこや保育園」を更新しました。", href: "#" },
  { date: "2021.06.01", cat: "Info", title: "これまでの志木倉庫を廃止し、新たな拠点【志木ベース】が稼働を開始しました。", href: "#" },
  { date: "2020.09.18", cat: "Works", title: "ビフォーアフター「W様邸マンションリフォーム」を追加しました。", href: "#" },
  { date: "2019.09.06", cat: "Works", title: "施工事例「GO!GO!WORLD（オフィス）」「戸建て住宅」を更新しました。", href: "#" },
  { date: "2019.07.18", cat: "Important", title: "【★重要★】電話番号・FAX番号が変更になりました。", href: "#" },
  { date: "2017.12.18", cat: "Corporate", title: "ベトナム支社【シー・スペース　ベトナム】を設立しました", href: "#" }
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
    <section className="section-padding bg-[var(--color-gray-50)]">
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
              <h2 className="text-3xl font-bold text-[var(--color-navy)]">News</h2>
              <Link href="#" className="text-sm font-semibold text-[var(--color-gold-dark)] hover:text-[var(--color-navy)] transition-colors">
                一覧を見る
              </Link>
            </div>

            {/* Scrollable News Container */}
            <div className="max-h-[500px] overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-[var(--color-gray-300)] scrollbar-track-transparent hover:scrollbar-thumb-[var(--color-gold)]">
              {newsItems.map((item, i) => (
                <motion.div key={i} variants={fadeUpVariant}>
                  <Link href={item.href} className="group flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 py-4 border-b border-gray-100 hover:bg-white px-4 transition-colors rounded">
                    <span className="text-sm text-gray-400 font-mono shrink-0 mt-0.5">{item.date}</span>
                    <span className={`inline-block shrink-0 px-2 py-1 text-white text-[10px] uppercase font-bold tracking-wider rounded-sm mt-0.5 ${item.cat === 'Important' ? 'bg-red-500' :
                        item.cat === 'Corporate' ? 'bg-[var(--color-navy-light)]' :
                          item.cat === 'Works' ? 'bg-[var(--color-gold)]' :
                            'bg-gray-400'
                      }`}>
                      {item.cat}
                    </span>
                    <h3 className="flex-1 text-[var(--color-gray-700)] font-medium group-hover:text-[var(--color-gold-dark)] transition-colors leading-relaxed">
                      {item.title}
                    </h3>
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
              <h2 className="text-3xl font-bold text-[var(--color-navy)]">Journal</h2>
              <Link href="#" className="text-sm font-semibold text-[var(--color-gold-dark)] hover:text-[var(--color-navy)] transition-colors">
                ブログ一覧
              </Link>
            </div>
            <div className="space-y-8">
              {blogItems.map((item, i) => (
                <motion.div key={i} variants={fadeUpVariant}>
                  <Link href={item.href} className="group flex gap-6 items-start">
                    <div className="overflow-hidden rounded-lg w-1/3 aspect-video shrink-0">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url('${item.image}')` }}
                      />
                    </div>
                    <div className="flex-1 py-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold text-[var(--color-gold)] uppercase tracking-wider">
                          {item.cat}
                        </span>
                        <span className="text-xs text-gray-400 font-mono">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-[var(--color-navy)] leading-snug group-hover:text-[var(--color-navy-light)] transition-colors mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[var(--color-gold-dark)] font-medium underline decoration-transparent group-hover:decoration-current transition-all">
                        この記事を読む
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
