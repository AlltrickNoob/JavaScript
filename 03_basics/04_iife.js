// (function tea(){
//     console.log(`DB IIS CONNECTED`);// NAMED IIFE
// })();
// ((name)=>{
//     console.log(`DB IS CONNECTED ${name}`);
// })("Abdullah")

(function Pearl() {
    console.log("DB CONNECTED");
})();

((name) => {
    console.log(`DB CONNECTED TO ${name}`);
})("ABDULLAH")