// const marvel_heros = ["thor", "Ironman", "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log("1:",marvel_heros);
// console.log("2:",marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log("3:",allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log("4:",all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log("5:",real_another_array);



// console.log("6:",Array.isArray("Hitesh"))
// console.log("7:",Array.from("Hitesh"))
// console.log("8:",Array.from({name: "hitesh"})) // interesting

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log("9:",Array.of(score1, score2, score3));


let Team_1 = ["Goku", "Naruto", "Luffy"]
let Team_2 = ["Eren Yeager", "San Jinwoo", "Saitama"]

// Team_1.push(Team_2)
// console.log(Team_1);
// console.log(Team_1[3][1]);

let all_Teams = Team_1.concat(Team_2)
console.log(all_Teams);

let all_Teams_Again = [...Team_1, ...Team_2]
console.log(all_Teams_Again);

let nestedArray = [1, 2, [3, 4, 5], 6, 7, [8, 9], 10]
let anotherNestedArray = nestedArray.flat(Infinity)
console.log(anotherNestedArray);

console.log(Array.isArray("Abdullah"));
console.log(Array.from("Abdullah"));
console.log(Array.from({name : "Abdullah Ansari"}));

let m1 = 100
let m2 = 200
let m3 = 300

console.log(Array.of(m1, m2, m3));

