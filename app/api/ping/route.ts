// app/api/ping/route.ts
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");
  if (!url) {
    return NextResponse.json({ ok: false, error: "missing url" }, { status: 400 });
  }

  // timeout 6 detik biar tidak ngegantung
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 6000);

  try {
    // Banyak host menolak HEAD → langsung GET dan follow redirect.
    const r = await fetch(url, {
      method: "GET",
      redirect: "follow",
      cache: "no-store",
      signal: controller.signal,
      // Beberapa CDN butuh UA “browser-like”
      headers: { "user-agent": "Mozilla/5.0 (compatible; DemoStatusBot/1.0)" },
    });
    clearTimeout(timer);

    // Anggap online untuk status < 400 (2xx OK, 3xx redirect juga berarti reachable)
    const ok = r.status < 400;
    return NextResponse.json({ ok, status: r.status }, { status: 200 });
  } catch (e) {
    clearTimeout(timer);
    return NextResponse.json({ ok: false, error: "fetch_failed" }, { status: 200 });
  }
}
