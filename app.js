import express from "express";
import { config } from "dotenv";
import configRouts from "./routes/configRouts.js";
import cors from "cors"

config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors())
app.use((req, res, next) => {
  console.log(req.method);
  console.log(req.url);
  next();
});
configRouts(app);

app.listen(PORT, () => {
  console.log(`--- express server running on 'http://127.0.0.1::${PORT} ---`);
});
