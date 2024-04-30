import express from "express";
import path from "path";

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(path.resolve(), "public")));


const port = 2711;

app.get("/", (req, res, next) => {
  res.render("index.ejs", { name: "Sajid" });
});

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
