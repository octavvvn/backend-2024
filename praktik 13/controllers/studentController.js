import {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} from "../models/student.js";

export const store = async (req, res) => {
  try {
    const { nim, name, email, jurusan } = req.body;
    if (!nim || !name || !email || !jurusan) {
      return res.status(400).json({ error: "All fields are required" }); // 400 Bad Request
    }
    const newStudentId = await createStudent({ nim, name, email, jurusan });
    res.status(201).json({
      // 201 Created
      message: "Data berhasil ditambahkan!",
      id: newStudentId,
      nim,
      name,
      email,
      jurusan,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create student" }); // 500 Internal Server Error
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { nim, name, email, jurusan } = req.body;
    await updateStudent(id, { nim, name, email, jurusan });
    res.status(200).json({ message: "Data mahasiswa berhasil diperbarui!" }); // 200 OK
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update student" }); // 500 Internal Server Error
  }
};

export const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteStudent(id);
    res.status(200).json({ message: "Data mahasiswa berhasil dihapus!" }); // 200 OK
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete student" }); // 500 Internal Server Error
  }
};

export const show = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await getStudentById(id);
    if (student) {
      res.status(200).json({
        // 200 OK
        message: "Data mahasiswa ditemukan!",
        student,
      });
    } else {
      res.status(404).json({ error: "Student not found" }); // 404 Not Found
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve student" }); // 500 Internal Server Error
  }
};

export const index = async (req, res) => {
  try {
    const students = await getAllStudents();
    res.status(200).json({
      // 200 OK
      message: "Data mahasiswa berhasil diambil!",
      students,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve students" }); // 500 Internal Server Error
  }
};
