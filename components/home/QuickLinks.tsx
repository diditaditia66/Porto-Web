// components/home/QuickLinks.tsx
"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Github } from "lucide-react";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: EASE_OUT, when: "beforeChildren", staggerChildren: 0.06 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } }
};

export default function QuickLinks() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid gap-4 md:grid-cols-3"
    >
      <motion.a
        variants={item}
        href="https://github.com/diditaditia66"
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-2xl border border-neutral-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5"
      >
        <div className="flex items-center gap-2 text-sm font-semibold"><Github className="h-4 w-4" /> GitHub</div>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
          Open-source, eksperimen IoT, dan project web.
        </p>
        <div className="mt-3 text-xs text-neutral-500 group-hover:underline">Buka profil →</div>
      </motion.a>

      <motion.div
        variants={item}
        className="group rounded-2xl border border-neutral-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5"
      >
        <div className="text-sm font-semibold">Tentang Saya</div>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
          Latar belakang, keahlian, dan perjalanan singkat.
        </p>
        <Link href="/about" className="mt-3 inline-block text-xs text-neutral-500 group-hover:underline">
          Pelajari lebih lanjut →
        </Link>
      </motion.div>

      <motion.div
        variants={item}
        className="group rounded-2xl border border-neutral-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5"
      >
        <div className="text-sm font-semibold">Katalog Proyek</div>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
          Web apps, backend API, dan eksperimen ML/IoT.
        </p>
        <Link href="/projects" className="mt-3 inline-block text-xs text-neutral-500 group-hover:underline">
          Jelajahi →
        </Link>
      </motion.div>
    </motion.div>
  );
}
