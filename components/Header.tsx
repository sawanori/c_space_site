"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "事業紹介", href: "#segmentation" },
  { label: "施工実績", href: "#works" },
  { label: "COUVERTURE", href: "#couverture" },
  { label: "会社概要", href: "#company" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "glass text-[var(--color-navy)] py-3 shadow-lg"
          : "bg-transparent text-white py-6"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50">
          <h1 className={cn(
            "text-2xl font-bold tracking-widest transition-colors",
            isScrolled ? "text-[var(--color-navy)]" : "text-white"
          )}>
            C-SPACE
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative text-sm font-medium tracking-wide"
            >
              {item.label}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--color-gold)] transition-all duration-300 group-hover:w-full",
                isScrolled ? "bg-[var(--color-gold)]" : "bg-white"
              )} />
            </Link>
          ))}

          <Link
            href="#contact"
            className={cn(
              "ml-4 px-6 py-2.5 rounded text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105",
              isScrolled
                ? "bg-[var(--color-navy)] text-white hover:bg-[var(--color-navy-dark)]"
                : "bg-white text-[var(--color-navy)] hover:bg-[var(--color-gold)] hover:text-white"
            )}
          >
            お問い合わせ
          </Link>
        </nav>

        {/* Mobile Menu Toggle (Simplified for now) */}
        <button className="lg:hidden p-2">
          <div className={cn("w-6 h-0.5 mb-1.5 transition-colors", isScrolled ? "bg-current" : "bg-white")} />
          <div className={cn("w-6 h-0.5 mb-1.5 transition-colors", isScrolled ? "bg-current" : "bg-white")} />
          <div className={cn("w-6 h-0.5 transition-colors", isScrolled ? "bg-current" : "bg-white")} />
        </button>
      </div>
    </motion.header>
  );
}
