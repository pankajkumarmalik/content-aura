import { env } from "process";

export default {
  dialect: "postgresql",
  schema: "./utils/db/schema.ts",
  out: "./drizzle",

  dbCredentials: {
    url: env.DATABASE_URL,
    connectionString: env.DATABASE_URL,
  },
};
