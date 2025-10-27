"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

type Project = {
  id: number | string;
  title: string;
  summary: string;
  stack: string[];
  github?: string | null;
  demo?: string | null;
};

export default function ProjectsClient({ projects }: { projects: Project[] }) {
  // Variants dengan easing fixed (TypeScript-safe menggunakan `as any`)
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      } as any,
    },
  };

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
      {/* subtle background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_40%_20%,rgba(59,130,246,0.12),transparent_70%)]" />

      {/* Header */}
      <motion.header className="space-y-3 text-center" variants={fadeIn}>
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
          Proyek Saya
        </h1>
        <p className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400 text-sm md:text-base">
          Beberapa proyek pilihan yang saya kembangkan dengan fokus pada performa, integrasi modern,
          dan pengalaman pengguna yang halus.
        </p>
      </motion.header>

      {/* Divider */}
      <motion.div
        className="w-24 h-[3px] mx-auto bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full"
        variants={fadeIn}
      />

      {/* Grid Proyek */}
      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {projects.map((p) => (
          <motion.div
            key={p.id}
            variants={fadeIn}
            whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
            className="rounded-2xl border border-neutral-200 bg-white/70 p-0 dark:border-white/10 dark:bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <ProjectCard p={p as any} />
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        className="mt-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 text-center bg-white/70 dark:bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <h3 className="text-lg font-semibold mb-2">
          Tertarik untuk berkolaborasi atau berdiskusi proyek?
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
          Saya terbuka untuk proyek freelance, eksperimen IoT, dan pengembangan aplikasi full-stack.
        </p>
        <a
          href="mailto:diditaditia333@gmail.com"
          className="inline-flex items-center rounded-2xl border border-transparent bg-gradient-to-r from-sky-500 to-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-lg"
        >
          Hubungi Saya
        </a>
      </motion.div>
    </motion.section>
  );
}
