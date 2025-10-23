// app/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import data from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";

// Komponen client
import HomeHero from "@/components/home/HomeHero";
import QuickLinks from "@/components/home/QuickLinks";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import CtaStrip from "@/components/home/CtaStrip";

export const metadata: Metadata = {
  title: "Beranda",
  description:
    "Developer yang membangun aplikasi web modern, backend API, dan sistem IoT. Telusuri proyek, demo, dan pengalaman saya.",
  alternates: { canonical: "https://profil.didit-aditia.my.id/" },
  openGraph: {
    url: "https://profil.didit-aditia.my.id/",
    title: "Beranda — Didit Aditia",
    description:
      "Developer & IoT Enthusiast. Lihat proyek dan demo yang pernah saya bangun.",
    images: [{ url: "/og/home.png", width: 1200, height: 630, alt: "Beranda — Didit Aditia" }],
  },
  twitter: {
    title: "Beranda — Didit Aditia",
    images: ["/og/home.png"],
  },
};

export default function Page() {
  const featured = (data as any[]).slice(0, 3);

  return (
    <section className="space-y-12">
      <HomeHero />

      <QuickLinks />

      <div className="space-y-4">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold">Proyek Terbaru</h2>
          <Link href="/projects" className="text-sm underline underline-offset-4 hover:opacity-80">
            Lihat semua
          </Link>
        </div>
        <FeaturedProjects projects={featured} />
      </div>

      <CtaStrip />
    </section>
  );
}
