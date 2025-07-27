import {
  getPlayerByIdDB,
  getPlayersDB,
  updatePlayerDB,
} from "../DAL/supebaseDal.js";

export async function getPlayers(req, res) {
  try {
    const { data } = await getPlayersDB();
    res.json(data);
  } catch (err) {
    console.log("get players error massage: ", err);
    res.status(500).json({ msg: err });
  }
}

export async function getPlayerByID(req, res) {
  try {
    const player = await getPlayerByIdDB(req.params.id);
    res.json(player);
  } catch (err) {
    console.log("get player by id error massage: ", err);
    res.status(500).json({ msg: err });
  }
}

export async function updatePlayer(req, res) {
  try {
    await updatePlayerDB(req.params.id, req.body);
    res.json({ msg: "--- update to player ---" });
  } catch (err) {
    console.log("update player error massage: ", err);
    res.status(500).json({ msg: err });
  }
}
