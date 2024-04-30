import express from "express";
import path from "path";

const app = express();

const users = [];

app.set("view engine", "ejs");

app.use(express.static(path.join(path.resolve(), "public")));

app.use(express.urlencoded({ extended: true }));

const port = 2711;

app.get("/", (req, res, next) => {
  res.render("index.ejs");
});

app.get("/success", (req, res, next) => {
  res.render("success");
});

app.post("/", (req, res, next) => {
  users.push({ username: req.body.name, email: req.body.email });
  // res.render("success");
  res.redirect("/success");
});

app.get("/users", (req, res, next) => {
  res.json({
    users,
  });
});

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
