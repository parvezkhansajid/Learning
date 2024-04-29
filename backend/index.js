// const http = require("http");
import http from "http";
import { gernerateRandomNumber } from "./generateRandomNumber.js";
import fs from "fs";

console.log(gernerateRandomNumber());

const file = fs.readFileSync("./fileRead.html");

const server = http.createServer((req, res, next) => {
  if (req.url == "/") {
    res.end(file);
  } else if (req.url == "/about") {
    res.end("<h1>About Page</h1>");
  } else if (req.url == "/contact") {
    res.end("<h1>Contact Page</h1>");
  } else {
    res.end("<h1>Page Not Found</h1>");
  }
});

const port = 2711;
server.listen(port, () => {
  console.log(`Server is working!`);
});
