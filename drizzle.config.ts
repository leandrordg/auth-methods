import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.AUTH_DRIZZLE_URL!,
  },
  verbose: true,
  strict: true,
});
