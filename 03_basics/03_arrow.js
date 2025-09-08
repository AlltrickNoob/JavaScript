const myObj = {
    name : "Abdullah",
    age : 22,
    welcomeMessage : function () {
        console.log(`Hi ${this.name} wish you many many Happy ${this.age}nd Birthday`)
        console.log(this);
    }
}
// myObj.welcomeMessage()
// myObj.name = "Muqsit"
// myObj.welcomeMessage()
// console.log(this);

function chai() {
    let name = "Abdullah"
    console.log(this.name); 
    console.log(this);
}
// chai()

const tea = function() {
    let name = "Abdullah"
    console.log(this.name); 
    console.log(this);   
}
// tea()

const lemonTea = () => {
    let name = "Abdullah"
    console.log(this.name);
    console.log(this);
}
// lemonTea()

const addTwoNum = (num1, num2) => {
   return num1 + num2
}
// console.log(addTwoNum(2, 3))

const add2Num = (num1, num2) => num1 + num2
// console.log(add2Num(3, 4));

const add2Nums = (num1, num2) => (num1 + num2)
// console.log(add2Nums(4, 5));

const addTwoNums = (num1, num2) => ({name : "Abdullah"})
// console.log(addTwoNums(5, 6));

// let myArr = [1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10]
// myArr.forEach(element => {
//   console.log(element);
// });
