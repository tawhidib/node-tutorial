const { write } = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>This is our homepage</h1>");
    res.end();
  } else if (req.url === "/about") {
    res.write("<h1>This is our about</h1>");
    res.end();
  } else {
    res.write("<h1>404 Not Found</h1>");
    res.end();
  }
});

server.listen(5000, () => {
  console.log("server is listening on http://localhost:5000/");
});
