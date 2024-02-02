/* eslint-disable no-irregular-whitespace */
import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";
import { argv, exit } from "node:process";

import picocolors from "picocolors";

// print process.argv
// argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });

// output:

// $ node ls-advanced.mjs commonJS
// 0: C:\Users\franc\AppData\Roaming\nvm\v18.13.0\node.exe
// 1: C:\node\class-1\ls-advanced.mjs

const folder = argv[2] ?? "."; // 2nd position because 0 is node.exe path, 1st is this file path, so 2nd position is the folder name argument that we provide in the command line, by default is '.' the current path.

// readdir(folder, (err, files) => { // --> remember, this work with node:fs
//   if (err) {
//     console.error(err);
//     return;
//   }

//   files.forEach((file) => {
//     console.log(file);
//   });
// });

// command line:
// $ node ls-advanced.mjs commonJS --> in the command line

// output:
// forEach line 5:
// 0: C:\Users\franc\AppData\Roaming\nvm\v18.13.0\node.exe
// 1: C:\node\class-1\ls-advanced.mjs
// 2: commonJS

// readdir line 23:
// index.js
// sum.js

// command line:
// $ node ls-advanced.mjs folder-test --> non-existent folder.

// output:
// readdir line 23
// [Error: ENOENT: no such file or directory, scandir 'C:\node\class-1\folder-test'] {
// 	errno: -4058,
// 	code: 'ENOENT',
// 	syscall: 'scandir',
// 	path: 'C:\\node\\class-1\\folder-test'
//   }

// readdir(folder) // --> remember, this work with node: fs/promises
//   .then((files) => {
//     files.forEach((file) => {
//       console.log(file);
//     });
//   })
//   .catch((err) => { --> if we dont handle the error, the process will execute an exit(1), failing the process throwing an error like this triggerUncaughtException(err, true /* fromPromise */); and this is BAD, whe SHOULD handle the possible errors ALWAYS.
//     console.log(err);
//   });

// ADVANCED

async function ls(folder) {
  const files = await readDirectory(folder);
  const filesInfo = await getFilesInfo(files);

  filesInfo.forEach((fileinfo) => {
    console.log(fileinfo);
  });
}

async function readDirectory(folder) {
  let files;

  try {
    files = await readdir(folder); // -->  return an array of the names of the files in the directory
    // console.log(files);
    return files;
  } catch {
    console.error(picocolors.red(`the directory ${folder} could not be read`));
    exit(1); // --> terminate the process synchronously with an exit status of code 1 (Uncaught Fatal Exception)
  }
}

async function getFilesInfo(files) {
  try {
    const filesPromises = files.map(async (file) => {
      // --> the map does not wait for the await on line 84 of each file, the execution is not sequential, is in parallel because is faster than sequential.
      const filePath = join(folder, file); // --> join the folder path (e.g 'commonJS') with the file path (e.g 'index.js') to create a path like this e.g 'commonJS\index.js'
      // console.log(filePath);
      let stats = await getStats(filePath);

      const fileType = stats.isDirectory() ? "d" : "f";
      const fileSize = stats.size;
      const fileModifiedDate = stats.mtime.toLocaleString();

      return `${picocolors.bgMagenta(fileType)} ${picocolors
        .cyan(file)
        .padEnd(40)} ${picocolors
        .green(fileSize)
        .toString()
        .padStart(10)} ${picocolors.yellow(fileModifiedDate)}`;
    });

    return await Promise.all(filesPromises);
  } catch {
    console.log("the files info could not be get");
  }
}

async function getStats(filePath) {
  let stats;

  try {
    stats = await stat(filePath); // --> file info; stat() with await works with node:fs/promises
    return stats;
  } catch {
    console.error(`the file ${filePath} could not be read`);
    exit(1);
  }
}

ls(folder);

// command line:
// node ls-advanced.mjs --> without folder path, the default path is the current path

// output:
// directory commonJS                                          0 1/28/2024, 9:21:37 PM
// directory ESModulesJS                                       0 1/29/2024, 6:24:21 PM
// file fs-read-file-async-await-copy.js                726 1/29/2024, 7:07:14 PM
// file fs-read-file-async-await.mjs                    924 1/29/2024, 6:53:07 PM
// file fs-read-file-callback.mjs                       681 1/29/2024, 6:50:50 PM
// file fs-read-file-promise-parallel.mjs               852 1/29/2024, 7:16:57 PM
// file fs-read-file-promise.mjs                        303 1/29/2024, 7:16:53 PM
// file fs-read-file-promisify.mjs                      296 1/29/2024, :16:43 PM
// file fs-read-file-sync.mjs                           406 1/29/2024, 7:16:23 PM
// file fs-stat-sync.mjs                                114 1/29/2024, 11:50:36 PM
// file hello-world.txt                                  11 1/28/2024, 9:55:22 PM
// file heroes.txt                                       28 1/28/2024, 9:57:25 PM
// file ls-advanced.mjs                                3347 1/30/2024, 1:42:36 AM
// file ls.mjs                                          893 1/30/2024, 12:27:53 AM
// file os-native.mjs                                   442 1/28/2024, 9:41:42 PM
// file path.mjs                                       1075 1/29/2024, 7:28:58 PM
// file process.mjs                                    1032 1/30/2024, 12:14:12 AM

// command line:
// node ls-advanced.mjs commonJS

// output:
// file index.js                                        436 1/28/2024, 9:18:11 PM
// file sum.js                                           98 1/28/2024, 9:17:59 PM

// command line:
// node ls-advanced.mjs ../class-1

//output: // --> the same output data as the default path
// directory commonJS                                          0 1/28/2024, 9:21:37 PM
// directory ESModulesJS                                       0 1/29/2024, 6:24:21 PM
// file fs-read-file-async-await-copy.js                726 1/29/2024, 7:07:14 PM
// file fs-read-file-async-await.mjs                    924 1/29/2024, 6:53:07 PM
// file fs-read-file-callback.mjs                       681 1/29/2024, 6:50:50 PM
// file fs-read-file-promise-parallel.mjs               852 1/29/2024, 7:16:57 PM
// file fs-read-file-promise.mjs                        303 1/29/2024, 7:16:53 PM
// file fs-read-file-promisify.mjs                      296 1/29/2024, 7:16:43 PM
// file fs-read-file-sync.mjs                           406 1/29/2024, 7:16:23 PM
// file fs-stat-sync.mjs                                114 1/29/2024, 11:50:36 PM
// file hello-world.txt                                  11 1/28/2024, 9:55:22 PM
// file heroes.txt                                       28 1/28/2024, 9:57:25 PM
// file ls-advanced.mjs                                5068 1/30/2024, 1:43:43 AM
// file ls.mjs                                          893 1/30/2024, 12:27:53 AM
// file os-native.mjs                                   442 1/28/2024, 9:41:42 PM
// file path.mjs                                       1075 1/29/2024, 7:28:58 PM
// file process.mjs                                    1032 1/30/2024, 12:14:12 AM

// command line:
// node ls-advanced.mjs other --> non-existent folder

// output:
// the directory other could not be read
