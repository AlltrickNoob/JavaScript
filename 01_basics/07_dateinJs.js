// Dates

let myDate = new Date()
console.log("1:",myDate.toString());
console.log("2:",myDate.toDateString());
console.log("3:",myDate.toLocaleString());
console.log("4:",typeof myDate);

let myCreatedDate1 = new Date(2023, 0, 23)
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
let myCreatedDate3 = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
console.log("5:",myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log("6:",myTimeStamp);
console.log("7:",myCreatedDate.getTime());
console.log("8:",Math.floor(Date.now()/1000));

let newDate = new Date()
console.log("9:",newDate);
console.log("10:",newDate.getMonth() + 1);
console.log("11:",newDate.getDay());

`${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
console.log("12:",myCreatedDate1.toLocaleString());
console.log("13:",myCreatedDate2.toLocaleString());
console.log("14:",myCreatedDate3.toLocaleString());