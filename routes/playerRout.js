import express from "express";
// import { getPlayerByID, getPlayers } from "../ctrl/playerCtrl.js";
import { playerIdIsExists } from "../middleware/middlePlayer.js";
import {
  addPlayer,
  getPlayerByID,
  getPlayers,
  updatePlayer,
} from "../ctrl/playerCtrl.js";

const router = express.Router();

router.get("/", getPlayers);
router.get("/:id", getPlayerByID);
router.post("/addPlayer", addPlayer);
router.put("/:id", updatePlayer);

export default router;
