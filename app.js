import express from "express";
import config from "./routes/config.js";
import { initAllRiddlesAndCountId } from "./ctrl/riddleCtrl.js";

const PORT = 3100;
const app = express();

app.use(express.json());
config(app);

app.listen(PORT, () => {
  console.log(`--- express server running on 'http://localhost:${PORT} ---`);
  initAllRiddlesAndCountId()
});
