import { headers } from "next/headers";

async function getRows() {
  try {
    const h = headers();
    const host =
      h.get("x-forwarded-host") || h.get("host") || "localhost:3000";
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
      <header>
        <h1 className="text-3xl font-bold">Demo Data Sensor</h1>
        <p className="text-neutral-600 dark:text-neutral-400 mt-2 max-w-2xl">
          Halaman ini menampilkan contoh data sensor dari basis data.  
          Untuk saat ini, koneksi database belum diaktifkan sehingga data tidak muncul.
        </p>
      </header>

      {rows.length === 0 ? (
        <div className="p-6 border rounded-xl text-neutral-500 dark:border-neutral-700 dark:text-neutral-400 text-sm">
          ⚠️ Belum ada data sensor yang ditampilkan.  
          Aktifkan koneksi database nanti agar tabel data muncul.
        </div>
      ) : (
        <div className="overflow-auto border rounded-xl border-neutral-200 dark:border-neutral-700">
          <table className="w-full text-sm">
            <thead className="bg-neutral-100 dark:bg-neutral-800">
              <tr>
                <th className="p-2 text-left">ID</th>
                <th className="p-2 text-left">Perangkat</th>
                <th className="p-2 text-left">Suhu (°C)</th>
                <th className="p-2 text-left">Kelembapan (%)</th>
                <th className="p-2 text-left">Waktu</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r: any) => (
                <tr
                  key={r.id}
                  className="border-t border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition"
                >
                  <td className="p-2">{r.id}</td>
                  <td className="p-2">{r.device_id}</td>
                  <td className="p-2">{r.temp_c}</td>
                  <td className="p-2">{r.humidity}</td>
                  <td className="p-2">{r.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
