import express from "express";
import {
  getAllRiddles,
  insertRiddle,
  UpdateRiddle,
  deleteRiddle,
} from "../ctrl/riddleCtrl.js";
import {
  verifyRoleAdminMiddle,
  verifyRoleUserMiddle,
} from "../middleware/verifyRoleUserMiddl.js";
import { idIsExists } from "../middleware/middleRiddle.js";

const router = express.Router();
router.get("/", getAllRiddles);

//Access Permission Checker - User
router.use(verifyRoleUserMiddle);
router.post("/addRiddle", insertRiddle);


//Access Permission Checker - Admin
router.use(verifyRoleAdminMiddle);
router.use(idIsExists);
router.put("/updateRiddle/:id", UpdateRiddle);
router.delete("/deleteRiddle/:id", deleteRiddle);

export default router;
