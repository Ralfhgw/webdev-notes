#### CSV --> PSQL Commands to File
```
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFile = path.join(__dirname, "data_test.csv");
const outputFile = path.join(__dirname, "inserts.sql");

fs.readFile(inputFile, "utf-8", (err, data) => {
  if (err) throw err;

  const lines = data.trim().split("\n");
  const header = lines[0].split(";").map(h => h.trim());
  const rows = lines.slice(1);

const statements = rows.map(row => {
  const rowValues = row.split(";");
  while (rowValues.length < header.length) {
    rowValues.push("");
  }
  const values = rowValues.map((value, i) => {
    if (["latitude", "longitude", "depth", "mag"].includes(header[i])) {
      return value === "" ? "NULL" : value;
    } else {
      return value === "" ? "NULL" : `'${value.replace(/'/g, "''")}'`;
    }
  });
  return `INSERT INTO earthquake (\n  ${header.join(", ")}\n) VALUES (\n  ${values.join(", ")}\n);`;
});
  fs.writeFile(outputFile, statements.join("\n\n"), err => {
    if (err) throw err;
    console.log("SQL-Inserts wurden in inserts.sql geschrieben.");
  });
});
```
#### CSV --> PSQL Commands to Server
```
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import pkg from "pg";
const { Client } = pkg;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFile = path.join(__dirname, "data.csv");

const client = new Client({
  user: "ralf",
  host: "localhost",
  database: "sql-02",
  password: "",
  port: 5432,
});

await client.connect();

fs.readFile(inputFile, "utf-8", async (err, data) => {
  if (err) throw err;

  const lines = data.trim().split("\n");
  const header = lines[0].split(";").map(h => h.trim());
  const rows = lines.slice(1);

  for (const row of rows) {
    const rowValues = row.split(";");
    while (rowValues.length < header.length) {
      rowValues.push("");
    }
    const values = rowValues.map((value, i) => {
      if (["latitude", "longitude", "depth", "mag"].includes(header[i])) {
        return value === "" ? null : Number(value);
      } else {
        return value === "" ? null : value;
      }
    });

    const query = `
      INSERT INTO earthquake (${header.join(", ")})
      VALUES (${header.map((_, i) => `$${i + 1}`).join(", ")})
    `;
    console.log(query);
    try {
      await client.query(query, values);
    } catch (e) {
      console.error("Fehler beim Einfügen:", e);
    }
  }

  await client.end();
  
  console.log("Alle Daten wurden eingefügt.");
});
```