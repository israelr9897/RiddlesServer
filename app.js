import express from "express";
import configRouts from "./routes/configRouts.js";
import { initAllRiddlesAndCountId } from "./ctrl/riddleCtrl.js";
import { config } from "dotenv";
import { initAllPlayersAndCountId } from "./ctrl/playerCt.js";

config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
configRouts(app);

app.listen(PORT, () => {
  console.log(`--- express server running on 'http://localhost:${PORT} ---`);
  initAllRiddlesAndCountId();
  initAllPlayersAndCountId();
});
