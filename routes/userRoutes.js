import express from "express";
import auth from "../middlewares/auth.js";
import {
  getCurrentUser,
  login,
  register,
} from "../controllers/userController.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/getCurrentUser", auth, getCurrentUser);

export default router;
