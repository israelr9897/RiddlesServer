import express from "express";
import {
  addRiddleToDB,
  deleteRiddle,
  getRiddels,
  updateRiddle,
} from "./ctrl/riddleCtrl.js";

const PORT = 3100;
const app = express();

app.use(express.json());

// app.get("/getId", (req, res) => {
//   res.send(countID);
//   countID++;
// });

// app.get("/riddles", );

// app.post("/riddles/addRiddle", );

// app.put("/riddles/updateRiddle")

// app.delete("/riddles/deleteRiddle");

app.listen(PORT, () => {
  console.log(`--- express server running on 'http://localhost:${PORT} ---`);
});
