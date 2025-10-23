// app/layout.tsx
import "./globals.css";
import Link from "next/link";
import type { Metadata, Route } from "next";
import ThemeToggle from "@/components/ThemeToggle";
import PageTransition from "@/components/ui/PageTransition";
import ContactMenu from "@/components/ContactMenu";

export const metadata: Metadata = {
  metadataBase: new URL("https://profil.didit-aditia.my.id"),
  title: {
    default: "Didit Aditia — Developer & IoT Enthusiast",
    template: "%s | Didit Aditia",
  },
  description:
    "Portofolio resmi Didit Aditia. Membangun aplikasi web, backend, dan sistem IoT dengan Next.js, Node.js, dan AWS Amplify.",
  openGraph: {
    type: "website",
    url: "https://profil.didit-aditia.my.id",
    siteName: "Didit Aditia",
    title: "Didit Aditia — Developer & IoT Enthusiast",
    description:
      "Portofolio resmi Didit Aditia. Membangun aplikasi web, backend, dan sistem IoT.",
    locale: "id_ID",
    images: [
      {
        url: "/og/home.png",
        width: 1200,
        height: 630,
        alt: "Didit Aditia Portofolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@diditaditia",
    creator: "@diditaditia",
    title: "Didit Aditia — Developer & IoT Enthusiast",
    images: ["/og/home.png"],
  },
  robots: { index: true, follow: true },
};

function NavLink({
  href,
  children,
}: {
  href: Route;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="px-3 py-1.5 rounded-xl text-sm font-medium text-neutral-700 hover:text-black hover:bg-neutral-100/70 transition-colors dark:text-neutral-300 dark:hover:text-white dark:hover:bg-white/10"
    >
      {children}
    </Link>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      {/* Anti-flicker: set kelas 'dark' seawal mungkin */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  try {
    var saved = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = saved ? (saved === 'dark') : prefersDark;
    document.documentElement.classList.toggle('dark', isDark);
  } catch (e) {}
})();
          `.trim(),
          }}
        />
      </head>

      <body className="min-h-screen antialiased bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-black text-neutral-900 dark:text-neutral-100">
        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-neutral-300/80 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-[0_1px_0_rgba(0,0,0,0.04)] dark:border-white/20 dark:bg-black/50 dark:shadow-[0_1px_0_rgba(255,255,255,0.06)]">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <Link
                href={"/" as Route}
                className="inline-flex items-center gap-2 rounded-2xl px-2 py-1 font-semibold tracking-tight hover:bg-neutral-100/70 dark:hover:bg-white/10"
              >
                <span className="inline-block h-2 w-2 rounded-full bg-neutral-900 dark:bg-white" />
                <span>Didit Aditia</span>
              </Link>

              {/* Navigasi */}
              <nav className="hidden gap-1 md:flex">
                <NavLink href={"/" as Route}>Beranda</NavLink>
                <NavLink href={"/about" as Route}>Tentang</NavLink>
                <NavLink href={"/projects" as Route}>Proyek</NavLink>
                <NavLink href={"/demos" as Route}>Demo</NavLink>
                <a
                  href="https://github.com/diditaditia66"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl text-sm font-medium text-neutral-700 underline-offset-4 hover:underline hover:text-black transition-colors dark:text-neutral-300 dark:hover:text-white"
                >
                  GitHub
                </a>
              </nav>

              {/* Aksi kanan */}
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <div className="hidden md:block">
                  <ContactMenu />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Konten Utama (dengan transisi halaman) */}
        <main className="mx-auto max-w-6xl px-4 py-10">
          <PageTransition>{children}</PageTransition>
        </main>

        {/* Footer */}
        <footer className="border-t border-neutral-300/80 py-10 text-sm text-neutral-600 dark:border-white/15 dark:text-neutral-400">
          <div className="mx-auto max-w-6xl px-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} Didit Aditia • Dibangun dengan Next.js • Dihost di AWS Amplify
            </p>
            <div className="flex items-center gap-4">
              <Link href={"/about" as Route} className="hover:underline">
                Tentang
              </Link>
              <Link href={"/projects" as Route} className="hover:underline">
                Proyek
              </Link>
              <Link href={"/demos" as Route} className="hover:underline">
                Demo
              </Link>
              <a
                href="https://github.com/diditaditia66"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
