import riddleRouter from "./riddleRout.js";
import playerRouter from "./playerRout.js";
import signRouter from "./signRout.js";
import { verifyToken } from "../middleware/verifyTokenMiddle.js";

export default function config(app) {
  app.use("/sign", signRouter);
  app.use("/riddles", riddleRouter);
  app.use("/players", playerRouter);
  app.use((req, res) => {
    res.status(404).json({ msg: "Route not find" });
  });
}
