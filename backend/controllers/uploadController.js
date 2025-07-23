// controllers/uploadController.js
import cloudinary from "../config/cloudinary.js";

export const uploadFile = async (req, res) => {
  try {
    // req.file में Multer का डाटा मिलेगा
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Cloudinary पर upload करें
    const result = await cloudinary.uploader.upload(file.path, {
      folder: "saas_uploads",
    });

    return res.status(200).json({
      message: "File uploaded successfully",
      url: result.secure_url,
    });
  } catch (err) {
    return res.status(500).json({ message: "Upload failed", error: err.message });
  }
};
