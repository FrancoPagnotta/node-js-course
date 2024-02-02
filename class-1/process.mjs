import { argv, cwd, env } from "process";

// provides information and control over the current running process.

// $ node process.mjs argument1 argument2 argument3 --> in command line
// [
// 	'C:\\Users\\franc\\AppData\\Roaming\\nvm\\v18.13.0\\node.exe',
// 	'C:\\node\\class-1\\process.mjs',
// 	'argument1',
// 	'argument2',
// 	'argument3'
//   ]
console.log(argv); // --> returns an array containing the command-line arguments passed when the Node.js process was launched

// control the process
// exit(0); // -> instructs Node.js to terminate the process synchronously with an exit status of code, 0 is 'success';

//control events
// on('exit', () => {
// 	// do something
// });

console.log(`Current directory: ${cwd()}`); // --> return the current directory from where we are running the process.
// output: 
//Current directory: C:\node\class-1

// platform

// $ MY_VARIABLE=hello node process.mjs --> in the command line
console.log(env.MY_VARIABLE); 

// output: hello