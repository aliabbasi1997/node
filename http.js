const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page ...");
  }
  if (req.url === "/about") {
    res.end("About Page ...");
  }
  res.end(`
  <h1>Oops!</h1>
  <a href='/'>Home</a>
  `);
});

server.listen(5000);
