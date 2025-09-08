// var c = 300;
// let a = 300;
// let i = 10;
// if(true){
//     let a = 10;
//     const b = 20;
//     var c = 30;
//     console.log("INNER: ",a);
// }

// // for (let i=0; i < array.length; i++){
// //     const element = array[i];
// // }

// console.log(a);
// // console.log(b);
// console.log(c);

// function one(){
//     const username = "hitesh"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);

//      two()

// }

// one()

let a = 10
const b = 20
var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

if (true) {
    let a = 100
    const b = 200
    var c = 300
    // console.log("INNER", a);
    // console.log("INNER", b);
    // console.log("INNER", c);
}

// console.log(a);
// console.log(b);
// console.log(c);

function first(){
    let firstname = "Abdullah"
    function second(){
        let lastname = "Ansari"
        console.log(firstname);
    }
    // console.log(lastname);
    second()
}
first()

if (true) {
    let firstname = "Abdullah"
    if (firstname === "Abdullah") {
        let lastname = " Ansari"
        console.log(firstname + lastname)
    }
    // console.log(lastname);
}
// console.log(firstname);

console.log(addOne(5))
function addOne(num){
    return num + 1
}
console.log(addOne(5))

// console.log(add1(6)); // in this case we can't call/execute function before  
let add1 = function(num){
    return num + 1
}
console.log(add1(6));
