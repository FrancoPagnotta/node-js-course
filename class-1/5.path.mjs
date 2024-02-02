import { sep, join, basename, extname } from "node:path";


console.log(sep); // --> the path in windows is \ but in MacOS is /, so is IMPORTANT verify this when we want to create a path or join paths.

// HOW TO CREATE A ROUTE

// '/content/subfolder/test.txt' --> this is BAD, is not correct because the operative systems have differents paths, windows "\", MacOS "/"

// using join()
const filePath = join("content", "subfolder", "test.txt");
console.log("the file file path is:", filePath); // --> output in Windows: content\subfolder\test.txt. In MacOS for example will be content/subfolder/test.txt


// HOW TO GET INFO FROM A ROUTE

// get the file name with basename()
const fileName = basename(filePath);
console.log("the file name is:", fileName);

// now with the extension file
const withoutExtension = basename(filePath, ".txt");
console.log("the file name without extension is:", withoutExtension);

// get the extension file with extname()
const fileExtension = extname(filePath);
console.log("the file extension is:", fileExtension);