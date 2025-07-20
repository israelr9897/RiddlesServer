import express from "express";
// import {
//   getRiddles,
//   addRiddle,
//   updateRiddle,
//   deleteRiddle,
// } from "../ctrl/riddleCtrl.js";
import { idIsExists } from "../middleware/middleRiddle.js";
import { getAllRiddles, insertRiddle, UpdateRiddle, deleteRiddle } from "../ctrl/riddleMongoCtrl.js";


const router = express.Router();
// router.get("/", getRiddles);
router.get("/", getAllRiddles);
router.post("/addRiddle", insertRiddle);
// router.post("/addRiddle", addRiddle);
// router.use(idIsExists)
router.put("/updateRiddle/:id", UpdateRiddle);
// router.put("/updateRiddle", updateRiddle);
router.delete("/deleteRiddle/:id", deleteRiddle);
// router.delete("/deleteRiddle", deleteRiddle);

export default router;
