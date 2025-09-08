// //  Primitive

// //  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// // Reference (Non primitive)

// // Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }
// console.log(myObj);
// const myFunction = function(){
//     console.log("Hello world");
//     console.log(myObj.name);
// }
// myFunction()

// console.log(typeof anotherId);

// // https://262.ecma-international.org/5.1/#sec-11.4.3

// // Stack (Primitive), Heap (Non-Primitive)

// let myYoutubename = "TYCS-GAMER"

// let anothername = myYoutubename

// anothername = "Abdullah"

// console.log(myYoutubename);
// console.log(anothername);

// let userOne = {
//     email: "tycs@gamer.com",
//     Id : 123456
// }

// let userTwo = userOne;

// userTwo.email = "Abdullah@gmail.com"

// console.log(userOne.email);
// console.log(userTwo.email);

// primitive data types 
// number string boolean bigint symbol undefined null

let num = 112
let bigInt = 9876543210012345678998765432100123456789n
let str ="ansari"
let bool = true
let sym = Symbol('123')
let und;
let nulll = null

console.log(num);
console.log(bigInt);
console.log(str);
console.log(bool);
console.log(sym);
console.log(und);
console.log(nulll);

// Non primitive (reference)
// Array Object Function

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let myObject = {
    name : "Abdullah",
    age : "23",
    std : "MCA FY"
}

let myFunction = function(){
    console.log("Hello World");    
}
// myFunction()

console.log(myArray);
console.log(myObject);
console.log(myFunction());
