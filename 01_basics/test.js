// Q1 
/*
 let x = "5" + 2 + 3;
console.log(x);

let y = 5 + 2 + "3";
console.log(y);
*/ 

// output :- 523
//           73


// Q2 What is the difference between var, let, and const in JavaScript?

// answer :- const :-when any value assigned in this then it will never change again at any cost
// let :- it's value can be changed with the limitations of block scope {}
// var :- it's value can be changed but in whole code not only in block scope {} it will change entirly


// Q3 
/*
console.log(typeof null);
console.log(typeof undefined);
*/

// output :- object
//           undefined


//Q4
/*
Identify the primitive and non-primitive types in this list:
42, "Hello", true, null, undefined, Symbol("id"), [1,2,3], {name: "Aasim"}, function(){}
*/

// answer :- Primitive Data Type :- 42, "Hello", true, null, undefined, Symbol("id")
//           Non-Primitive Data Type :- [1, 2, 3], {name: "Aasim"}, function(){}


//Q5
/*
let x;
console.log(x);
*/

// Output :- undefined


//Q6
/* 
let score = "55abc";
let num = Number(score);
console.log(num);
console.log(typeof num);
*/

// output :- NaN
//           Number


//Q7
/*
Convert the number 100 to a string and check its length.
*/

// Answer :- 
/*
let num = 100;
let stringVar = String(num);
console.log(stringVar.length);
*/


//Q8
/*
Convert the boolean false to a number. What do you get?
*/

// answer :- 0


//Q9
/*
console.log("5" + 1 + 2);
console.log(5 + 1 + "2");
*/

// output :- 512
//           62


//Q10
/*
console.log(3 + 4 * 5 % 3);
*/

// output :- 5


//Q11
/*
What does +true and +"" return?
*/

// answer :- 1
//           false


//Q12
/*
console.log(null == 0);
console.log(null >= 0);
*/

// answer :- false
//           false


//Q13
/*
What is the difference between == and === in JavaScript?
*/

// answer :- == check's both value are similar or not and === check's it's values, datatypes, etc,.


//Q14
/*
console.log("2" > 1);
console.log("02" > 1);
*/

// output :- true
//           true


//Q15
/*
const str = "Javascript";
console.log(str.charAt(4));
console.log(str.indexOf('s'));
*/

// output :- s
//           4


//Q16
/*
const messy = "   Hello JS!   ";
console.log(messy.trim());
*/

// output :- Hello JS!


//Q17
/*
const gameName = "hitesh-hc-com";
console.log(gameName.split('-'));
*/

// output :- hitesh hc com


//Q18
/*
const value = 123.4567;
console.log(value.toPrecision(4));
*/

// output :- 123.4


//Q19
/*
Generate a random number between 10 and 20 using Math.random() logic.
*/

// answer :- 
 /*
console.log(Math.random());
 output :- 5.1234567891011121
 */


 //Q20
 /*
 const date = new Date("2023-01-14");
console.log(date.toLocaleString());
 */

// output :- sat 01/14/2023 


//Q21
/*
What does Date.now() return, and how can you get the value in seconds?
*/

// output :- let nowsDate = date.now();
//           console.log(nowsDate);