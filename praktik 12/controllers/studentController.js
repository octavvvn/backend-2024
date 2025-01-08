import Student from "../models/student.js"; // Mengimpor model Student

class StudentController {
  // Menampilkan semua students
  async index(req, res) {
    try {
      const students = await Student.all();
      res.json({
        message: "Menampilkan semua students",
        data: students,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Gagal mendapatkan data student", error });
    }
  }

  // Menambahkan data student
  async store(req, res) {
    const { nim, name, email, jurusan } = req.body;
    try {
      const newStudent = await Student.create({ nim, name, email, jurusan });
      res.status(201).json({
        message: "Data student berhasil ditambahkan",
        data: newStudent,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Gagal menambahkan data student", error });
    }
  }
}

export default new StudentController();
