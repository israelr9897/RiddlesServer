import express from "express";
import {
  getFiveWinPlayers,
  getPlayerByID,
  getPlayers,
  updatePlayer,
} from "../ctrl/playerCtrl.js";
import { verifyToken } from "../middleware/verifyTokenMiddle.js";

const router = express.Router();

router.get("/", getPlayers);
router.get("/fivewin", getFiveWinPlayers);
router.get("/:id", getPlayerByID);
router.put("/:id", updatePlayer);

export default router;
