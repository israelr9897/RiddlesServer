import express from "express";
import { getPlayerByID, getPlayers } from "../ctrl/playerCt.js";
import { playerIdIsExists } from "../middleware/middlePlayer.js";

const router = express.Router();

router.get("/", getPlayers);
router.get("/:id",playerIdIsExists,  getPlayerByID);
// router.post("/addRiddle", addRiddle);
// router.put("/updateRiddle", updateRiddle);
// router.delete("/deleteRiddle", deleteRiddle);

export default router;
