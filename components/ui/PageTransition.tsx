"use client";

import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const variants: Variants = {
  initial: { opacity: 0, y: 12 },
  enter:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.30, ease: EASE_OUT } },
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  // (Opsional) scroll ke atas saat route berubah
  useEffect(() => {
    if (!prefersReducedMotion) window.scrollTo({ top: 0, behavior: "smooth" });
    else window.scrollTo({ top: 0 });
  }, [pathname, prefersReducedMotion]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}               // kunci berdasarkan route
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
        style={{ willChange: "opacity, transform" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
