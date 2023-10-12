const express = require("express"); // import express module
const app = express(); // server 객체
const PORT = 8000; // PORT

// app 객체의 view engine 설정을 ejs로 변경
app.set("view engine", "ejs");
// app 객체의 view 폴더 설정, 기본값= ./views/
// app.set("views", "./views");

app.use("/public", express.static(__dirname + "/static"));

// GET Method (http Method)
app.get("/", function (req, res) {
  // response 객체 내의 send Method 실행
  res.send("hello express");
});

app.get("/test", function (req, res) {
  console.log(__dirname);
  // 절대경로
  res.sendFile(__dirname + "/index.html");
});

app.get("/ejs", function (req, res) {
  // render Method의 기본 dir = "./views/"
  // *확장자명을 적게되면 더블로 작성됌
  res.render("index", { product: ["Coffee", "Beverage", "Tea"] });
});

// open server
app.listen(PORT, function () {
  console.log("Listening on port ${8000}! http://localhost:${8000}");
});
