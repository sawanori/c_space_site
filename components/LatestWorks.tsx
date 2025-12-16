"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUpVariant } from "@/lib/animations";
import { cn } from "@/lib/utils";

const categories = ["All", "Shop", "Residence", "Office"];

const works = [
  {
    id: 1,
    title: "Minato Cafe & Bar",
    category: "Shop",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
    desc: "港区 / カフェ・バー新装工事"
  },
  {
    id: 2,
    title: "Aoyama Residence",
    category: "Residence",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    desc: "港区 / マンションリノベーション"
  },
  {
    id: 3,
    title: "Ebisu Office",
    category: "Office",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
    desc: "渋谷区 / オフィス内装工事"
  },
  {
    id: 4,
    title: "Azabu Salon",
    category: "Shop",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    desc: "港区 / 美容室改装工事"
  },
  {
    id: 5,
    title: "Setagaya House",
    category: "Residence",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80",
    desc: "世田谷区 / 戸建て新築"
  },
  {
    id: 6,
    title: "Meguro Dining",
    category: "Shop",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    desc: "目黒区 / 飲食店デザイン"
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <p className="text-[var(--color-gold)] font-bold tracking-widest uppercase mb-4 text-sm">
              Latest Works
            </p>
            <h2 className="text-3xl md:text-5xl font-bold">最新の施工事例</h2>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
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
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredWorks.map((work) => (
              <motion.div
                layout
                key={work.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${work.image}')` }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

                  {/* Overlay Info */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="self-end px-3 py-1 bg-[var(--color-gold)] text-[var(--color-navy-dark)] text-xs font-bold uppercase tracking-wider">
                      {work.category}
                    </span>
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-1">{work.title}</h3>
                      <p className="text-sm text-gray-200">{work.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Details */}
        <div className="text-center mt-16">
          <button className="btn-outline border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-navy-dark)]">
            すべての実績を見る
          </button>
        </div>
      </div>
    </section>
  );
}
