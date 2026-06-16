import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Client } = pg;
const client = new Client({
  connectionString: process.env.DATABASE_URL
});

async function test() {
  await client.connect();
  console.log('Connected to DB');

  try {
    const res = await client.query(`SELECT id, title, content, has_draft, _status FROM pages WHERE content LIKE '%recent-feed%' OR content LIKE '%feature-split%' LIMIT 10`);
    console.log('Found Pages:', JSON.stringify(res.rows, null, 2));
  } catch (e) {
    console.log('Error querying pages:', e.message);
  }

  await client.end();
}

test();
