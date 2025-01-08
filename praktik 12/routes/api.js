import express from "express";
import StudentController from "../controllers/studentController.js"; // Mengimpor controller

const router = express.Router();

// Menampilkan semua students
router.get("/students", StudentController.index);

// Menambahkan student baru
router.post("/students", StudentController.store);

export default router;
