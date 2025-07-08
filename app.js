import express from "express";
import {
  addRiddleToDB,
  deleteRiddle,
  getRiddels,
  updateRiddle,
} from "./services/controlerApp.js";

let countID = 7;
const PORT = 3100;
const app = express();

app.use(express.json());

app.get("/getId", (req, res) => {
  res.send(countID);
  countID++;
});

app.get("/riddle", async (req, res) => {
  const data = await getRiddels();
  if (data) {
    res.json(data);
  } else {
    res
      .status(500, { "content-type": "application/json" })
      .json({ msg: "Faild read data." });
  }
});

app.post("/riddles/addRiddle", async (req, res) => {
  if (addRiddleToDB(req.body)) {
    res
      .status(201, { "content-type": "application/json" })
      .json({ msg: "The riddle added successfully!" });
  } else {
    res
      .status(500, { "content-type": "application/json" })
      .json({ msg: "Faild write data." });
  }
});

app.put("/riddles/updateRiddle", (req, res) => {
  if (updateRiddle(req.body)) {
    res
      .status(205, { "content-type": "application/json" })
      .json({ msg: "The riddle added successfully!" });
  } else {
    res
      .status(500, { "content-type": "application/json" })
      .json({ msg: "Faild update data." });
  }
});

app.delete("/riddles/deleteRiddle", (req, res) => {
  if (deleteRiddle(req.body.idRiddle)) {
    res
      .status(200, { "content-type": "application/json" })
      .json({ msg: "The riddle deleted successfully!" });
  } else {
    res
      .status(500, { "content-type": "application/json" })
      .json({ msg: "Faild deleted data." });
  }
});

app.listen(PORT, () => {
  console.log(`--- express server running on 'http://localhost:${PORT} ---`);
});
