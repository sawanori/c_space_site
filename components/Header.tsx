"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "事業紹介", href: "#segmentation" },
  { label: "施工実績", href: "#works" },
  { label: "COUVERTURE", href: "#couverture" },
  { label: "会社概要", href: "#company" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled || isMobileMenuOpen
            ? "glass text-[var(--color-navy)] py-3 shadow-lg"
            : "bg-transparent text-white py-6"
        )}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50" onClick={() => setIsMobileMenuOpen(false)}>
            <h1 className={cn(
              "text-2xl font-bold tracking-widest transition-colors",
              (isScrolled || isMobileMenuOpen) ? "text-[var(--color-navy)]" : "text-white"
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

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden relative z-50 p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="flex flex-col gap-1.5 items-center justify-center w-8">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className={cn("w-full h-0.5 block transition-colors",
                  (isScrolled || isMobileMenuOpen) ? "bg-[var(--color-navy)]" : "bg-white"
                )}
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className={cn("w-full h-0.5 block transition-colors",
                  (isScrolled || isMobileMenuOpen) ? "bg-[var(--color-navy)]" : "bg-white"
                )}
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className={cn("w-full h-0.5 block transition-colors",
                  (isScrolled || isMobileMenuOpen) ? "bg-[var(--color-navy)]" : "bg-white"
                )}
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl lg:hidden pt-24 px-6"
          >
            <nav className="flex flex-col gap-6 items-center justify-center h-full pb-20">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-bold text-[var(--color-navy)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-8 py-4 bg-[var(--color-navy)] text-white font-bold rounded shadow-lg hover:bg-[var(--color-navy-dark)] transition-colors"
                >
                  お問い合わせ
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
