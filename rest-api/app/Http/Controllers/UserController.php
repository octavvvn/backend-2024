<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $animals = session()->get('animals', ['kucing', 'ayam', 'ikan']);
        return response()->json($animals);
    }

    public function store(Request $request)
    {
        $newAnimal = $request->input('name');

        if ($newAnimal) {
            $animals = session()->get('animals', ['kucing', 'ayam', 'ikan']);
            $animals[] = $newAnimal;
            session()->put('animals', $animals);

            return response()->json(['message' => 'Hewan berhasil ditambahkan', 'animals' => $animals]);
        }

        return response()->json(['message' => 'Nama hewan tidak boleh kosong'], 400);
    }

    public function show($id)
    {
        $animals = session()->get('animals', ['kucing', 'ayam', 'ikan']);

        if (isset($animals[$id])) {
            return response()->json(['animal' => $animals[$id]]);
        }

        return response()->json(['message' => 'Data hewan tidak ditemukan'], 404);
    }

    public function update(Request $request, $id)
    {
        $updatedAnimal = $request->input('name');
        $animals = session()->get('animals', ['kucing', 'ayam', 'ikan']);

        if (isset($animals[$id]) && $updatedAnimal) {
            $animals[$id] = $updatedAnimal;
            session()->put('animals', $animals);
            return response()->json(['message' => 'Hewan berhasil diupdate', 'animals' => $animals]);
        }

        return response()->json(['message' => 'Data hewan tidak ditemukan atau nama hewan tidak valid'], 400);
    }

    public function destroy($id)
    {
        $animals = session()->get('animals', ['kucing', 'ayam', 'ikan']);

        if (isset($animals[$id])) {
            unset($animals[$id]);
            session()->put('animals', array_values($animals));
            return response()->json(['message' => 'Hewan berhasil dihapus', 'animals' => array_values($animals)]);
        }

        return response()->json(['message' => 'Data hewan tidak ditemukan'], 400);
    }
}