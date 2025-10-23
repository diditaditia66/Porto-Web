// app/sitemap.ts
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://profil.didit-aditia.my.id";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`,        lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/about`,   lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/projects`,lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/demos`,   lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];

  // (Opsional) jika nanti ada halaman dinamis /projects/[slug], tambahkan di sini:
  // const projects = await getAllProjects(); // ambil dari data/projects.json atau DB
  // const dynamicRoutes = projects.map((p) => ({
  //   url: `${base}/projects/${p.slug}`,
  //   lastModified: new Date(p.updatedAt || Date.now()),
  //   changeFrequency: "monthly" as const,
  //   priority: 0.7,
  // }));

  return [
    ...staticRoutes,
    // ...dynamicRoutes,
  ];
}
