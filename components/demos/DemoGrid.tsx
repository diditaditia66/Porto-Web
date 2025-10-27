// components/demos/DemoGrid.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type DemoItem = {
  id: string;
  title: string;
  summary?: string | null;
  demo: string;
  cover?: string | null;
};

type Props = {
  items: DemoItem[];
};

type StatusMap = Record<string, { ok: boolean; status?: number }>;

export default function DemoGrid({ items }: Props) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<StatusMap>({});

  // 🔍 Filter berdasarkan kata kunci
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (i) =>
        i.title.toLowerCase().includes(q) ||
        (i.summary ?? "").toLowerCase().includes(q)
    );
  }, [items, query]);

  // 🌐 Cek status online/offline
  useEffect(() => {
    let cancelled = false;

    async function checkAll() {
      const results: StatusMap = {};
      await Promise.all(
        items.map(async (it) => {
          try {
            const r = await fetch(`/api/ping?url=${encodeURIComponent(it.demo)}`, {
              cache: "no-store",
            });
            const data = await r.json().catch(() => ({}));
            results[it.id] = { ok: !!data?.ok, status: data?.status };
          } catch {
            results[it.id] = { ok: false };
          }
        })
      );
      if (!cancelled) setStatus(results);
    }

    checkAll();
    const t = setInterval(checkAll, 60_000);
    return () => {
      cancelled = true;
      clearInterval(t);
    };
  }, [items]);

  return (
    <div className="space-y-6">
      {/* Pencarian */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari demo (mis. Gudang, Trek Safe, Temperature)…"
          className="w-full sm:w-80 rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-blue-500/60 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
        />
        <div className="text-sm text-neutral-500 dark:text-neutral-400">
          Menampilkan <strong>{filtered.length}</strong> dari {items.length} demo
        </div>
      </div>

      {/* Grid */}
      <AnimatePresence mode="popLayout">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, idx) => {
            const s = status[p.id];
            const isOnline =
              typeof s?.status === "number"
                ? s.status < 400 // anggap 2xx & 3xx = online
                : s?.ok;

            return (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
                className="h-full rounded-2xl border border-neutral-200 p-5 shadow-sm bg-white hover:shadow-md hover:-translate-y-0.5 transition dark:border-neutral-800 dark:bg-neutral-900"
              >
                {/* Cover opsional */}
                {p.cover && (
                  <div className="mb-3 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
                    <img
                      src={p.cover}
                      alt={p.title}
                      className="h-40 w-full object-cover"
                    />
                  </div>
                )}

                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-lg font-semibold leading-snug">{p.title}</h2>
                  <span
                    className={`mt-1 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] ${
                      isOnline === undefined
                        ? "border-neutral-300 text-neutral-500 dark:border-neutral-700 dark:text-neutral-400"
                        : isOnline
                        ? "border-emerald-300 text-emerald-700 dark:border-emerald-800 dark:text-emerald-300"
                        : "border-red-300 text-red-600 dark:border-red-800 dark:text-red-400"
                    }`}
                    title={s?.status ? `HTTP ${s.status}` : "Memeriksa…"}
                  >
                    <span
                      className={`inline-block h-2 w-2 rounded-full ${
                        isOnline === undefined
                          ? "bg-neutral-300 dark:bg-neutral-700"
                          : isOnline
                          ? "bg-emerald-500"
                          : "bg-red-500"
                      }`}
                    />
                    {isOnline === undefined
                      ? "Checking"
                      : isOnline
                      ? "Online"
                      : `Offline${s?.status ? ` (${s.status})` : ""}`}
                  </span>
                </div>

                {p.summary && (
                  <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                    {p.summary}
                  </p>
                )}

                <div className="mt-4">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      const st = status[p.id]?.status;
                      if (typeof st === "number" && st >= 400) {
                        alert(`Server membalas HTTP ${st}. Tetap coba buka demo di tab baru.`);
                      }
                    }}
                    className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium bg-neutral-900 text-white hover:-translate-y-0.5 hover:shadow-md transition dark:bg-white dark:text-black"
                  >
                    🚀 Coba Demo
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </AnimatePresence>
    </div>
  );
}
