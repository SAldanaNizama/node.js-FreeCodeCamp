const {greet, HelloWorld}  = require("./greet")

console.log(HelloWorld());

console.log(greet("FreeCodeCamp"));


//probar los distintos log que existen

// console.log("Hello world");
// console.warn("ocurrio un error...")
// console.error(new Error("ocurrio un error"))
// console.log(process);
// console.log(process.env);
console.log(process.argv);