import { Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";

export const pool = new Pool({
  connectionString: process.env.AUTH_DRIZZLE_URL,
});

export const db = drizzle(pool);
