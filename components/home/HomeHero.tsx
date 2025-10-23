// components/home/HomeHero.tsx
"use client";

import { motion, type Variants } from "framer-motion";
import { Github, Mail, Rocket, Cpu, FlaskConical } from "lucide-react";
import Link from "next/link";

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

export default function HomeHero() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-b from-neutral-50 to-white p-8 md:p-12 dark:from-[#050505] dark:to-neutral-950 dark:border-white/10"
    >
      {/* soft glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.25),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.25),transparent_60%)] blur-2xl" />
      </div>

      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <motion.div variants={item} className="mb-2 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-medium text-neutral-600 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-neutral-300">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-green-500/90" />
            Available for freelance & collaboration
          </motion.div>

          <motion.h1 variants={item} className="text-3xl font-bold tracking-tight md:text-4xl">
            Hi, I’m <span className="bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">Didit Aditia</span> — I build modern apps & IoT systems.
          </motion.h1>

          <motion.p variants={item} className="mt-3 text-lg text-neutral-700 dark:text-neutral-300">
            Full-stack developer & IoT enthusiast. Saya menghubungkan perangkat <strong>ESP32/Arduino</strong> dengan aplikasi <strong>Next.js/Flutter</strong>,
            membangun backend <strong>Node.js</strong>, dan merilisnya di <strong>AWS Amplify</strong>.
          </motion.p>

          <motion.div variants={item} className="mt-5 flex flex-wrap gap-2">
            <Badge><Cpu className="h-3.5 w-3.5" /> ESP32 / Arduino</Badge>
            <Badge><FlaskConical className="h-3.5 w-3.5" /> Node.js API</Badge>
            <Badge><Rocket className="h-3.5 w-3.5" /> Next.js</Badge>
            <Badge>Flutter</Badge>
            <Badge>PostgreSQL / MongoDB</Badge>
          </motion.div>

          <motion.div variants={item} className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-2xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow dark:border-white/10 dark:bg-white/10"
            >
              <Rocket className="h-4 w-4" /> Lihat Proyek
            </Link>
            <Link
              href="/demos"
              className="inline-flex items-center gap-2 rounded-2xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium transition hover:bg-neutral-50 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/20"
            >
              <FlaskConical className="h-4 w-4" /> Live Demos
            </Link>
            <a
              href="mailto:diditaditia333@gmail.com"
              className="inline-flex items-center gap-2 rounded-2xl border border-neutral-300 bg-neutral-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow dark:border-white/10 dark:bg-white dark:text-neutral-900"
            >
              <Mail className="h-4 w-4" /> Hubungi Saya
            </a>
          </motion.div>
        </div>

        {/* mini stats */}
        <motion.div variants={item} className="grid w-full max-w-sm grid-cols-3 gap-3 md:max-w-none md:w-80">
          {[
            { n: "20+", t: "Devices & Sensors" },
            { n: "10k+", t: "Data Points" },
            { n: "5+", t: "Years Coding" },
          ].map((s) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, ease: EASE_OUT }}
              className="rounded-2xl border border-neutral-200 bg-white p-4 text-center dark:border-white/10 dark:bg-white/5"
            >
              <div className="text-2xl font-bold">{s.n}</div>
              <div className="mt-1 text-xs text-neutral-500">{s.t}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white/60 px-3 py-1 text-xs font-medium text-neutral-700 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-neutral-200">
      {children}
    </span>
  );
}
