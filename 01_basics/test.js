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





/*
Great job attempting all 21 questions! You've clearly studied well and have a solid understanding of core JavaScript topics. Below is your graded test with feedback — where you're correct, and where a bit of improvement is needed.

✅ Correct Answers
You nailed these completely:

Q1, Q2, Q3, Q4, Q5, Q6, Q8, Q9, Q10, Q13, Q14, Q15, Q16, Q17, Q18, Q20

👏 Excellent! That’s 16 correct out of 21 so far.

❌ Incorrect or Needs Correction
Here are the ones to revisit:

⚠️ Q7 — Convert 100 to a string and check its length.
Your answer logic is correct, but you didn’t write the actual output.

js
Copy
Edit
let num = 100;
let stringVar = String(num);
console.log(stringVar.length); // ✅ Output: 3
✅ Just add the output: 3

❌ Q11 — What does +true and +"" return?
Your output:

1
false ❌

Correct answer:

js
Copy
Edit
console.log(+true); // 1 ✅
console.log(+"");   // 0 ✅
Explanation:

+true → 1 (Boolean to number)

+"" → 0 (Empty string to number)

❌ Q12 — What will this return: null == 0 and null >= 0
Your answer:

false
false ❌

Correct:

js
Copy
Edit
console.log(null == 0);  // false ✅
console.log(null >= 0);  // true ❌
Why?

null == 0 → false (no type coercion match)

null >= 0 → true because null is converted to 0 in numeric comparison.

❌ Q19 — Random number between 10 and 20 using Math.random()
You wrote:

console.log(Math.random()); output: 5.123...

That’s not enough for the question.

✅ Correct approach:

js
Copy
Edit
console.log(Math.floor(Math.random() * (20 - 10 + 1)) + 10);
// Output: Any number between 10 and 20 inclusive
❌ Q21 — What does Date.now() return and how to convert to seconds?
Your answer:

let nowsDate = date.now(); ❌
console.log(nowsDate);

Mistake: date.now() is incorrect — date is not defined.

✅ Correct usage:

js
Copy
Edit
let nowDate = Date.now(); // Correct static method call
console.log(nowDate); // milliseconds since Jan 1, 1970

// To get seconds:
console.log(Math.floor(Date.now() / 1000)); ✅
✅ Final Score: 16/21
Correct: 16

Minor fix needed: 2 (Q7, Q19)

Incorrect: 3 (Q11, Q12, Q21)

📝 Summary & Suggestions:
You're doing great! You understand most fundamentals well.

Focus more on:

Type coercion in comparison (null, undefined)

Date.now() usage

Output formatting (toPrecision, .length, etc.)

Keep practicing small experiments in the console — you’ll master it quickly!

Would you like a next-level test (Intermediate) or want me to quiz you on Functions, Arrays, or Loops next?

Ask ChatGPT

 */
