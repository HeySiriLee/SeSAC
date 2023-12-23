const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/join", (req, res) => {
  res.render("join");
});

app.listen(PORT, function () {
  console.log(`Server Open: ${PORT}`);
});
