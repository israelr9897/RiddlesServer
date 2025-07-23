import express from "express";
// import { getPlayerByID, getPlayers } from "../ctrl/playerCtrl.js";
import { playerIdIsExists } from "../middleware/middlePlayer.js";
import {
  signupPlayer,
  getPlayerByID,
  getPlayers,
  updatePlayer,
  loginPlayer,
} from "../ctrl/playerCtrl.js";
import { verifyToken } from "../middleware/verifyTokenMiddle.js";

const router = express.Router();

router.get("/", getPlayers);
router.get("/:id",verifyToken, getPlayerByID);
router.post("/login", loginPlayer);
router.post("/signup", signupPlayer);
router.put("/:id", updatePlayer);

export default router;
