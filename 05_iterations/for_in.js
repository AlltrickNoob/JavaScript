let myObj = {
    name : "Abdullah",
    age : 22,
    class : "MCA"
}

for (const key in myObj) {
    console.log(key, " = ", myObj[key]);
}

let myArr = ["Wasim", "Iron", "Nike/Puma", "Abdullah", "Aasim", "Abdurrahman", "Abdussamad"]

for (const key in myArr) {
   console.log(key, " = ", myArr[key]);
}

let map = new Map()

map.set("W", "Wasim")
map.set("I", "Iron")
map.set("N/P", "Nike/Puma")
map.set("AH", "Abdullah")
map.set("AA", "Aasim")
map.set("AR", "Abdurrahman")
map.set("AS", "Abdussamad")

for (const key in map) {
    // console.log(key, " = ", map[key]); // Map() is not iterator in for in loop 
}