let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newArr = myArr.map(function(num){return num + 10})

// console.log(newArr);

let newArr3 = []
let myArr2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let newArr2 = myArr2.map((num) => num * 10)
    .map((num) => num / 2)
    .filter((num) => num >= 300)

newArr2.forEach((num) => {
        if (num > 400) {
            newArr3.push(num)
        }
    })                    

console.log(newArr2);
console.log(newArr3);
