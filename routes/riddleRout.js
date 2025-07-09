import express from "express";
import { getRiddels, addRiddle, updateRiddle, deleteRiddle } from "../ctrl/riddleCtrl.js";

const router = express.Router();

router.get("/", getRiddels);
router.post("/addRiddle");
router.put("/updateRiddle");
router.delete("/deleteRiddle");