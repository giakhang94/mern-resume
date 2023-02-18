import jwt from "jsonwebtoken";
import UnauthenticatedError from "../errors/unAuth.js";
const auth = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    throw new UnauthenticatedError("login first");
  }
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: decode.userId };
    next();
  } catch (error) {
    throw new UnauthenticatedError("login first");
  }
};
export default auth;
