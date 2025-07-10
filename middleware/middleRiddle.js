import express from "express";
import { ALLRIDDLES } from "../ctrl/riddleCtrl.js";

function idIsExists(req, res, next) {
  try {
    ALLRIDDLES.forEach((r) => {
      if (r.id === Number(req.body.id)) {
        next();
      } else {
        res
          .status(404, { "content-type": "application/json" })
          .json({ msg: "id isn't find" });
        }
    });
} catch (err) {
    console.log("id is exists error massege: " + err);
    res
      .status(404, { "content-type": "application/json" })
      .json({ msg: "addRiddleToDB error massege: " + err });
  }
}

export { idIsExists };
