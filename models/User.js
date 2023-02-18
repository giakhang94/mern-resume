import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "please enter username"],
    minLength: 3,
    maxLength: 20,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "please enter password"],
    minLength: 6,
    max50ength: 50,
    trim: true,
  },
});
UserSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(user.password, 8);
  next();
});
UserSchema.methods.createJWT = async function (next) {
  const token = jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
  return token;
};
const User = mongoose.model("User", UserSchema);
export default User;
