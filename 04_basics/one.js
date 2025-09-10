let day = "Sunday"

if (day == "Sunday") {
    console.log("College is close");
}else{
    console.log("College is Open");
}

// comparison operator 
// <   >   <=   >=   ==   !=   ===   !==

let score = 100

if (score > 20) {
    let level = "beginner"
    console.log(`You are a ${level}`);
}
// console.log(`You are ${level}`);

if (score == 100) console.log("You are a Failure"), console.log("but I believe you can rise again.");

let mark = 96

if (mark < 35) {
    console.log("Fail");
} else if (mark < 50) {
    console.log("pass but need to work hard");
}else if (mark < 65) {
    console.log("pass and doing good");
}else if (mark < 80) {
    console.log("pass but work hard for becoming outstanding");
}else if (mark < 95) {
    console.log("pass and Outstanding");
}else{
    console.log("pass and Unbeatable");
}

let id = true
let uniform = true
let writingPad = false
let pen = true

if (id == true && uniform == true) {
    console.log("You are able to give the exam");
} else {
    console.log("Please come in uniform and not forget to bring your id card with you");
}

if (writingPad == true || pen == true) {
    console.log("You can write paper");
} else {
    console.log("Bring your own pen and writing pad is not compulsory");
}

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

let temperature = 20

switch (temperature) {
    case 0:
        console.log("freez");
        break;
    case 10:
        console.log("high cold");
        break;
    case 20:
        console.log("cold");
        break;
    case 30:
        console.log("normal");
        break;
    case 40:
        console.log("hot");
        break;
    case 50:
        console.log("too hot");
        break;

    default:
        console.log("Please enter temperature between 0 to 50");
        break;
}

//when paasing [] empty object or empty string etc 
let myarr = []

if (myarr) {
    console.log("array is not empty");
}else{
    console.log("empty array");
}

// when paasing number in value
let myarray = 1;

if (Array.isArray(myarray) && myarray.length === 1) {
    console.log("array has exactly one element");
} else {
    console.log("either not an array or not exactly one element");
}

// falsy
// 0, -0, Bigint 0n, false, null, undefined, "", NaN

// truthy
// "0", "falsy", " ", [], {}, function(){}

if (myarr.length === 0) {
    console.log("empty array");
}else{
    console.log("array is not empty");
}

let myObj = {}

if (Object.keys(myObj).length === 0) {
    console.log("Empty Object");
}else{
    console.log("Object is not empty");
}

let temp;
// temp = 28
// temp = null ?? 28
// temp = null ?? 28 ?? 24
temp = 24 ?? null ?? 28

console.log(temp);

let speedPerHour = 50

speedPerHour <= 40 ? console.log("Normal Speed") : console.log("High Speed");

console.log(`Speed per/hour = ${speedPerHour}`);
