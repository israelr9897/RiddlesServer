// import { readFile, writeFile } from "../DAL/fsDAL.js";

// let countID;
// let ALLRIDDLES;
// const FILE_NAME = "riddles.txt";

// async function initAllRiddlesAndCountId() {
//   ALLRIDDLES = await readFile(FILE_NAME);
//   countID = ALLRIDDLES.length;
// }

// async function getRiddles(req, res) {
//   try {
//     res.json(ALLRIDDLES);
//   } catch (err) {
//     console.log("get riddle error massege: " + err);
//     res
//       .status(500)
//       .json({ msg: "Faild read data." });
//   }
// }

// async function addRiddle(req, res) {
//   try {
//     const data = req.body;
//     data.id = ++countID;
//     ALLRIDDLES.push(data);
//     writeFile(FILE_NAME, ALLRIDDLES);
//     res
//       .status(201, { "content-type": "application/json" })
//       .json({ msg: "The riddle added successfully!" });
//   } catch (err) {
//     console.log("addRiddleToDB error massege: " + err);
//     res
//       .status(500, { "content-type": "application/json" })
//       .json({ msg: "addRiddleToDB error massege: " + err });
//   }
// }

// async function updateRiddle(req, res) {
//   try {
//     const data = req.body;
//     let riddle = ALLRIDDLES.find((r) => r.id === data.id);
//     Object.assign(riddle, data);
//     writeFile(FILE_NAME, ALLRIDDLES);
//     res.json({ msg: "The riddle update successfully!" });
//   } catch (err) {
//     console.log("updateRiddle error massege: " + err);
//     res
//       .status(500, { "content-type": "application/json" })
//       .json({ msg: "Faild update data." });
//   }
// }

// async function deleteRiddle(req, res) {
//   try {
//     ALLRIDDLES = ALLRIDDLES.filter((riddle) => riddle.id !== req.body.id);
//     writeFile(FILE_NAME, ALLRIDDLES);
//     res
//       .status(200, { "content-type": "application/json" })
//       .json({ msg: "The riddle deleted successfully!" });
//   } catch (err) {
//     console.log("deleteRiddle error massege: " + err);
//     res
//       .status(500, { "content-type": "application/json" })
//       .json({ msg: "Faild deleted data." });
//   }
// }
// export {
//   ALLRIDDLES,
//   initAllRiddlesAndCountId,
//   getRiddles,
//   addRiddle,
//   updateRiddle,
//   deleteRiddle,
// };
