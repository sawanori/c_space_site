"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUpVariant } from "@/lib/animations";
import { cn } from "@/lib/utils";

const categories = ["All", "Commercial", "Residence", "Sharehouse", "Office", "Education"];

// Updated with verified high-stability Unsplash images
const works = [
  {
    id: 1,
    title: "CS.1新築工事(豊島区北大塚)",
    category: "Residence",
    // Modern concrete architecture
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    desc: "新築工事 / RC造 地上5階 (住居+事務所) / 461㎡"
  },
  {
    id: 2,
    title: "なごみ歯科（戸越）",
    category: "Commercial",
    // Reliable placeholder for Dental
    image: "https://picsum.photos/seed/dental/800/600",
    desc: "改装工事 / 歯科医院 / 29.5坪"
  },
  {
    id: 3,
    title: "フレイアクリニック 上野院",
    category: "Commercial",
    // High-end clinic reception
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    desc: "新装工事 / 美容クリニック / 91.3坪"
  },
  {
    id: 4,
    title: "クーベルチュール北大塚Ⅱ",
    category: "Sharehouse",
    // Cozy warm lounge
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    desc: "新装工事 / シェアハウス / 61坪"
  },
  {
    id: 5,
    title: "GO!GO!WORLD（オフィス）",
    category: "Office",
    // Modern creative office
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
    desc: "新装工事 / オフィス / 138坪"
  },
  {
    id: 6,
    title: "まちのてらこや保育園",
    category: "Education",
    // Bright classroom/nursery
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80",
    desc: "改装工事 / 保育園 / 65.2坪"
  },
  {
    id: 7,
    title: "薪焼かけはし",
    category: "Commercial",
    // Moody upscale dining
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
    desc: "新装工事 / 飲食店 / 20.5坪"
  },
  {
    id: 8,
    title: "戸建て住宅",
    category: "Residence",
    // Modern minimalist home interior
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    desc: "新築工事 / 戸建て住宅 / 25坪"
  },
  {
    id: 9,
    title: "クーベルチュール日本橋浜町",
    category: "Sharehouse",
    // Reliable placeholder for Kitchen
    image: "https://picsum.photos/seed/kitchen/800/600",
    desc: "新装工事 / シェアハウス / 138坪"
  },
  {
    id: 10,
    title: "ランドリータイム 駒越",
    category: "Commercial",
    // Reliable placeholder for Laundry
    image: "https://picsum.photos/seed/laundry/800/600",
    desc: "新装工事 / コインランドリー / 17.7坪"
  },
  {
    id: 11,
    title: "バンダレコードららぽーと新三郷店",
    category: "Commercial",
    // Reliable placeholder for Record Store
    image: "https://picsum.photos/seed/record/800/600",
    desc: "新装工事 / CD･DVDショップ / 60坪"
  },
  {
    id: 12,
    title: "グローバルキッズ後楽園本園",
    category: "Education",
    // Wide open wooden floor space
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    desc: "新装工事 / 保育園 / 合計170坪"
  },
  {
    id: 13,
    title: "クーベルチュール日本橋本町",
    category: "Sharehouse",
    // Comfortable reading nook
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&q=80",
    desc: "新装工事 / シェアハウス / 29坪"
  },
  {
    id: 14,
    title: "麹町事務所",
    category: "Office",
    // Glass meeting room
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
    desc: "改装工事 / 事務所 / 45坪"
  },
  {
    id: 15,
    title: "レジデンストーキョー新小岩",
    category: "Residence",
    // Modern apartment corridor
    image: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=800&q=80",
    desc: "新築工事 / マンスリーマンション / 58坪"
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

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[var(--color-navy-dark)]/60 backdrop-blur-[2px]">
                    <span className="px-6 py-2 border border-white text-white tracking-widest text-sm font-bold">VIEW MORE</span>
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
