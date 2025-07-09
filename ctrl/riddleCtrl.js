import { readFileToRiddles, writeRiddleInDB } from "../DAL/DALriddles.js";
let countID = 6;

async function getRiddels(req, res) {
  try {
    const data = await readFileToRiddles();
    if (data) {
      res.json(data);
    } else {
      res
        .status(500, { "content-type": "application/json" })
        .json({ msg: "Faild read data." });
    }
  } catch (err) {
    console.log("get riddle error massege: " + err);
  }
}

async function addRiddle(req, res) {
  try {
    const data = req.body;
    data.id = ++countID;
    const riddels = await readFileToRiddles();
    riddels.push(data);
    writeRiddleInDB(riddels);
    res
      .status(201, { "content-type": "application/json" })
      .json({ msg: "The riddle added successfully!" });
  } catch (err) {
    console.log("addRiddleToDB error massege: " + err);
    res
      .status(500, { "content-type": "application/json" })
      .json({ msg: "addRiddleToDB error massege: " + err });
  }
}

async function updateRiddle(req, res) {
  try {
    const data = req.body;
    const riddels = await readFileToRiddles();
    let riddle = riddels.find((r) => r.id === data.id);
    Object.assign(riddle, data);
    writeRiddleInDB(riddels);
    res
      .status(205, { "content-type": "application/json" })
      .json({ msg: "The riddle added successfully!" });
  } catch (err) {
    console.log("updateRiddle error massege: " + err);
    res
      .status(500, { "content-type": "application/json" })
      .json({ msg: "Faild update data." });
  }
}

async function deleteRiddle(req, res) {
  try {
    let riddels = await readFileToRiddles();
    riddels = riddels.filter((riddle) => riddle.id !== req.body.id);
    writeRiddleInDB(riddels);
    res
      .status(200, { "content-type": "application/json" })
      .json({ msg: "The riddle deleted successfully!" });
  } catch (err) {
    console.log("deleteRiddle error massege: " + err);
    res
      .status(500, { "content-type": "application/json" })
      .json({ msg: "Faild deleted data." });
  }
}
export { getRiddels, addRiddle, updateRiddle, deleteRiddle };
