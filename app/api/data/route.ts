import { NextResponse } from "next/server";
import { getPool } from "@/lib/db";

const ALLOWED = new Set(["sensors", "logs"]);

export async function GET(request: Request) {
  const url = new URL(request.url);
  const table = url.searchParams.get("table");
  const limitParam = url.searchParams.get("limit");

  if (!table || !ALLOWED.has(table)) {
    return NextResponse.json({ error: "table not allowed" }, { status: 400 });
  }

  const limit = Math.min(Number(limitParam ?? 50) || 50, 200);

  try {
    const pool = getPool();
    const res = await pool.query(`SELECT * FROM ${table} ORDER BY 1 DESC LIMIT $1`, [limit]);
    return NextResponse.json(res.rows);
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: "query failed" }, { status: 500 });
  }
}
