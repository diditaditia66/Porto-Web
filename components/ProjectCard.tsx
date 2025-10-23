"use client";

import type { Project } from "@/lib/projects";

export default function ProjectCard({ p }: { p: Project }) {
  if (!p) return null;

  return (
    <div className="rounded-2xl border border-neutral-200 p-4 shadow-sm hover:shadow-md transition dark:border-neutral-800">
      {/* Judul */}
      <h3 className="text-xl font-semibold">{p.title}</h3>

      {/* Deskripsi */}
      {p.summary && (
        <p className="text-sm opacity-80 mt-1 text-neutral-700 dark:text-neutral-300">
          {p.summary}
        </p>
      )}

      {/* Stack / Tech */}
      {p.stack?.length > 0 && (
        <div className="flex gap-2 flex-wrap mt-3">
          {p.stack.map((s, i) => (
            <span
              key={i}
              className="text-xs bg-neutral-100 px-2 py-1 rounded-md dark:bg-neutral-800 dark:text-neutral-300"
            >
              {s}
            </span>
          ))}
        </div>
      )}

      {/* Tautan GitHub / Demo */}
      {(p.github || p.demo) && (
        <div className="flex gap-3 mt-4 text-sm">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 dark:hover:text-blue-400"
            >
              GitHub
            </a>
          )}
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 dark:hover:text-blue-400"
            >
              Demo
            </a>
          )}
        </div>
      )}
    </div>
  );
}
