// const anoano = new Array("google", "facebook", "yahoo");
// anoano.push("Amazon");
// console.log(anoano[3]);

//for loop

//count upto 10



// for (let x = 1; x <= 10; x++) {
//     console.log(x);
// }
let y;
// for (y = 10; y >= 0; y--) {
//     console.log(y);
// }

let sum = "";
for (y = 1; y <= 100; y++) {
    if (y % 2 == 0) {
        sum = sum + " ," + y;
    }
}
console.log(sum);