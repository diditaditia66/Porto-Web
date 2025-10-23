// components/home/FeaturedProjects.tsx
"use client";

import { motion, type Variants } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

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

export default function FeaturedProjects({ projects }: { projects: any[] }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((p) => (
        <motion.div
          key={p.id}
          variants={item}
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
        >
          <ProjectCard p={p} />
        </motion.div>
      ))}
    </motion.div>
  );
}
