const { readFile } = require("node:fs/promises");

// Using async and await.
// await works in Ecma Script Modules, but It Does not work in CommonJS modules.

// const text = await readFile('./hello-world.txt', 'utf-8'); // --> It does not work in CommonJS modules, error: await is only valid in async functions and the top level bodies of modules

// solution 1
(async () => { // --> Inmediatly Invoked Function Expression
  const text = await readFile("./hello-world.txt", "utf-8");
  console.log(text);
})();

// solution 2 (es lo mismo, solo que la anterior es anonima y autoinvocada)
async function read() {
  const text = await readFile("./hello-world.txt", "utf-8");
  console.log(text);
}

read();
