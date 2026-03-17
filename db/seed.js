const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config({ path: ".env.development" });

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error("MONGODB_URI not set");
  process.exit(1);
}

// Recursively convert MongoDB Extended JSON ($oid, $date) to native types
function convertExtJSON(value) {
  if (Array.isArray(value)) return value.map(convertExtJSON);
  if (value && typeof value === "object") {
    if ("$oid" in value) return new mongoose.Types.ObjectId(value.$oid);
    if ("$date" in value) return new Date(value.$date);
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, convertExtJSON(v)])
    );
  }
  return value;
}

async function seed() {
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log(`Connected to ${uri}`);

  const dbDir = __dirname;
  const entries = fs.readdirSync(dbDir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const jsonFile = path.join(dbDir, entry.name, `${entry.name}.json`);
    if (!fs.existsSync(jsonFile)) continue;

    const collectionName = entry.name;
    const raw = JSON.parse(fs.readFileSync(jsonFile, "utf8"));
    const docs = convertExtJSON(Array.isArray(raw) ? raw : [raw]);

    const collection = mongoose.connection.collection(collectionName);
    await collection.deleteMany({});
    const result = await collection.insertMany(docs);
    console.log(`${collectionName}: inserted ${result.insertedCount} documents`);
  }

  await mongoose.disconnect();
  console.log("Done.");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
