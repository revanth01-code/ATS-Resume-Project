import express from "express";
import { verifyAuth } from "../middleware/verifyAuth.js";
import { upload } from "../middleware/upload.js";
import { uploadResume, analyzeResume } from "../controllers/resumeController.js";

const router = express.Router();

router.post("/upload", verifyAuth, upload.single("resume"), uploadResume);
router.post("/analyze", verifyAuth, analyzeResume);

export default router;