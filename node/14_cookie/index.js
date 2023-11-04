const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;

// 쿠키를 해석할 수 있게 해줌
app.use(cookieParser());

const cookieConfig = {
  //httpOnly: true, // document.cookie 로 접근 불가, 서버에서만 cookie에 접근 가능
  maxAge: 30000,
  // expires: "",
  // path: "/", // "/test" -> "localhost:8000/test/~~" 에 쿠키 저장
  // secure: true, // https 보안 서버에서만 쿠키를 동작하게 함
  // signed: true // cookie 암호화 -> req.signedCookies 에서 조회
};

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/set", (req, res) => {
  // 서버가 쿠키를 만들어서 응답으로 보냄
  // key: key1 / value: value1
  res.cookie("key1", "value1", cookieConfig);
  res.send("set cookie");
});

app.get("/get", (req, res) => {
  console.log("cookie: ", req.coookies);
  res.send(req.coookies);
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
