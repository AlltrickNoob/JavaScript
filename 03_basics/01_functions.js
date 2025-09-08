
// // function sayMyName(){
// //     console.log("H");
// //     console.log("I");
// //     console.log("T");
// //     console.log("E");
// //     console.log("S");
// //     console.log("H");
// // }

// // sayMyName()

// // function addTwoNumbers(number1, number2){

// //     console.log(number1 + number2);
// // }

// // function addTwoNumbers(number1, number2){

// //     let result = number1 + number2
// //     return result
// //     return number1 + number2
// // }

// // const result = addTwoNumbers(3, 5)

// // console.log("Result: ", result);


// // function loginUserMessage(username = "sam"){
// //     if(!username){
// //         console.log("PLease enter a username");
// //         return
// //     }
// //     return `${username} just logged in`
// // }

// // console.log(loginUserMessage("hitesh"))
// // console.log(loginUserMessage("hitesh"))


// // function calculateCartPrice(val1, val2, ...num1){
// //     return num1
// // }

// // console.log(calculateCartPrice(200, 400, 500, 2000))

// // const user = {
// //     username: "hitesh",
// //     prices: 199
// // }

// // function handleObject(anyobject){
// //     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// // }

// // // handleObject(user)
// // handleObject({
// //     username: "sam",
// //     price: 399
// // })

// // const myNewArray = [200, 400, 100, 600]

// // function returnSecondValue(getArray){
// //     return getArray[1]
// // }

// // console.log(returnSecondValue(myNewArray));
// // console.log(returnSecondValue([200, 400, 500, 1000]));

// // console.log("A")
// // console.log("B")
// // console.log("D")
// // console.log("U")
// // console.log("L")
// // console.log("L")
// // console.log("A")
// // console.log("H")

// function sayMyName(){
//     console.log("A")
//     console.log("B")
//     console.log("D")
//     console.log("U")
//     console.log("L")
//     console.log("L")
//     console.log("A")
//     console.log("H")
// }
// // sayMyName()

// // function addTwoNum(num1, num2){
// //     console.log(num1 + num2)
// // }
// // addTwoNum(3, 4)

// function addTwoNumbers(num1, num2){
//     let result = num1 + num2
//     return result
// }
// // console.log(addTwoNumbers(3, 9));

// function addTwoNums(num1, num2){
//     let result = num1 + num2
//     return num1 + num2
//     // console.log(num1 + num2);
    
// }

// let result = addTwoNums(3, 6)
// // console.log(result);

// function loginUserMess(user = "sam"){
//     if (user === undefined &&  !user) {
//         console.log("Please enter your name");
//         return
//     }
//     return `${user} just logged in`
// }
// console.log(loginUserMess())

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 600, 800, 1000));

const myObj = {
    name : "Abdullah",
    age : 22,
    class : "MCA"
}
function handleObject(anyObject){
    return `My name is ${anyObject.name} and my age is ${anyObject.age}`
    // return anyObject
}
// console.log(handleObject(myObj.name));
console.log(handleObject(myObj))
console.log(handleObject({name : "Muqsit", age : 21}))

const myArr = [100, 200, 300, 400, 500]

function handleArray(anyArray){
    return anyArray
    // return anyArray[2]
}
console.log(handleArray(myArr[2]));
// console.log(handleArray(myArr));
// console.log(handleArray([200, 300, 400, 500, 700]));

