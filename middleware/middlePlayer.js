import { getPlayersDB } from "../DAL/supebaseDal.js";

export async function playerNameIsExists(req, res, next) {
  try {
    const players = await getPlayersDB()
    players.forEach((p) => {
      if (p.username === Number(req.params.username)) {
        next();
      }
    });
    res
      .status(404, { "content-type": "application/json" })
      .json({ msg: "id isn't find" });
  } catch (err) {
    console.log("id is exists for player error massege: " + err);
    res
      .status(404, { "content-type": "application/json" })
      .json({ msg: "addRiddleToDB error massege: " + err });
  }
}