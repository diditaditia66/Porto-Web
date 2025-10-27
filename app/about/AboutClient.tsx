"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { motion } from "framer-motion";

const skills = [
  { group: "Frontend", items: ["Next.js", "React", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js (Express)", "REST API", "WebSocket"] },
  { group: "Database & Server", items: ["PostgreSQL", "MongoDB", "AWS Amplify", "Ngrok", "Glitch"] },
  { group: "Mobile", items: ["Flutter (Dart)", "Android", "Cross-platform UI"] },
  { group: "Integrasi & Otomasi", items: ["Google Sheets API", "Telegram Bot API", "IoT Data Bridge"] },
];

const focus = [
  "Pengembangan aplikasi lintas platform (Web, Mobile, IoT).",
  "Desain arsitektur backend yang efisien dan scalable.",
  "Integrasi data sensor dengan cloud dan API modern.",
  "Automasi sistem berbasis event-driven architecture.",
  "Optimalisasi UI/UX untuk antarmuka modern dan responsif.",
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    } as any,
  },
};

export default function AboutClient() {
  return (
    <motion.section
      className="relative space-y-10 overflow-hidden rounded-3xl bg-gradient-to-b from-neutral-50 via-white to-neutral-100 dark:from-[#090909] dark:via-[#0a0a0a] dark:to-[#050505] p-6 md:p-10"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.15 } },
      }}
    >
      {/* soft background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_40%_20%,rgba(59,130,246,0.1),transparent_60%)]" />

      {/* Header */}
      <motion.header className="space-y-3" variants={fadeIn}>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
          Tentang Saya
        </h1>

        <motion.div
          className="w-20 h-[3px] bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full my-4"
          variants={fadeIn}
        />

        <p className="text-neutral-600 dark:text-neutral-400 max-w-3xl">
          Halo! Saya <span className="font-semibold">Didit Aditia</span>, seorang{" "}
          <strong>Full-stack Developer</strong> yang berfokus pada pengembangan aplikasi{" "}
          <strong>Web</strong>, <strong>Mobile</strong>, dan sistem terintegrasi berbasis{" "}
          <strong>IoT</strong>. Saya menikmati proses membangun solusi yang menghubungkan data
          dari dunia nyata dengan platform digital berbasis cloud, API modern, dan antarmuka yang intuitif.
        </p>

        <p className="text-neutral-600 dark:text-neutral-400 max-w-3xl">
          Saya berpengalaman mengembangkan aplikasi lintas platform menggunakan{" "}
          <strong>Next.js</strong>, <strong>Flutter</strong>, dan <strong>Node.js</strong>, serta
          merancang arsitektur backend yang efisien dan mudah dikembangkan. Bagi saya,
          teknologi terbaik bukan hanya tentang performa, tetapi tentang bagaimana ia memudahkan
          dan memberikan nilai nyata bagi pengguna.
        </p>
      </motion.header>

      {/* Profil Ringkas */}
      <div className="grid gap-6 md:grid-cols-[220px,1fr]">
        {/* Foto Profil */}
        <motion.div className="flex md:block" variants={fadeIn} whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <div className="h-40 w-40 md:h-52 md:w-52 rounded-2xl overflow-hidden shadow-lg shadow-sky-500/10 ring-1 ring-white/20">
            <Image
              src="/didit.jpeg"
              alt="Foto Profil Didit Aditia"
              width={208}
              height={208}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>

        {/* Detail Ringkasan */}
        <motion.div className="space-y-4" variants={fadeIn} whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white/70 dark:bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <h2 className="text-lg font-semibold">Ringkasan</h2>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">
              Saya berpengalaman dalam mengembangkan aplikasi full-stack yang mengintegrasikan
              berbagai komponen sistem — mulai dari backend, database, hingga antarmuka pengguna.
              Saya membangun dan mengelola API berbasis <strong>Node.js</strong>, menggunakan{" "}
              <strong>PostgreSQL</strong> dan <strong>MongoDB</strong> untuk pengelolaan data, serta
              mengembangkan UI modern dan responsif dengan <strong>Next.js</strong> dan{" "}
              <strong>Flutter</strong>. Fokus saya adalah menciptakan sistem yang stabil, efisien,
              dan mudah digunakan.
            </p>
          </div>

          {/* Keahlian */}
          <motion.div
            className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white/70 dark:bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            variants={fadeIn}
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-lg font-semibold">Keahlian</h2>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {skills.map((s) => (
                <li
                  key={s.group}
                  className="rounded-xl bg-neutral-50 p-3 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-all duration-300"
                >
                  <p className="text-sm font-semibold">{s.group}</p>
                  <p className="text-sm mt-1 text-neutral-700 dark:text-neutral-300">
                    {s.items.join(" • ")}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Minat & Fokus */}
          <motion.div
            className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white/70 dark:bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            variants={fadeIn}
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-lg font-semibold">Minat & Fokus Pengembangan Saat Ini</h2>
            <ul className="mt-3 space-y-2 list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300">
              {focus.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between bg-white/70 dark:bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        variants={fadeIn}
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div>
          <h3 className="text-lg font-semibold">Ingin berdiskusi atau kolaborasi?</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Saya terbuka untuk proyek freelance, riset IoT, integrasi sistem, atau
            pengembangan aplikasi berbasis web dan mobile.
          </p>
        </div>
        <div className="flex gap-2">
          <a
            href="mailto:diditaditia333@gmail.com"
            className="inline-flex items-center rounded-2xl border border-transparent bg-gradient-to-r from-sky-500 to-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            Hubungi Saya
          </a>
          <Link
            href="/projects"
            className="inline-flex items-center rounded-2xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium hover:bg-neutral-50 transition-all dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/20"
          >
            Lihat Proyek
          </Link>
        </div>
      </motion.div>

      {/* JSON-LD */}
      <Script
        id="ld-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Didit Aditia",
            url: "https://profil.didit-aditia.my.id/about",
            sameAs: ["https://github.com/diditaditia66"],
            jobTitle: "Full-stack Developer",
          }),
        }}
      />
    </motion.section>
  );
}
