import db from "../database/connection.js";

// Get all students
export const getAllStudents = async () => {
  const [rows] = await db.query("SELECT * FROM students");
  return rows;
};

// Get student by id
export const getStudentById = async (id) => {
  const [rows] = await db.query("SELECT * FROM students WHERE id = ?", [id]);
  return rows[0];
};

// Create a new student
export const createStudent = async (studentData) => {
  const { nim, name, email, jurusan } = studentData;
  const [result] = await db.query(
    "INSERT INTO students (nim, name, email, jurusan) VALUES (?, ?, ?, ?)",
    [nim, name, email, jurusan]
  );
  if (result.affectedRows === 0) {
    throw new Error("Failed to insert student");
  }
  return result.insertId;
};

// Update student by id
export const updateStudent = async (id, studentData) => {
  const { nim, name, email, jurusan } = studentData; // Menambahkan nim
  await db.query(
    "UPDATE students SET nim = ?, name = ?, email = ?, jurusan = ? WHERE id = ?",
    [nim, name, email, jurusan, id]
  );
};

// Delete student by id
export const deleteStudent = async (id) => {
  await db.query("DELETE FROM students WHERE id = ?", [id]);
};
