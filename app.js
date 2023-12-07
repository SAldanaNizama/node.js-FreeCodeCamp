const {greet, HelloWorld}  = require("./greet")

console.log(HelloWorld());

console.log(greet("FreeCodeCamp"));


//probar los distintos log que existen

// console.log("Hello world");
// console.warn("ocurrio un error...")
// console.error(new Error("ocurrio un error"))
// console.log(process);
// console.log(process.env);
// console.log(process.argv);
// console.log(process.memoryUsage())

const os = require("os")

// console.log(os.type()) => significa el tipo de sistema que estas usando
// console.log(os.homedir())=> sirve para saber donde es el directorio principal
// console.log(os.uptime()) => numeros de segundos transcurridos desde que prendio la pc
// console.log(os.userInfo()) => sirve para ver el usuario

// setTimeout => nos da un retraso de los milisegundos que le digamos
// function mostrarTema(tema) {
//   console.log(`Estoy aprendiendo ${tema}`);
// }
 
// setTimeout(mostrarTema, 1000, "node.js");

// function sumar(a, b) {
//   console.log( a + b);
// }

// setTimeout(sumar, 10000, 12, 32);

//setImmediate => se ejecuta despues del codigo sincrono, y es el primero en el codigo ascincrono

// function mostrarTema(tema) {
//   console.log(`Estoy aprendiendo ${tema}`);
// }
// console.log("antes de setInmediate()")
// setImmediate(mostrarTema, "node.js")
// console.log("despues de setInmediate()")

// setInterval => hace un bucle practicamente infinito

// function mostrarTema(tema) {
//   console.log(`Estoy aprendiendo ${tema}`);
// }

// setInterval(mostrarTema, 1000, "node.js")

// function sum (a, b) {
// console.log(a + b);
// }

// setInterval(sum, 1000, 12, 32);


// Modulo fs => File System, el metodo fs es ascinscrono y para usarlo sincrono disponemos de el metodo Sync, te lo muestro en ejemplo

const fs = require("fs");
 

//Leer un archivo
console.log("antes de leer el archivo");
fs.readFile("index.html", "utf-8", (err, contenido) => {
  if (err) {
  throw err
  } else {
    console.log(contenido);
}
console.log("mensaje ...");
})


//renombrar un archivo
console.log("antes de renombrar el archivo");

fs.rename("index.html", "main.html", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("archivo remplazado");
  }
  
})


// agregar nuevo contenido
console.log("antes de agregar el archivo");

fs.appendFile("index.html", "<p>Hola</p>", (err) => {
  if (err) {
    throw err
  }
console.log("archivo actualizado");
})


// reemplazar archivo/contenido
console.log("antes de reemplazar el archivo");

fs.writeFile("index.html", "nuevo contenido", (err) => {
  if(err) {
    throw err;
  }
  console.log("archivo creado");
})

//eliminar archivos
console.log("antes de eliminar el archivo");
fs.unlink("main.html", (err) => {
  if (err) {
    throw err;
  }
  console.log("archivo eliminado");
}
)



