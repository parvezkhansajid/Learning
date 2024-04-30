import express from "express";

const app = express();
app.set("view engine", "ejs");
const port = 2711;

app.get("/", (req, res, next) => {
  res.render("index.ejs", {name: "Sajid"});
});

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
