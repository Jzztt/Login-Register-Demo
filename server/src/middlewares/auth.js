import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const { ACCESS_TOKEN_SECRET } = process.env;

const verifyToken = (req, res, next) => {
  const bearerToken = req.headers["authorization"];
  const token = bearerToken.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ false: false, message: "Access Token not found" });
  }
  try {
    const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET);
    req.user = decoded.id;
    next();
  } catch (error) {
    return res
      .status(403)
      .json({ false: false, message: "Access denied. Invalid token." });
  }
};
export { verifyToken };
