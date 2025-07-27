export async function verifyRoleUserMiddle(req, res, next) {
  if (req.user.role === "user" || "admin") {
    next();
  } else {
    res.status(403).send({ msg: "Access denied" });
  }
}

export async function verifyRoleAdminMiddle(req, res, next) {
  if (req.user.role === "admin") {
    next();
  } else {
    res.status(403).send({ msg: "Access denied" });
  }
}
