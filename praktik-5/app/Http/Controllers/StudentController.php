<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index()
    {
        $students = Student::all();

        return response()->json([
            'message' => 'Get all student',
            'data' => $students
        ], 200);
    }
    public function store(Request $request)
    {
        $student = Student::create([
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan,
        ]);

        return response()->json([
            'message' => 'Student created successfully',
            'data' => $student
        ], 201);
    }

    public function update(Request $request, $id)
    {
        // Find the student by ID
        $student = Student::findOrFail($id);

        // Update student with new data
        $student->update([
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan,
        ]);

        return response()->json([
            'message' => 'Student updated successfully',
            'data' => $student
        ], 200);
    }

    // Method to delete a student
    public function destroy($id)
    {
        $student = Student::findOrFail($id);
        $student->delete();

        return response()->json([
            'message' => 'Student deleted successfully'
        ], 200);
    }
}
