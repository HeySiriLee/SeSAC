const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/login", (req, res) => {
  const id = "siri";
  const pw = "0902";

  function loginResult() {
    if (req.body.id == id && req.body.pw == pw) {
      return true;
    } else {
      return false;
    }
  }

  res.send(loginResult());
});

app.get("/join", (req, res) => {
  res.render("join");
});

app.listen(PORT, function () {
  console.log(`Server Open: ${PORT}`);
});
