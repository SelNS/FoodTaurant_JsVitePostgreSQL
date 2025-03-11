require("dotenv").config();
const { Pool } = require('pg');

// URL Koneksi Supabase
const connectionString = process.env.SUPABASE_DB_URL;

// Buat pool dengan URL
const pool = new Pool({
    connectionString,
    ssl: {
        rejectUnauthorized: false // Supabase memerlukan SSL
    }
});

module.exports = pool;
