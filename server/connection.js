const { Pool } = require('pg');

// URL Koneksi Supabase
const connectionString = 'postgresql://postgres.jzzrdyugxcuxdiinkwic:6mWvZarzHaCDFxM4@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres';

// Buat pool dengan URL
const pool = new Pool({
    connectionString,
    ssl: {
        rejectUnauthorized: false // Supabase memerlukan SSL
    }
});

module.exports = pool;
