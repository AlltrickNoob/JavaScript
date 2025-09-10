for (let index = 0; index <= 10; index++) {
    const element = index;
    if (index == 5) {
        console.log("5 is the best number");
    }
    console.log(element);
}
// console.log(element);

for (let i = 1; i <= 10; i++) {
    console.log(`table of ${i}`);
    for (let j = 1; j <= 10 ; j++) {
        console.log(`${i} x ${j} = ${i*j}`);
    }
}

let myarr = ["Wasim", "Iron", "nike/puma", "Abdullah", "Aasim", "Abdurrahman", "Abdussamad"]

for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    console.log(element);
}

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log("5 is best number");
        break
    }
    console.log(index);
}

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log("5 is best number");
        continue
    }
    console.log(index);
}