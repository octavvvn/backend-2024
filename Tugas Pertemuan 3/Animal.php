<?php

class Animal
{
    public $animals = [];

    public function __construct($initialAnimals = [])
    {
        $this->animals = $initialAnimals;
    }

    public function index()
    {
        foreach ($this->animals as $animal) {
            echo $animal . PHP_EOL;
        }
    }

    public function store($newAnimal)
    {
        $this->animals[] = $newAnimal;
        echo $newAnimal . " telah ditambahkan." . PHP_EOL;
    }

    public function update($index, $updatedAnimal)
    {
        if (isset($this->animals[$index])) {
            echo $this->animals[$index] . " telah diperbarui menjadi " . $updatedAnimal . PHP_EOL;
            $this->animals[$index] = $updatedAnimal;
        } else {
            echo "Data hewan tidak ditemukan pada indeks tersebut." . PHP_EOL;
        }
    }

    public function destroy($index)
    {
        if (isset($this->animals[$index])) {
            echo $this->animals[$index] . " telah dihapus." . PHP_EOL;
            unset($this->animals[$index]);
            $this->animals = array_values($this->animals);
        } else {
            echo "Data hewan tidak ditemukan pada indeks tersebut." . PHP_EOL;
        }
    }
}

$animalObj = new Animal(["kucing", "kangguru", "kelinci"]);

echo "Data Hewan Awal:" . PHP_EOL;
$animalObj->index();
echo PHP_EOL;

$animalObj->store("gajah");
echo PHP_EOL;

echo "Data Hewan Setelah Penambahan:" . PHP_EOL;
$animalObj->index();
echo PHP_EOL;

$animalObj->update(1, "ayam");
echo PHP_EOL;

echo "Data Hewan Setelah Pembaruan:" . PHP_EOL;
$animalObj->index();
echo PHP_EOL;

$animalObj->destroy(2);
echo PHP_EOL;

echo "Data Hewan Setelah Penghapusan:" . PHP_EOL;
$animalObj->index();

?>