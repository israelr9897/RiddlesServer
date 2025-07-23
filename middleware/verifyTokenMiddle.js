import jwt from "jsonwebtoken";

export async function verifyToken(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) {
    res.status(403).send({ msg: "Access denied" });
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = decoded;
      next();
    });
  }
}
