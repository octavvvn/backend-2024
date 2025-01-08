import db from "../database/connection.js";

class Student {
  // Mengambil semua data student
  static all() {
    return db
      .query("SELECT * FROM students")
      .then(([results]) => results)
      .catch((err) => {
        throw err; // Menangani error jika ada
      });
  }

  // Menambahkan data student
  static create(studentData) {
    const { nim, name, email, jurusan } = studentData;
    return db
      .query(
        "INSERT INTO students (nim, name, email, jurusan) VALUES (?, ?, ?, ?)",
        [nim, name, email, jurusan]
      )
      .then(([result]) => {
        return { id: result.insertId, ...studentData }; // Mengembalikan data dengan ID baru
      })
      .catch((err) => {
        throw err; // Menangani error jika ada
      });
  }
}

export default Student;
