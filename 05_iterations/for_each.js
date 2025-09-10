let myArr = ["Wasim", "Iron", "Nike/Puma", "Abdullah", "Aasim", "Abdurrahman", "Abdussamad"]

myArr.forEach(function (name){
    // console.log(name);
})

myArr.forEach((item) => {
    // console.log(item);
})

function printMe(value){
    console.log(value);
}

myArr.forEach(printMe)

myArr.forEach((key, index, array) => {
    console.log(key, index, array);
})

let myArray = [
    {
        name : "Wasim",
        class : "B. pharm",
        age : 27
    },
    {
        name : "Iron",
        class : "BSc",
        age : 26
    },
    {
        name : "Nike/Puma",
        class : "BSc",
        age : 23
    },
    {
        name : "Abdullah",
        class : "MCA pursuing",
        age : 22
    },
    {
        name : "Aasim",
        class : "MBA/MMS",
        age : 21
    },
    {
        name : "Abdurrahman",
        class : "9th",
        age : 15
    },
    {
        name : "Abdussamad",
        class : "5th",
        age : 11
    }
]

myArray.forEach((entries) => {
    console.log(entries.age);
})
