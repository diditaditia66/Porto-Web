"use client";

export default function ProjectCard({ p }: { p: any }) {
  if (!p) return null;

  return (
    <div className="rounded-2xl border p-4 shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold">{p.title}</h3>
      <p className="text-sm opacity-80 mt-1">{p.summary}</p>
      <div className="flex gap-2 flex-wrap mt-3">
        {p.stack.map((s: string, i: number) => (
          <span
            key={i}
            className="text-xs bg-neutral-100 px-2 py-1 rounded-md dark:bg-neutral-800"
          >
            {s}
          </span>
        ))}
      </div>
      <div className="flex gap-3 mt-4 text-sm">
        {p.github && (
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600"
          >
            GitHub
          </a>
        )}
        {p.demo && (
          <a
            href={p.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
