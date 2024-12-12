const pool = require("./connection");

let createTableMenu = `
  CREATE TABLE Menu (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(100) NOT NULL,
    "price" NUMERIC(10, 2) NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "category" VARCHAR(50) NOT NULL,
    "description" TEXT
  );
`;

// Koneksi ke database => asynchronous
async function runSetup() {
  try {
    await pool.query(createTableMenu);
    console.log("Success setup table menu");
  } catch (error) {
    console.log("Error setting up table menu:", error);
  }
}

runSetup();
