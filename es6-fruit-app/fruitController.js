const fruits = require('./fruits');


//menampilakn semua buah
const index = () => {
    console.log("Menampilkan buah");
    fruits.forEach(fruit => console.log(fruit));
};

//menambah buah
const store = (name) => {
    fruits.push(name);
    console.log(fruits);
};

//mengupdate buah
const update = (position, name) => {
    if (fruits[position]) {
        fruits[position] = name;
    }
    console.log(fruits);
};

//menghapus buah
const destroy = (position) => {
    if (fruits[position]) {
        fruits.splice(position, 1);
    }
    console.log(fruits);
};

module.exports = {index, store, update, destroy};