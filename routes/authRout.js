import express from "express";
import { signupPlayer, loginPlayer } from "../ctrl/authCtrl.js";

const router = express.Router();

router.post("/login", loginPlayer);
router.post("/signup", signupPlayer);

export default router;
