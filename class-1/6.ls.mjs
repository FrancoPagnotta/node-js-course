import { readdir } from "node:fs/promises";

// is like a dir command, useful to see the files in a folder.

// readdir() is for read a directory.
readdir(".", (err, files) => { // --> only works with readdir from node:fs.
  // --> using the promise callback directly.
  // --> the reason of the err parameter at the beginning is to not forget a poosible error occurence and handle it.
  if (err) {
    console.error(err);
    return;
  }

  files.forEach((file) => {
    console.log(file);
  });
});

// another way using then and catch

readdir(".")
  .then((files) => {
    files.forEach((file) => {
      console.log(file);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// another way using try and catch

try {
  const files = await readdir(".");
  for (const file of files) console.log(file);
} catch (err) {
  console.error(err);
}
