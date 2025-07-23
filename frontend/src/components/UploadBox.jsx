import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const UploadBox = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      return toast.error("कृपया कोई फ़ाइल चुनें!");
    }

    try {
      setUploading(true);

      const formData = new FormData();
      formData.append("file", file);

      const res = await axios.post(
        "http://localhost:5000/api/upload", // 🔁 Replace with your backend/cloudinary upload URL
        formData
      );

      toast.success("फ़ाइल सफलतापूर्वक अपलोड हो गई!");
      console.log("Uploaded file URL:", res.data.url);
    } catch (error) {
      toast.error("फ़ाइल अपलोड में त्रुटि!");
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#f0fdfa] via-[#e0f7ff] to-[#e6ecff] p-8 rounded-3xl shadow-xl max-w-lg mx-auto border border-gray-100">

      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Upload Your File
      </h2>

      <label className="block text-sm font-medium text-gray-600 mb-2">
        Choose File:
      </label>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-6 w-full text-gray-700 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        onClick={handleUpload}
        disabled={uploading}
        className={`w-full py-3 rounded-xl font-semibold text-white transition ${
          uploading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
        }`}
      >
        {uploading ? "Uploading..." : "Upload File"}
      </button>
    </div>
  );
};

export default UploadBox;
