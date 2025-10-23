// components/home/CtaStrip.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Rocket } from "lucide-react";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function CtaStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: EASE_OUT }}
      className="rounded-3xl border border-neutral-200 bg-gradient-to-r from-sky-50 to-emerald-50 p-6 text-center dark:border-white/10 dark:from-[#0a0f14] dark:to-[#0c140f]"
    >
      <p className="text-sm text-neutral-700 dark:text-neutral-300">
        Punya ide proyek, butuh integrasi sensor, atau ingin diskusi arsitektur?
      </p>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
        <a
          href="mailto:diditaditia333@gmail.com"
          className="inline-flex items-center gap-2 rounded-2xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow dark:border-white/10 dark:bg-white/10"
        >
          <Mail className="h-4 w-4" /> Hubungi Saya
        </a>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-2xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium transition hover:bg-neutral-50 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/20"
        >
          <Rocket className="h-4 w-4" /> Lihat Proyek
        </Link>
      </div>
    </motion.div>
  );
}
