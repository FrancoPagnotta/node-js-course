import { readFile } from "node:fs";

const readFilePromise = promisify(readFile); // --> only in cases where readFile comes from node: fs, always use native promises from node: fs/promises.

readFilePromise("heroes.txt", "utf-8").then((text) => {
  console.log("second text: ", text);
});
