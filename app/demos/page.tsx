// app/demos/page.tsx
import { headers } from "next/headers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo Data Sensor — Didit Aditia",
  description:
    "Demo data sensor untuk menampilkan integrasi database dan API. Konten masih dalam pengembangan.",
  alternates: { canonical: "/demos" },
  openGraph: {
    url: "https://profil.didit-aditia.my.id/demos",
    title: "Demos — Didit Aditia",
    description:
      "Demo frontend & API (sementara memakai mock data hingga DB aktif).",
    images: [{ url: "/og/demos.png", width: 1200, height: 630, alt: "Demos — Didit Aditia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Demos — Didit Aditia",
    images: ["/og/demos.png"],
  },
  robots: {
    index: false, // ubah ke true kalau halaman sudah siap diindeks
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

async function getRows() {
  try {
    const h = headers();
    const host = h.get("x-forwarded-host") || h.get("host") || "localhost:3000";
    const proto = h.get("x-forwarded-proto") || "http";
    const base = `${proto}://${host}`;

    const res = await fetch(`${base}/api/data?table=sensors&limit=20`, {
      cache: "no-store",
    });

    if (!res.ok) return [];
    return await res.json();
  } catch (err) {
    console.warn("Gagal memuat data dari API:", err);
    return [];
  }
}

export default async function DemosPage() {
  const rows = await getRows();

  return (
    <section className="space-y-8">
      {/* ... kontenmu tetap ... */}
      <pre className="text-xs bg-neutral-100 dark:bg-neutral-900 p-4 rounded-xl overflow-auto">
        {JSON.stringify(rows.slice(0, 5), null, 2)}
      </pre>
    </section>
  );
}
