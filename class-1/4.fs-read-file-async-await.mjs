import { readFile } from "node:fs/promises";

// asynchronous using async await, sequential execution, wait for the first promise and execute
// the corresponding callback when the promise is fulfilled, then, wait for the second promise..

// await works in Ecma Script Modules, but It Does not work in CommonJS modules.

const text = await readFile("./hello-world.txt", "utf-8"); // --> wait for this
console.log("first text: ", text);

console.log("waiting......."); // do nothing, the processor is free

const secondText = await readFile("./heroes.txt", "utf-8"); // --> wait for this too
console.log("second text: ", secondText); 

// output: IMPORTANT --> the order of execution WILL BE in SEQUENTIAL order, 
// the first callback at the beginning, and the second following, ALWAYS in the same order.

// first text:  Hello World (1)
// waiting....... (2)
// Loki (3)
// Spider-Man (3)
// Hulk (3)