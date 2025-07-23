import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export function ReturnHashPassword(pass) {
  return bcrypt.hash(pass, 10);
}

export async function returnIsPassword(pass, hashPass) {
  return await bcrypt.compare(pass, hashPass);
}

export function createToken(player) {
  const token = jwt.sign(
    {
      username: player.username,
      role: player.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  return token;
}
