import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";
import data from "@/data/projects.json";

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
  // Server: load json, pass ke client
  return <ProjectsClient projects={data} />;
}
