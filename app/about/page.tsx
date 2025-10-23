import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tentang Saya — Didit Aditia",
  description:
    "Profil profesional Didit Aditia: pengembang fullstack yang berfokus pada integrasi IoT, backend API, dan aplikasi modern dengan Next.js serta Flutter.",
};

const skills = [
  { group: "Frontend", items: ["Next.js", "React", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js (Express)", "Python (Flask/FastAPI)", "REST API", "WebSocket"] },
  { group: "Database & Server", items: ["PostgreSQL", "MongoDB", "AWS Amplify", "Ngrok", "Glitch"] },
  { group: "Mobile & IoT", items: ["Flutter (Dart)", "ESP32", "Arduino Mega 2560", "SIM800L", "Sensor Suite"] },
  { group: "Data & Integrasi", items: ["Google Sheets API", "Telegram Bot API", "Machine Learning (TFLite)"] },
];

const timeline = [
  {
    year: "2025",
    title: "Portofolio dan Sistem Monitoring IoT",
    desc:
      "Mengembangkan portofolio modern dengan Next.js dan AWS Amplify. Membangun sistem IoT berbasis ESP32 dan Arduino Mega untuk pemantauan data sensor dan kontrol pompa otomatis.",
  },
  {
    year: "2024",
    title: "Integrasi Telegram Bot & Node.js Server",
    desc:
      "Membuat server Node.js untuk menghubungkan perangkat IoT ke Telegram melalui SIM800L, menampilkan data sensor secara real-time, serta menyimpan data ke MongoDB dan Google Sheets.",
  },
  {
    year: "2023",
    title: "Eksperimen Flutter & Cloud Hosting",
    desc:
      "Mengembangkan aplikasi Flutter untuk menampilkan data sensor dari server lokal dan cloud, serta eksplorasi hosting server backend menggunakan Glitch dan Amplify.",
  },
];

export default function AboutPage() {
  return (
    <section className="space-y-10">
      {/* Header */}
      <header className="space-y-3">
        <h1 className="text-3xl font-bold">Tentang Saya</h1>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-3xl">
          Halo! Saya <span className="font-semibold">Didit Aditia</span>, seorang pengembang
          yang berfokus pada integrasi antara <strong>perangkat IoT</strong> dan
          <strong> aplikasi web modern</strong>. Saya suka membangun sistem yang
          menghubungkan dunia fisik (sensor, modul komunikasi) dengan dunia digital
          melalui <strong>API, dashboard,</strong> dan <strong>automasi cerdas</strong>.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-3xl">
          Dengan latar belakang di bidang perangkat keras dan pemrograman, saya terbiasa
          bekerja dari level rendah seperti komunikasi serial antar mikrokontroler,
          hingga pengembangan aplikasi penuh dengan <strong>Next.js</strong>,
          <strong> Flutter</strong>, dan <strong>Node.js</strong>. Tujuan saya sederhana:
          membuat sistem yang efisien, mudah digunakan, dan benar-benar berguna.
        </p>
      </header>

      {/* Profil ringkas */}
      <div className="grid gap-6 md:grid-cols-[220px,1fr]">
        {/* Foto profil */}
        <div className="flex md:block">
          <div className="h-40 w-40 md:h-52 md:w-52 rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/didit.jpeg"
              alt="Foto Profil Didit Aditia"
              width={208}
              height={208}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Informasi ringkas */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4">
            <h2 className="text-lg font-semibold">Ringkasan</h2>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">
              Saya berfokus pada pengembangan <strong>aplikasi fullstack</strong> yang
              menggabungkan hardware dan software. Dari sisi perangkat keras, saya
              berpengalaman menggunakan <strong>Arduino Mega</strong> dan
              <strong> ESP32</strong> untuk akuisisi data sensor dan komunikasi GSM.
              Dari sisi software, saya membangun backend menggunakan <strong>Node.js</strong>,
              dan frontend menggunakan <strong>Next.js</strong> serta <strong>Flutter</strong>.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4">
            <h2 className="text-lg font-semibold">Keahlian</h2>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {skills.map((s) => (
                <li key={s.group} className="rounded-xl bg-neutral-50 p-3 dark:bg-neutral-900/50">
                  <p className="text-sm font-semibold">{s.group}</p>
                  <p className="text-sm mt-1 text-neutral-700 dark:text-neutral-300">
                    {s.items.join(" • ")}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4">
            <h2 className="text-lg font-semibold">Perjalanan Singkat</h2>
            <ol className="mt-3 space-y-4">
              {timeline.map((t) => (
                <li key={t.year} className="relative pl-6">
                  <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                  <p className="text-sm font-semibold">
                    {t.year} — {t.title}
                  </p>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">{t.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-lg font-semibold">Ingin berdiskusi atau kolaborasi?</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Saya terbuka untuk proyek freelance, riset IoT, integrasi sensor, atau
            pengembangan aplikasi berbasis web dan mobile.
          </p>
        </div>
        <div className="flex gap-2">
          <a
            href="mailto:diditaditia333@gmail.com"
            className="inline-flex items-center rounded-2xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:shadow transition-all hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/10"
          >
            Hubungi Saya
          </a>
          <Link
            href="/projects"
            className="inline-flex items-center rounded-2xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium hover:bg-neutral-50 transition-all dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/20"
          >
            Lihat Proyek
          </Link>
        </div>
      </div>
    </section>
  );
}
