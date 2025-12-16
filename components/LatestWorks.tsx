"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUpVariant } from "@/lib/animations";
import { cn } from "@/lib/utils";

const categories = ["All", "Commercial", "Residence", "Sharehouse", "Office", "Education"];

// Fully updated data with Staff Comments for storytelling
const works = [
  {
    id: 1,
    title: "CS.1新築工事(豊島区北大塚)",
    category: "Residence",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    desc: "新築工事 / RC造 地上5階 (住居+事務所) / 461㎡",
    staff_comment: "限られた敷地面積の中で、住居と事務所の動線を完全に分離し、プライバシーと機能性を両立させました。"
  },
  {
    id: 2,
    title: "なごみ歯科（戸越）",
    category: "Commercial",
    // Reliable placeholder
    image: "https://picsum.photos/seed/dental/800/600",
    desc: "改装工事 / 歯科医院 / 29.5坪",
    staff_comment: "患者様の不安を和らげるため、照明の色温度を調整し、木目を多用した温かみのある空間に仕上げています。"
  },
  {
    id: 3,
    title: "フレイアクリニック 上野院",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    desc: "新装工事 / 美容クリニック / 91.3坪",
    staff_comment: "高級感を演出するため、エントランスの大理石と間接照明のバランスに徹底的にこだわりました。"
  },
  {
    id: 4,
    title: "クーベルチュール北大塚Ⅱ",
    category: "Sharehouse",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    desc: "新装工事 / シェアハウス / 61坪",
    staff_comment: "入居者同士の自然な交流が生まれるよう、共用リビングのソファ配置やキッチンの動線を工夫しました。"
  },
  {
    id: 5,
    title: "GO!GO!WORLD（オフィス）",
    category: "Office",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
    desc: "新装工事 / オフィス / 138坪",
    staff_comment: "クリエイティブな発想が生まれるよう、壁面をホワイトボード化し、スタンディングミーティングスペースを設置。"
  },
  {
    id: 6,
    title: "まちのてらこや保育園",
    category: "Education",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80",
    desc: "改装工事 / 保育園 / 65.2坪",
    staff_comment: "子供たちの安全を最優先し、角のない家具デザインと、転倒しても痛くない床材を選定しました。"
  },
  {
    id: 7,
    title: "薪焼かけはし",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
    desc: "新装工事 / 飲食店 / 20.5坪",
    staff_comment: "薪火の揺らぎが客席から美しく見えるよう、オープンキッチンの高さとカウンターの距離感をミリ単位で調整。"
  },
  {
    id: 8,
    title: "戸建て住宅",
    category: "Residence",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    desc: "新築工事 / 戸建て住宅 / 25坪",
    staff_comment: "狭小地でも広がりを感じられるよう、吹き抜けとハイサイドライト（高窓）を効果的に配置しました。"
  },
  {
    id: 9,
    title: "クーベルチュール日本橋浜町",
    category: "Sharehouse",
    // Reliable placeholder
    image: "https://picsum.photos/seed/kitchen/800/600",
    desc: "新装工事 / シェアハウス / 138坪",
    staff_comment: "複数人が同時に料理を楽しめるよう、アイランドキッチンを2基配置し、動線が交錯しないよう配慮しました。"
  },
  {
    id: 10,
    title: "ランドリータイム 駒越",
    category: "Commercial",
    // Reliable placeholder
    image: "https://picsum.photos/seed/laundry/800/600",
    desc: "新装工事 / コインランドリー / 17.7坪",
    staff_comment: "女性一人でも入りやすいよう、外からの視認性を高めつつ、清潔感のある白と木目を基調にしました。"
  },
  {
    id: 11,
    title: "バンダレコードららぽーと新三郷店",
    category: "Commercial",
    // Reliable placeholder
    image: "https://picsum.photos/seed/record/800/600",
    desc: "新装工事 / CD･DVDショップ / 60坪",
    staff_comment: "大量の商品を見やすく陳列するため、什器の高さと通路幅のバランスを徹底的にシミュレーションしました。"
  },
  {
    id: 12,
    title: "グローバルキッズ後楽園本園",
    category: "Education",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    desc: "新装工事 / 保育園 / 合計170坪",
    staff_comment: "園舎全体を「大きな家」と捉え、年齢の異なる子供たちが自然と触れ合えるような開放的な空間構成です。"
  },
  {
    id: 13,
    title: "クーベルチュール日本橋本町",
    category: "Sharehouse",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&q=80",
    desc: "新装工事 / シェアハウス / 29坪",
    staff_comment: "個室のプライバシーを守りつつ、廊下や共有部で気配を感じられるような、程よい距離感を設計に落とし込みました。"
  },
  {
    id: 14,
    title: "麹町事務所",
    category: "Office",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
    desc: "改装工事 / 事務所 / 45坪",
    staff_comment: "来客エリアと執務エリアを明確にゾーニングし、セキュリティと開放感を両立させたオフィスデザインです。"
  },
  {
    id: 15,
    title: "レジデンストーキョー新小岩",
    category: "Residence",
    image: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=800&q=80",
    desc: "新築工事 / マンスリーマンション / 58坪",
    staff_comment: "短期滞在でも「我が家」のようにくつろげるよう、家具や照明の選定までトータルでコーディネートしました。"
  }
];

