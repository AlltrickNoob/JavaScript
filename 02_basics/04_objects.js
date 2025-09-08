// const tinderUser = new Object()
// // const tinderUser = {} // second way to create object

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "hitesh",
//             lastname: "choudhary"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// const obj5 = { obj1, obj2 }
// console.log(obj5);

// const obj6 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj6);

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }

// course.courseInstructor

// const {courseInstructor: instructor} = course

// // console.log(courseInstructor);
// console.log(instructor);

// const navbar = ({company})=>{

// }

// navbar(company = "Abdullah") // this is a react code

// // {
// //     "name": "hitesh",
// //     "coursename": "js in hindi",
// //     "price": "free"
// // }

// [
//     {},
//     {},
//     {}
// ]

let newObj = new Object()
// console.log(newObj);

let newObj2 = {}

newObj2.id = 123
newObj2.name = "Abdullah"
newObj2.isLoggedIn = true

// console.log(newObj2);

let nestedObj = {
    School : {
        std_MCA : {
            Students : {
                name : "Abdullah",
                rollno : 1
            }
        }
    }
}
// console.log(nestedObj.School.std_MCA.Students.name);

let obj1 = {1 : "a", 2 : "b"}
let obj2 = {3 : "a", 4 : "b"}
let obj3 = {5 : "a", 6 : "b"}

let obj4 = {obj1, obj2}
// console.log(obj4);

let obj5 = Object.assign({}, obj1, obj2)
// console.log(obj5);

let obj6 = {...obj1, ...obj2}
// console.log(obj6);

let myArr = [
    {
        id : 1,
        name : "Abdullah"
    },
    {
        id : 2,
        name : "Aasim"
    },
    {
        id : 3,
        name : "Sami"
    },
]
// console.log(myArr[1].name);

// console.log(newObj2);
// console.log(Object.keys(newObj2));
// console.log(Object.values(newObj2));
// console.log(Object.entries(newObj2));
// console.log(newObj2.hasOwnProperty("name"));

const course = {
    courseName : "Javascript",
    price : 999,
    platform : "youtube"
}
console.log(course.courseName)

const {courseName} = course
console.log(courseName);

const {price : $} = course
console.log($);

// const login = ({user}) => {

// }
// console.log(user = "Abdullah");// this is a react code

// {
//     "name" : "Abdullah",
//     "age" : 22,
//     "class" : "MCA"
// }

[
    {},
    {},
    {}
]