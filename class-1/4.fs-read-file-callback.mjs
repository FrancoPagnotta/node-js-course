import { readFile } from "node:fs";

// asynchronous using callbacks.

readFile("hello-world.txt", "utf-8", (err, text) => { // --> wait for this 
  console.log("first text: ", text);
});

console.log("waiting..."); // --> do nothing, the processor is free

readFile("heroes.txt", "utf-8", (err, text) => {  // --> wait for this 
  console.log("second text: ", text);
});

// output: --> IMPORTANT, the order of execution of the promise callbacks depends on wich promise is fulfilled first

// waiting... (1)
// first text:  Hello World (2)
// second text:  Thor (3)

// or...

// waiting... (1)
// second text:  Thor (2)
// first text:  Hello World (3)

