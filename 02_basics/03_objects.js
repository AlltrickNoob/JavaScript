// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log("1:",JsUser.email)
console.log("2:",JsUser["email"])
console.log("3:",JsUser["full name"])
console.log("4:",JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) // If you want to see the change, comment out this line

JsUser.email = "hitesh@microsoft.com"
console.log("5:",JsUser);

JsUser.greeting = function(){
    console.log("6:","Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log("7:",`Hello JS user, ${this.name}`);
}

console.log("8:",JsUser.greeting());
console.log("9:",JsUser.greetingTwo());