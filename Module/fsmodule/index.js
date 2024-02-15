const fs = require("fs");
//? Non-blocking I/O model.
// fs.writeFile("file.txt", "I made new File", () => {
//   console.log("data is successfuly added in file.txt");
// });

const output = fs.writeFileSync("file2.txt", "data is added in file2");
console.log(output);
console.log("I am new things");

// Reading data from file
fs.readFile("file.txt", "utf-8", (err, data) => {
  console.log(data);
});

// update the data in file
fs.appendFile("file.txt", "this is next data", (err) => {
  console.log(err);
});

// rename existing file name
fs.rename("file.txt", "newFile.txt", (err) => {
  console.log(err);
});

// delete file name
fs.unlink("newFile.txt", (err) => {
  console.log(err);
});
