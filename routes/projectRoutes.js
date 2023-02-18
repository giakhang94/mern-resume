import express from "express";
import auth from "../middlewares/auth.js";
import {
  createPJ,
  getAllProject,
  getPJById,
  updateProject,
} from "../controllers/projectController.js";
import uploadFile from "../middlewares/uploadFile.js";
const router = express.Router();

router.post("/create", auth, uploadFile.single("thumb"), createPJ);
router.get("/", getAllProject);
router.patch("/:id", auth, uploadFile.single("thumb"), updateProject);
router.get("/:id", auth, getPJById);

export default router;
