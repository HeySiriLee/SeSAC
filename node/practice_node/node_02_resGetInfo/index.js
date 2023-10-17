const express = require("express");
const app = express();
const PORT = 8008;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/join", (req, res) => {
  res.render("join");
});

// app.post("/main", function (req,res)=>{
// })
app.listen(PORT, function () {
  console.log(`Server Open: ${PORT}`);
});
