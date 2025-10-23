// app/projects/page.tsx
import data from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyek Saya — Didit Aditia",
  description:
    "Kumpulan proyek terpilih: aplikasi Next.js, integrasi AWS Amplify, dan eksperimen IoT.",
  alternates: { canonical: "/projects" },
  openGraph: {
    url: "https://profil.didit-aditia.my.id/projects",
    title: "Proyek Saya — Didit Aditia",
    description:
      "Web apps Next.js, backend API, dan projek IoT yang pernah saya bangun.",
    images: [{ url: "/og/projects.png", width: 1200, height: 630, alt: "Proyek — Didit Aditia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proyek Saya — Didit Aditia",
    images: ["/og/projects.png"],
  },
};

export const dynamic = "force-static";

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Proyek Saya</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}
