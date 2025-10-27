// components/home/HomeHero.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Mail, Rocket, Cpu, FlaskConical, Cloud } from "lucide-react";
import Link from "next/link";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT, when: "beforeChildren", staggerChildren: 0.06 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } },
};

// ------- Simple typing effect (no extra deps) -------
const ROLES = [
  "Full-Stack Developer",
  "Next.js Developer",
  "Flutter Developer",
  "Node.js Engineer",
  "IoT System Integrator",
  "Backend API Engineer",
  "Cloud & Deployment Specialist",
  "Database Designer (PostgreSQL / MongoDB)",
];
function useTyping(words = ROLES, speed = 80, pause = 1200) {
  const [i, setI] = useState(0);           // which word
  const [sub, setSub] = useState(0);       // substring length
  const [del, setDel] = useState(false);   // deleting?
  const [text, setText] = useState("");

  useEffect(() => {
    const full = words[i];
    let t: any;

    if (!del && sub < full.length) {
      t = setTimeout(() => { setSub(sub + 1); setText(full.slice(0, sub + 1)); }, speed);
    } else if (!del && sub === full.length) {
      t = setTimeout(() => setDel(true), pause);
    } else if (del && sub > 0) {
      t = setTimeout(() => { setSub(sub - 1); setText(full.slice(0, sub - 1)); }, Math.max(40, speed - 20));
    } else {
      setDel(false);
      setI((i + 1) % words.length);
    }

    return () => clearTimeout(t);
  }, [i, sub, del, words, speed, pause]);

  return text;
}

export default function HomeHero() {
  const typed = useTyping(ROLES);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-b from-neutral-50 to-white p-8 md:p-12 dark:from-[#050505] dark:to-neutral-950 dark:border-white/10"
    >
      {/* Animated background blobs (no Tailwind keyframes needed) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          aria-hidden
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full"
          style={{ background: "radial-gradient(ellipse at center, rgba(59,130,246,0.25), transparent 60%)" }}
          animate={{ scale: [1, 1.15, 1], x: [0, 8, 0], y: [0, -10, 0] }}
          transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full"
          style={{ background: "radial-gradient(ellipse at center, rgba(16,185,129,0.25), transparent 60%)" }}
          animate={{ scale: [1, 1.1, 1], x: [0, -8, 0], y: [0, 8, 0] }}
          transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
        />
      </div>

      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <motion.div variants={item} className="mb-2 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-medium text-neutral-600 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-neutral-300">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-green-500/90" />
            Available for freelance & collaboration
          </motion.div>

          <motion.h1 variants={item} className="text-3xl font-bold tracking-tight md:text-4xl">
            <span className="bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">Didit Aditia</span>{" "}
            — Membangun Sistem Web, Mobile, dan IoT yang Terintegrasi
          </motion.h1>

          <motion.p variants={item} className="mt-3 text-lg text-neutral-700 dark:text-neutral-300">
            Full-stack developer dengan pengalaman membangun aplikasi berbasis <strong>Next.js</strong>, <strong>Flutter</strong>, dan <strong>Node.js</strong>,
            serta integrasi sistem <strong>IoT</strong> menggunakan <strong>Mikrokontroler</strong>.
            <span className="block mt-1 text-base text-neutral-500 dark:text-neutral-400">
              <em className="not-italic text-neutral-700 dark:text-neutral-200">{typed || "\u00A0"}</em>
              <span className="ml-1 inline-block h-5 w-0.5 align-middle bg-neutral-400 dark:bg-neutral-500 animate-pulse" />
            </span>
          </motion.p>

          <motion.div variants={item} className="mt-5 flex flex-wrap gap-2">
            <Badge><Rocket className="h-3.5 w-3.5" /> Next.js / React</Badge>
            <Badge>Flutter / Dart</Badge>
            <Badge><FlaskConical className="h-3.5 w-3.5" /> Node.js / Express</Badge>
            <Badge>PostgreSQL / MongoDB</Badge>
            <Badge><Cpu className="h-3.5 w-3.5" /> Arduino / ESP</Badge>
            <Badge>AWS Amplify / Glitch / Ngrok</Badge>
            <Badge><Cloud className="h-3.5 w-3.5" /> AWS Cognito / Google OAuth</Badge>
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
              Coba Demo
            </Link>
            <a
              href="mailto:diditaditia333@gmail.com"
              className="inline-flex items-center gap-2 rounded-2xl border border-neutral-300 bg-neutral-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow dark:border-white/10 dark:bg-white dark:text-neutral-900"
            >
              <Mail className="h-4 w-4" /> Hubungi Saya
            </a>
          </motion.div>
        </div>

        {/* mini stats with interactive hover */}
        <motion.div variants={item} className="grid w-full max-w-sm grid-cols-3 gap-3 md:max-w-none md:w-80">
          {[
            { n: "6+", t: "Full-stack Projects" },
            { n: "10+", t: "IoT Devices Integrated" },
            { n: "5+", t: "Years Coding" },
          ].map((s) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, ease: EASE_OUT }}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl border border-neutral-200 bg-white p-4 text-center transition-colors duration-300 hover:bg-gradient-to-r hover:from-sky-500/10 hover:to-emerald-500/10 dark:border-white/10 dark:bg-white/5"
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
