/**
 * es una variable global en toda la app que en Node apunta al objeto "global" y en el navegador apunta al objeto "window" y
 * desde la cual salen el console, el Fetch, el Math, etc o sea la gran parte de las cosas que usamos en JS que parecen
 * que salen de la nada, salen de la variable globalThis.
 */
console.log(globalThis);


// CommonJS require module
const { sum } = require("./sum");

console.log(sum(2, 2));
