<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    // Mengambil semua data mahasiswa
    public function index()
    {
        $students = Student::all();

        if ($students->isEmpty()) {
            return response()->json([
                'message' => 'Data mahasiswa tidak ditemukan'
            ], 404);
        }

        return response()->json([
            'message' => 'Data semua mahasiswa berhasil diambil',
            'data' => $students
        ], 200);
    }

    // Mengambil satu data mahasiswa berdasarkan ID
    public function show($id)
    {
        $student = Student::find($id);

        if (!$student) {
            return response()->json([
                'message' => 'Data mahasiswa dengan ID ' . $id . ' tidak ditemukan'
            ], 404);
        }

        return response()->json([
            'message' => 'Data mahasiswa berhasil diambil',
            'data' => $student
        ], 200);
    }

    // Menambah data mahasiswa baru
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nama' => 'required|string',
            'nim' => 'required|string|unique:students,nim',
            'email' => 'required|email|unique:students,email',
            'jurusan' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Gagal menambahkan data mahasiswa, data tidak lengkap atau format salah',
                'errors' => $validator->errors()
            ], 400);
        }

        $student = Student::create($request->only('nama', 'nim', 'email', 'jurusan'));

        return response()->json([
            'message' => 'Data mahasiswa berhasil ditambahkan',
            'data' => $student
        ], 201);
    }

    // Mengupdate data mahasiswa berdasarkan ID
    public function update(Request $request, $id)
    {
        $student = Student::find($id);

        if (!$student) {
            return response()->json([
                'message' => 'Data mahasiswa dengan ID ' . $id . ' tidak ditemukan'
            ], 404);
        }

        // Validasi data yang akan diupdate
        $validator = Validator::make($request->all(), [
            'nama' => 'sometimes|required|string',
            'nim' => 'sometimes|required|string|unique:students,nim,' . $id,
            'email' => 'sometimes|required|email|unique:students,email,' . $id,
            'jurusan' => 'sometimes|required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Gagal memperbarui data mahasiswa, data tidak lengkap atau format salah',
                'errors' => $validator->errors()
            ], 400);
        }

        // Mengupdate data mahasiswa dengan data baru
        $student->update($request->only('nama', 'nim', 'email', 'jurusan'));

        return response()->json([
            'message' => 'Data mahasiswa berhasil diperbarui',
            'data' => $student
        ], 200);
    }

    // Menghapus data mahasiswa berdasarkan ID
    public function destroy($id)
    {
        $student = Student::find($id);

        if (!$student) {
            return response()->json([
                'message' => 'Data mahasiswa dengan ID ' . $id . ' tidak ditemukan, penghapusan gagal'
            ], 404);
        }

        $student->delete();

        return response()->json([
            'message' => 'Data mahasiswa berhasil dihapus'
        ], 200);
    }
}
