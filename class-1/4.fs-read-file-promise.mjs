import { readFile } from "node:fs/promises";

// asynchronous using promises, non sequential execution.

readFile("hello-world.txt", "utf-8").then((text) => { 
	console.log("first text: ", text);
});
  
readFile("heroes.txt", "utf-8").then((text) => { 
	console.log("second text: ", text);
});