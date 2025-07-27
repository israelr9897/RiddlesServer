import express from "express";
import { playerIdIsExists } from "../middleware/middlePlayer.js";
import {
  getPlayerByID,
  getPlayers,
  updatePlayer,
} from "../ctrl/playerCtrl.js";
import { verifyToken } from "../middleware/verifyTokenMiddle.js";

const router = express.Router();

router.get("/", getPlayers);
router.get("/:id",verifyToken, getPlayerByID);
router.put("/:id", updatePlayer);

export default router;
