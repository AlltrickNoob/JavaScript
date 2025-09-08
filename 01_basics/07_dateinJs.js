// Dates

// let myDate = new Date()
// console.log("1:",myDate.toString());
// console.log("2:",myDate.toDateString());
// console.log("3:",myDate.toLocaleString());
// console.log("4:",typeof myDate);

// let myCreatedDate1 = new Date(2023, 0, 23)
// let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate3 = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log("5:",myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()

// console.log("6:",myTimeStamp);
// let toHumanReadable = new Date(myTimeStamp) 
// console.log("6 a :",toHumanReadable.toLocaleString());

// console.log("7:",myCreatedDate.getTime());
// console.log("8:",Math.floor(Date.now()/1000));

// let newDate = new Date()
// console.log("9:",newDate);
// console.log("10:",newDate.getMonth() + 1);
// console.log("11:",newDate.getDay());

// `${newDate.getDay()} and the time `

// newDate.toLocaleString('default', {
//     weekday: "long",
    
// })
// console.log("12:",myCreatedDate1.toLocaleString());
// console.log("13:",myCreatedDate2.toLocaleString());
// console.log("14:",myCreatedDate3.toLocaleString());

let myDate = new Date()
console.log("only object ",myDate);
console.log("to date string ",myDate.toDateString());
console.log("to locale string ",myDate.toLocaleString());
console.log("to locale date string ",myDate.toLocaleDateString());
console.log("to ISO string ",myDate.toISOString());
console.log("to JSON ",myDate.toJSON());
console.log("to string ",myDate.toString());
console.log("to time string ",myDate.toTimeString());

// let newDate = new Date(2024, 1, 7)
// let newDate = new Date(2024, 1, 7, 8, 36, 58)
let newDate = new Date("02-15-2002, 8:36")
console.log(newDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(newDate.getTime()+1);
console.log(newDate.getTime()/1000);
console.log(Math.floor(newDate.getTime()/1000));

let newMyDate = new Date()
console.log(newMyDate.getMonth());
console.log(newMyDate.getDay());
console.log(newMyDate.getDate());

console.log(`${Date.now()} this is the time`);

console.log(newMyDate.toLocaleString("default", {
  weekday: "long",  // Correct key: "weekday"
  month: "long",    // To display full month name
  day: "numeric",   // To display day of the month
  year: "numeric"   // To display full year
}));
