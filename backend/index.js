const http = require("http");

const server = http.createServer((req, res, next) => {
  res.end("<h1>Hello From Server</h1>");
});

const port = 2711;
server.listen(port, () => {
  console.log(`Server is working!`);
});
