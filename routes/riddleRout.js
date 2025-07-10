import express from "express";
import {
  getRiddles,
  addRiddle,
  updateRiddle,
  deleteRiddle,
} from "../ctrl/riddleCtrl.js";

const router = express.Router();

router.get("/", getRiddles);
router.post("/addRiddle", addRiddle);
router.put("/updateRiddle", updateRiddle);
router.delete("/deleteRiddle", deleteRiddle);

export default router;
