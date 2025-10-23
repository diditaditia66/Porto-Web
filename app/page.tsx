// app/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

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
  return (
    <section className="space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold">Hi, I build things. 👋</h1>
      <p className="text-lg opacity-80">
        This is a starter portfolio on AWS Amplify + Next.js. Add your bio, skills, and links.
      </p>
      <div className="flex gap-3">
        <Link href="/projects" className="rounded-xl border px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-900">View Projects</Link>
        <Link href="/demos" className="rounded-xl border px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-900">Live Demos</Link>
      </div>
    </section>
  );
}
