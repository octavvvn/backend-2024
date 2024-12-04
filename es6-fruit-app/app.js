const {index, store, update, destroy} = require('./fruitController');

const main = () => {
    console.log("Method index - Menampilkan buah");
index();

console.log("\nMethod store - Menambahkan buah pisang");
store("pisang");

console.log("\nMethod update - Update data 0 menjadi kelapa");
update(0, "kelapa");

console.log("\nMethod destroy - Menghapus data 0");
destroy(0);
}

main();