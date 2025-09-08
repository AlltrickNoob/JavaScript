// const score = 400
// console.log("1:",score);

// const balance = new Number(100)
// console.log("2:",balance);

// console.log("3:",balance.toString().length);
// console.log("4:",balance.toFixed(1));

// const otherNumber = 123.8966

// console.log("5:",otherNumber.toPrecision(4));

// const hundreds = 1000000
// console.log("6:",hundreds.toLocaleString('en-IN'));

// // +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log("7:",Math);
// console.log("8:",Math.abs(-4));
// console.log("9:",Math.round(4.6));
// console.log("10:",Math.ceil(4.2));
// console.log("11:",Math.floor(4.9));
// console.log("12:",Math.min(4, 3, 6, 8));
// console.log("13:",Math.max(4, 3, 6, 8));

// console.log("14:",Math.random());
// console.log("15:",(Math.random()*10) + 1);
// console.log("16:",Math.floor(Math.random()*10) + 1);

// const min = 10
// const max = 20

// console.log("17:",Math.floor(Math.random() * (max - min + 1)) + min)
// console.log("18:",Math.random());

let score = 100
console.log(score);

let newScore = new Number(1000)
console.log(newScore);
console.log(newScore.toString().length);
console.log(newScore.toFixed(2));

let anotherNumber = new Number(200)
console.log(anotherNumber.toPrecision(4));

let indianStyleToWriteNumbers = 100000000
console.log(indianStyleToWriteNumbers.toLocaleString("en-IN"));

console.log(Math);
console.log(Math.abs(-34));
console.log(Math.round(4.4));
console.log(Math.ceil(4.4));
console.log(Math.floor(4.9));
console.log(Math.min(12, 5, 8, 6, 4, 2, 65));
console.log(Math.max(12, 5, 8, 6, 4, 2, 65));
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

let min = 10
let max = 20

console.log(Math.floor((Math.random()*(max-min))+1)+min);