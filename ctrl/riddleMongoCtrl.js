import {
  deleteRiddleDB,
  getRiddlesDB,
  insertRiddleDB,
  updateRiddleDB,
} from "../DAL/mongoDal.js";

export async function getAllRiddles(req, res) {
  try {
    const riddles = await getRiddlesDB();
    res.json(riddles);
  } catch (err) {
    console.log("get riddle error massege: " + err);
    res
      .status(500, { "content-type": "application/json" })
      .json({ msg: "Faild read data." });
  }
}
export async function insertRiddle(req, res) {
  try {
    const riddle = req.body;
    const result = await insertRiddleDB(riddle);
    res.json({ msg: "added riddle" });
  } catch (err) {
    console.log("insert riddle error massege: " + err);
    res
      .status(500, { "content-type": "application/json" })
      .json({ msg: "Faild read data." });
  }
}

export async function UpdateRiddle(req, res) {
  try {
    const riddle = req.body;
    delete riddle._id;
    const result = await updateRiddleDB(req.params.id, riddle);
    res.json({ msg: "update riddle" });
  } catch (err) {
    console.log("update riddle error massege: " + err);
    res
      .status(500, { "content-type": "application/json" })
      .json({ msg: "Faild read data." });
  }
}
export async function deleteRiddle(req, res) {
  try {
    console.log(req.params.id);
    const result = await deleteRiddleDB(req.params.id);
    res.json({ msg: "delete riddle" });
  } catch (err) {
    console.log("delete riddle error massege: " + err);
    res
      .status(500, { "content-type": "application/json" })
      .json({ msg: "Faild read data." });
  }
}
