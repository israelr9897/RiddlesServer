import {
    signupPlayerDB,
    getPlayerByIdDB,
  } from "../DAL/supebaseDal.js";
  import {
    createToken,
    ReturnHashPassword,
    returnIsPassword,
  } from "../functions.js";


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
      player.hash_password = await ReturnHashPassword(player.hash_password);
      player.role = "user";
      const playerId = (await signupPlayerDB(player)).id;
      res.json({ msg: "--- √ successfully registered ---", plId: playerId });
    } catch (err) {
      console.log("add player error massage: ", err);
      res.status(500).json({ msg: err });
    }
  }