import { readFile, writeFile } from "../DAL/fsDAL.js";
let countID;
let ALLPLAYERS;
const FILE_NAME = "players.txt";

async function initAllPlayersAndCountId() {
  ALLPLAYERS = await readFile(FILE_NAME);
  countID = ALLPLAYERS.length;
}

async function getPlayers(req, res) {
  try {
      res.json(ALLPLAYERS);
  } catch (err) {
    console.log("get players error massege: " + err);
    res
      .status(500, { "content-type": "application/json" })
      .json({ msg: "Faild read data." });
  }
}

function getPlayerByID(req, res) {
  try {
    const id = req.params.id;
    const player = ALLPLAYERS.find((p) => p.id === Number(id));
    if (player) {
      res.json(player);
    }
  } catch (err) {
    console.log("get player by id error massege: " + err);
    res
      .status(500, { "content-type": "application/json" })
      .json({ msg: "Faild read data." });
  }
}

export {
    ALLPLAYERS,
    getPlayers,
    initAllPlayersAndCountId,
    getPlayerByID
}