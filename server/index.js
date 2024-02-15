const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is my first node js server");
  } else if (req.url === "/download") {
    res.end(" Landing on download page");
  } else if (req.url === "/about") {
    res.end(" this is About page section");
  } else {
    res.end("404: Page could not be found");
  }
});

server.listen(3000, () => {
  console.log("server is listening on port 3000");
});
