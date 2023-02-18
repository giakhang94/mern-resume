import express from "express";
import auth from "../middlewares/auth.js";
import { createPJ, getAllProject } from "../controllers/projectController.js";
import uploadFile from "../middlewares/uploadFile.js";
const router = express.Router();

router.post("/create", auth, uploadFile.single("thumb"), createPJ);
router.get("/", getAllProject);

export default router;
