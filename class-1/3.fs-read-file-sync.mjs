import { readFileSync } from "node:fs";

// execute te first readFileSync, when it is done, continue with the next execution.

const text = readFileSync("hello-world.txt", "utf-8"); // --> synchronous
console.log("first text:", text);

console.log("waiting.........");

const secondText = readFileSync("heroes.txt", "utf-8"); // --> synchronous
console.log("secondText text:", secondText);


 