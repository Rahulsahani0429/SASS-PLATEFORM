// routes/uploadRoutes.js
import express from "express";
import { uploadFile } from "../controllers/uploadController.js";
import { upload } from "../middlewares/uploadMiddleware.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/file", protect, upload.single("file"), uploadFile);

export default router;
