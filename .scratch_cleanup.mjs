import postgres from './node_modules/.pnpm/postgres@3.4.9/node_modules/postgres/src/index.js';

const DATABASE_URL = "postgresql://ledeoya:6kg6m5xz3sjufbci@77.237.238.148:8989/ledeoya_db";

async function main() {
  const sql = postgres(DATABASE_URL);
  try {
    console.log("=== EXECUTING DATABASE CLEANUP ===");

    console.log("1. Dropping legacy unused tables:");
    await sql`DROP TABLE IF EXISTS "_globals_access-settings" CASCADE`;
    console.log("   - Dropped _globals_access-settings");

    await sql`DROP TABLE IF EXISTS "menu_v2" CASCADE`;
    console.log("   - Dropped menu_v2");

    await sql`DROP TABLE IF EXISTS "products" CASCADE`;
    console.log("   - Dropped products");

    console.log("\n2. Dropping obsolete columns:");
    await sql`ALTER TABLE "posts" DROP COLUMN IF EXISTS "tabs"`;
    console.log("   - Dropped posts.tabs");

    await sql`ALTER TABLE "pages" DROP COLUMN IF EXISTS "tabs"`;
    console.log("   - Dropped pages.tabs");

    await sql`ALTER TABLE "forms" DROP COLUMN IF EXISTS "tabs"`;
    console.log("   - Dropped forms.tabs");

    await sql`ALTER TABLE "services" DROP COLUMN IF EXISTS "stats"`;
    console.log("   - Dropped services.stats");

    console.log("\n=== DATABASE CLEANUP COMPLETED SUCCESSFULLY ===");
  } catch (err) {
    console.error("Database Cleanup Error:", err);
  } finally {
    await sql.end();
  }
}

main();
