import express from "express";
import {
  index,
  show,
  store,
  update,
  destroy,
} from "../controllers/studentController.js"; // Mengimpor controller

const router = express.Router();

// Route untuk mendapatkan semua mahasiswa
router.get("/students", index);

// Route untuk mendapatkan data mahasiswa berdasarkan id
router.get("/students/:id", show);

// Route untuk membuat mahasiswa baru
router.post("/students", store);

// Route untuk mengupdate data mahasiswa berdasarkan id
router.put("/students/:id", update);

// Route untuk menghapus mahasiswa berdasarkan id
router.delete("/students/:id", destroy);

export default router;
