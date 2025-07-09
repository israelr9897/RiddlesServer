import { readFileToRiddles, writeRiddleInDB } from "../DAL/DALriddles.js";
let countID = 6;

async function getRiddels() {
  try {
    return await readFileToRiddles();
  } catch (err) {
    return false;
  }
}
async function addRiddleToDB(data) {
  try {
    data.id = ++countID;
    const riddels = await readFileToRiddles();
    riddels.push(data);
    writeRiddleInDB(riddels);
    return true;
  } catch (err) {
    console.log("addRiddleToDB error massege: " + err);
    return false;
  }
}
async function updateRiddle(data) {
  try {
    const riddels = await readFileToRiddles();
    let riddle = riddels.find((r) => r.id === data.id);
    Object.assign(riddle, data);
    writeRiddleInDB(riddels);
    return true;
  } catch (err) {
    console.log("updateRiddle error massege: " + err);
    return false;
  }
}
async function deleteRiddle(id) {
  try {
    console.log(id);
    let riddels = await readFileToRiddles();
    riddels = riddels.filter(riddle => riddle.id !== id)
    writeRiddleInDB(riddels);
    return true;
  } catch (err) {
    console.log("deleteRiddle error massege: " + err);
    return false;
  }
}
export { getRiddels, addRiddleToDB, updateRiddle, deleteRiddle };
