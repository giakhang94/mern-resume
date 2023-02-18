import User from "../models/User.js";
import BadRequestError from "../errors/badRequest.js";
import NotFoundError from "../errors/not-found.js";
import UnauthenticatedError from "../errors/unAuth.js";
import bcrypt from "bcrypt";
const register = async (req, res) => {
  const user = await User.create(req.body);
  await user.save();
  user.password = undefined;
  res.status(200).json({ user });
};
const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequestError("Please provide all field");
  }
  const user = await User.findOne({ username });
  if (!user) {
    throw new NotFoundError("User not found");
  }
  const isMatch = bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new UnauthenticatedError("Password wrong");
  }
  const token = await user.createJWT();
  const expireDay = 1000 * 60 * 60 * 24; //1day
  res.cookie("token", token, {
    httpOnly: true, // only browser => very very important
    expires: new Date(Date.now() + expireDay),
    secure: process.env.NODE_ENV === "production",
    //only send the cookie if the protocol is HTTPS => secure: process.env.NOE_ENV (khi len production => true)
  });
  user.password = undefined;
  res.status(201).json({ user });
};
const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  res.status(200).json({ user });
};
export { register, login, getCurrentUser };
