const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

// req.body 를 해석
// x-www-form-unlencoded 형태의 Data를 해석
// extended : true = qs module 이용
// extended : false = queryString module 이용
app.use(express.urlencoded({ extended: true }));
// applicatio/json 형태의 Data를 해석
app.use(express.json());

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/get", function (req, res) {
  // req.query : get 요청에 대해 client가 보낸 data를 담고 있ㄷ아
  // url 기본주소 뒤에 오는 ?~~ 주소를 의미.
  // ?key=value&key=value
  console.log(req.query);
  res.send("Success request get Method!");
});

app.post("/post", function (req, res) {
  // req.body : post 요청에 대해 client가 보낸 data를 담고 있다
  console.log(req.body);
  res.render("result", {
    name: req.body.name,
    email: req.body.email,
  });
});

app.listen(PORT, function () {
  console.log(`Server Open: ${PORT}`);
});
