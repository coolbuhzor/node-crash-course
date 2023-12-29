const fs = require("fs");

// // reading files
// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// // writing files

// fs.writeFile("./docs/blog2.txt", "Hello again", (err) => {
// if (err) {
//   console.log(err);
// }
//   console.log("file was written");
// });

// directories
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("directory created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder deleted");
//   });
// }

// deleting files

if (fs.existsSync("./docs/delete-me.txt")) {
  fs.unlink("./docs/delete-me.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
