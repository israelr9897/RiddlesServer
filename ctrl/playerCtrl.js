import {
  signupPlayerDB,
  getPlayerByIdDB,
  getPlayersDB,
  updatePlayerDB,
} from "../DAL/supebaseDal.js";
import {
  createToken,
  ReturnHashPassword,
  returnIsPassword,
} from "../functions.js";

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

export async function loginPlayer(req, res) {
  try {
    const { id, password } = req.body;
    const player = await getPlayerByIdDB(id);
    const isTrue = await returnIsPassword(password, player.hash_password);
    if (isTrue) {
      const token = createToken(player);
      res.header("authorization", token);
      res.json({ msg: "--- √ Login successful ---", Player: player });
    } else {
      res.status(403, "Forbidden").send({ msg: "Incorrect password" });
    }
  } catch (err) {
    console.log("login player error massage: ", err);
    res.status(500).json({ msg: err });
  }
}

export async function signupPlayer(req, res) {
  try {
    const player = req.body;
    player.hash_password = await ReturnHashPassword(player.hash_password);
    player.role = "user";
    const playerId = (await signupPlayerDB(player)).id;
    res.json({ msg: "--- √ successfully registered ---", plId: playerId });
  } catch (err) {
    console.log("add player error massage: ", err);
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
