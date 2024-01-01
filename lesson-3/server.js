const http = require("http");
const fs = require("fs");
const _ = require("lodash");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //
  const num = _.random(0, 20);
  console.log(num);
  //  set header content type
  res.setHeader("content-type", "text/html");

  const greet = _.once(() => {
    console.log("hello");
  });

  greet();
  //get the url path
  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      // path += "about.html";
      res.setHeader("Location", "/about");
      res.statusCode = 301;
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // send an html file

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //   res.write(data);
      res.end(data);
    }
  });
  //   if (req.url === "/") {
  //     fs.readFile("./views/index.html", (err, data) => {
  //       if (err) {
  //         console.log(err);
  //         res.end();
  //       } else {
  //         //   res.write(data);
  //         res.end(data);
  //       }
  //     });
  //   } else if (req.url === "/about") {
  //     fs.readFile("./views/about.html", (err, data) => {
  //       if (err) {
  //         console.log(err);
  //         res.end();
  //       } else {
  //         //   res.write(data);
  //         res.end(data);
  //       }
  //     });
  //   } else {
  //     fs.readFile("./views/404.html", (err, data) => {
  //       if (err) {
  //         console.log(err);
  //         res.end();
  //       } else {
  //         //   res.write(data);
  //         res.end(data);
  //       }
  //     });
  //   }
});

server.listen(3000, "localhost", () => {
  console.log("listening for request in port 3000");
});
