import { Pool } from "pg";

let _pool: Pool | null = null;

export function getPool() {
  if (_pool) return _pool;
  _pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER_RO,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
    ssl: process.env.DB_SSL === "false" ? false : { rejectUnauthorized: true },
    max: 3,
    idleTimeoutMillis: 5000,
  });
  return _pool;
}
