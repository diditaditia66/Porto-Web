import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "Tentang Saya — Didit Aditia",
  description:
    "Profil profesional Didit Aditia: Full-stack Developer dengan fokus pada Web, Mobile, dan integrasi IoT menggunakan Next.js, Flutter, dan Node.js.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    url: "https://profil.didit-aditia.my.id/about",
    siteName: "Didit Aditia",
    title: "Tentang Saya — Didit Aditia",
    description:
      "Full-stack developer dengan keahlian di Next.js, Flutter, Node.js, dan integrasi sistem IoT.",
    images: [
      {
        url: "/og/about.png",
        width: 1200,
        height: 630,
        alt: "Tentang Saya — Didit Aditia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tentang Saya — Didit Aditia",
    images: ["/og/about.png"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
