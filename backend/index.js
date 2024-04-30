import express from "express";

const app = express();
const port = 2711;

app.get("/", (req, res, next) => {
  res.send("<h1>Home</h1>");
});

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
