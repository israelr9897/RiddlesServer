import { ALLRIDDLES } from "../ctrl/riddleCtrl.js";
import { getRiddlesByIdDB } from "../DAL/mongoDal.js";

async function idIsExists(req, res, next) {
  try {
    const riddle = await getRiddlesByIdDB(req.params.id);
    if (riddle) {
      next();
      return;
    }
    res
      .status(404, { "content-type": "application/json" })
      .json({ msg: "id isn't find" });
  } catch (err) {
    console.log("id is exists for riddle error massege: " + err);
    res
      .status(404, { "content-type": "application/json" })
      .json({ msg: "addRiddleToDB error massege: " + err });
  }
}

export { idIsExists };
