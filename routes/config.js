import express from "express";
import riddleRouter from "./riddleRout.js";

export default function config(app) {
  app.use("/riddles", riddleRouter);
  app.use((req, res) => {
    res.status(404).json({ msg: "Route not find" });
  });
}
