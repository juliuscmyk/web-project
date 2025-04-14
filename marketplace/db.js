const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "marketplaceDB",
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection failed:", err);
    return;
  }
  console.log("✅ MySQL connected!");
});

module.exports = db;
