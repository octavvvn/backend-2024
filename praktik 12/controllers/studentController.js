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
      return res.status(400).json({ error: "All fields are required" });
    }
    const newStudentId = await createStudent({ nim, name, email, jurusan });
    res.status(201).json({ id: newStudentId, nim, name, email, jurusan });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create student" });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { nim, name, email, jurusan } = req.body; // Menambahkan nim
    await updateStudent(id, { nim, name, email, jurusan });
    res.json({ message: "Student updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update student" });
  }
};

export const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteStudent(id);
    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete student" });
  }
};

export const show = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await getStudentById(id);
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ error: "Student not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve student" });
  }
};

export const index = async (req, res) => {
  try {
    const students = await getAllStudents();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve students" });
  }
};
