import { statSync } from "node:fs";

const stats = statSync("file.txt"); // --> synchronous
console.log(stats);