import { getPlayersDB } from "../DAL/supebaseDal.js";

async function playerIdIsExists(req, res, next) {
  try {
    const players = await getPlayersDB()
    players.forEach((p) => {
      if (p.id === Number(req.params.id)) {
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

export { playerIdIsExists };
