import express from "express";
import { config } from "dotenv";
import configRouts from "./routes/configRouts.js";

config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

configRouts(app);

app.listen(PORT, () => {
  console.log(`--- express server running on 'http://localhost:${PORT} ---`);
});