export default function LatestWorks() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredWorks = works.filter(
    (work) => activeCategory === "All" || work.category === activeCategory
  );

  return (
    <section id="works" className="section-padding bg-[var(--color-navy-dark)] text-white">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center md:text-left mb-8"
          >
            <p className="text-[var(--color-gold)] font-bold tracking-widest uppercase mb-4 text-sm">
              Construction Results
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              施工実績
            </h2>
            <div className="h-[2px] w-20 bg-[var(--color-gold)] mb-8 mx-auto md:mx-0" />

            <p className="text-lg font-medium text-white mb-2">
              創造性・柔軟性・技術力でお客様にお応えします。
            </p>
            <p className="text-gray-400 leading-relaxed max-w-3xl">
              創造性・柔軟性・技術力でお客様から求められている品質とスピードを追求し、
              材質・施工方法の提案により、コスト削減・工期短縮を実現します。
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "relative px-6 py-2 rounded-full text-sm font-medium transition-colors z-10",
                  activeCategory === cat ? "text-[var(--color-navy-dark)]" : "text-gray-400 hover:text-white"
                )}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[var(--color-gold)] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          <AnimatePresence>
            {filteredWorks.map((work) => (
              <motion.div
                layout
                key={work.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group w-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-4 cursor-pointer">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${work.image}')` }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-[var(--color-gold)]/20 transition-colors duration-300" />

                  {/* Hover Overlay with Staff Comment */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[var(--color-navy-dark)]/90 backdrop-blur-[2px] p-6 text-center">
                    <p className="text-[10px] text-[var(--color-gold)] font-bold uppercase tracking-widest mb-2">STAFF POINT</p>
                    <p className="text-sm text-white leading-relaxed font-medium mb-4">
                      {work.staff_comment}
                    </p>
                    <span className="px-4 py-1.5 border border-white text-white tracking-widest text-xs font-bold hover:bg-white hover:text-[var(--color-navy)] transition-colors">VIEW MORE</span>
                  </div>
                </div>

                {/* Info Below Image */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-[var(--color-gold)] uppercase tracking-wider border border-[var(--color-gold)] px-2 py-0.5 rounded-sm">
                      {work.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--color-gold)] transition-colors">{work.title}</h3>
                  <p className="text-sm text-gray-400 font-light border-l-2 border-gray-700 pl-3">
                    {work.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Details */}
        <div className="text-center mt-20">
          <button className="btn-outline border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-navy-dark)] min-w-[200px]">
            すべての実績を見る
          </button>
        </div>
      </div>
    </section>
  );
}
