// .js --> por defecto utiliza CommonJS
// .mjs --> para utilizar ES Modules
// .cjs --> para utilizar de forma forzada CommonJS

import { sum } from './sum.mjs';
import { sub } from './sub.mjs';
import { mult } from './mult.mjs';

console.log(sum(2, 2));
console.log(sub(2, 2));
console.log(mult(2, 2));