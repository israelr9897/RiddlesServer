import express from "express";
import {
  getFiveWinPlayers,
  getPlayerByName,
  getPlayers,
  updatePlayer,
} from "../ctrl/playerCtrl.js";
import { verifyToken } from "../middleware/verifyTokenMiddle.js";
import { playerNameIsExists } from "../middleware/middlePlayer.js";

const router = express.Router();

router.get("/", getPlayers);
router.get("/fivewin", getFiveWinPlayers);
router.get("/:username",playerNameIsExists, getPlayerByName);
router.put("/:id", updatePlayer);

export default router;
