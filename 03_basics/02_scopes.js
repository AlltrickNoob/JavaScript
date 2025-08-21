var c = 300;
let a = 300;
let i = 10;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("INNER: ",a);
}

// for (let i=0; i < array.length; i++){
//     const element = array[i];
// }

console.log(a);
// console.log(b);
console.log(c);

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

one()
