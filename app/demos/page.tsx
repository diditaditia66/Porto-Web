// app/demos/page.tsx
import type { Metadata } from "next";
import projectsJson from "@/data/projects.json"; // ganti ke projects.json jika nama jamak
import { parseProjects } from "@/lib/projects";
import DemoGrid from "@/components/demos/DemoGrid";

export const metadata: Metadata = {
  title: "Demos — Didit Aditia",
  description: "Koleksi proyek yang bisa langsung kamu coba di browser.",
  alternates: { canonical: "/demos" },
  openGraph: {
    url: "https://profil.didit-aditia.my.id/demos",
    title: "Demos — Didit Aditia",
    description: "Proyek dengan demo live. Klik “Coba Demo” untuk menjelajah.",
    images: [{ url: "/og/demos.png", width: 1200, height: 630, alt: "Demos — Didit Aditia" }],
  },
  twitter: { card: "summary_large_image", title: "Demos — Didit Aditia", images: ["/og/demos.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

// Hanya ambil project yang punya link demo
function getDemoProjects() {
  const all = parseProjects(projectsJson);
  return all
    .filter((p) => typeof p.demo === "string" && p.demo.trim() !== "")
    .map((p) => ({
      id: String(p.id),
      title: p.title,
      summary: p.summary,
      demo: p.demo!,              // sudah difilter, pasti ada
      cover: (p as any).cover || null, // opsional, kalau kamu menambahkannya di JSON
    }));
}

export default function DemosPage() {
  const demos = getDemoProjects();

  return (
    <section className="py-10 space-y-10">
      {/* Hero */}
      <header className="text-center space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">💻 Demos Langsung</h1>
        <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
          Coba langsung beberapa proyek yang sudah live. Halaman ini hanya menampilkan
          proyek yang memiliki tautan demo aktif. Klik <strong>“Coba&nbsp;Demo”</strong> untuk membuka.
        </p>
      </header>

      {/* Grid Demos + Pencarian + Status Online/Offline */}
      <DemoGrid items={demos} />
    </section>
  );
}
