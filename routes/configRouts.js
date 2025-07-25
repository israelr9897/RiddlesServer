import riddleRouter from "./riddleRout.js";
import playerRouter from "./playerRout.js";

export default function config(app) {
  app.use("/riddles", riddleRouter);
  app.use("/players", playerRouter);
  app.use((req, res) => {
    res.status(404).json({ msg: "Route not find" });
  });
}
