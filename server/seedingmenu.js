const pool = require("./connection");
const data = require("./menu.json");

let newData = data.map((el) => {
  return `('${el.name}', ${el.price}, '${el.imageUrl}', '${el.category}', '${el.description}')`;
});

let newDataToInsert = newData.join(",");

let seedDataQuery = `
  INSERT INTO Menu ("name", "price", "imageUrl", "category", "description")
  VALUES ${newDataToInsert};
`;

async function runSeed() {
  try {
    await pool.query(seedDataQuery);
    console.log("Success seed table menu");
  } catch (error) {
    console.log("Error seeding table menu:", error);
  }
}

runSeed();
