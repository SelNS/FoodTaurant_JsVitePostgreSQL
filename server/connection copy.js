const { Pool } = require("pg");

const pool = new Pool({
  host: "jzzrdyugxcuxdiinkwic.pooler.supabase.com",
  user: "postgres",
  database: "postgres",
  password: "dEiEqJH3rnKVv91T",
  port: "6543",
  max: 15,
  ssl: {
    rejectUnauthorized: false // Pastikan SSL digunakan untuk koneksi aman
}
});

module.exports = pool;
