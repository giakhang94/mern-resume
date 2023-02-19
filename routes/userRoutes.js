import express from "express";
import auth from "../middlewares/auth.js";
import {
  getCurrentUser,
  login,
  logout,
  register,
} from "../controllers/userController.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/getCurrentUser", auth, getCurrentUser);
router.get("/logout", auth, logout);

export default router;
