import fs from "fs/promises";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, "../db/");

async function readFile(fileName) {
  try {
    const riddles = await fs.readFile(filePath+fileName, "utf-8");
    return JSON.parse(riddles);
  } catch (err) {
    console.log("read file error massege: " + err.message);
  }
}
function writeFile(fileName, data) {
  try {
    fs.writeFile(filePath+fileName, JSON.stringify(data, null, 2), "utf-8", (err) => {});
    console.log("The db updated successfully!");
  } catch (err) {
    console.log("write file error massege: " + err);
  }
}

export { readFile, writeFile };
