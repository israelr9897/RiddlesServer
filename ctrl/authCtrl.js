import { signupPlayerDB, getPlayerByNameDB } from "../DAL/supebaseDal.js";
import {
  createToken,
  ReturnHashPassword,
  returnIsPassword,
} from "../functions.js";

export async function loginPlayer(req, res) {
  try {
    const { username, password } = req.body;
    const player = await getPlayerByNameDB(username);
    const isTrue = await returnIsPassword(password, player.hash_password);
    if (isTrue) {
      const token = createToken(player);
      res.header("authorization", token);
      res.json({ msg: "--- √ Login successful ---", Player: player });
    } else {
      res.status(403, "Forbidden").send({ msg: "Incorrect password" });
      return;
    }
  } catch (err) {
    console.log("login player error massage: ", err);
    res.status(500).json({ msg: err });
  }
}

export async function signupPlayer(req, res) {
  try {
    const player = req.body;
    console.log(player);
    player.hash_password = await ReturnHashPassword(player.hash_password);
    player.role = "user";
    console.log(player.hash_password);
    const playerId = (await signupPlayerDB(player)).id;
    res.json({ msg: "--- √ successfully registered ---" });
  } catch (err) {
    if (err.code === "23505") {
      res.status(406).json({
        msg: "The user name is taken, please choose another user",
      });
      return;
    }
    console.log("add player error massage: ", err);
    res.status(406).json({ msg: err });
  }
}
