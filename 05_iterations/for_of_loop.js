let arr = ["Wasim", "Iron", "Nike/Puma", "Abdullah", "Aasim", "Abdurrahman", "Abdussamad"]

for (const key of arr) {
    console.log(key);
}

let str = "Hello World!"

for (const alphabets of str) {
    if (alphabets === " ") {
        continue
    } 
    console.log(alphabets);
}

const maps = new Map()

maps.set("IN", "India")
maps.set("USA", "United States Of America")
maps.set("UK", "United Kingdom")
maps.set("UAE", "United Arab Emirates")
maps.set("IN", "India") // it will take only unique value

console.log(maps);

for (const key of maps) {
    console.log(key);   
} // this will give array of entries

for (const [key, value] of maps) {
    console.log(key, " is shortcut of ", value);
}

let myObj = {
    name : "Abdullah",
    age : 22,
    class : "MCA"
}

// for (const [key, value] of myObj) {
//     console.log(key, " ", value);
    
// } // object is not iteratable with for of loop
