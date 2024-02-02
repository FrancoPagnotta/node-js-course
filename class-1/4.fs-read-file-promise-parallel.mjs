import { readFile } from "node:fs/promises";

// Using parallel execution, wait for both promises and executes one callback when 
// both promises are fulfilled.

// with Promise.all we are creating one promise from two and receiving a callback.

// await works in Ecma Script Modules, but It Does not work in CommonJS modules.

Promise.all([
  readFile("./hello-world.txt", "utf-8"),
  readFile("./heroes.txt", "utf-8"),
]).then(([text, secondText]) => {
  console.log("first text: ", text);
  console.log("second text: ", secondText);
});

// output: IMPORTANT --> The output will be in the same order always,
// the difference here with async and await is that  
// here we are waiting for both promises to be fulfilled and 
// execute only one callback for both.

// first text:  Hello World (1)
// second text:  Thor (2)

