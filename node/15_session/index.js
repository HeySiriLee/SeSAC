const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8000;

// 쿠키를 해석할 수 있게 해줌
app.use(
  session({
    secret: "secret key",
    resave: false, // 모든 요청마다 session을 다시 저장할건가?
    saveUninitialized: true, // client가 처음 접속할 때, 세션을 한 번 초기화 할건지?말건지?
    cookie: {
      httpOnly: true, // document.cookie로는 접속x
      maxAge: 30000,
    },
    // secure:true, // https에서만 동작하도록 함
  })
);

app.get("/", (req, res) => {
  res.send("Hello Session");
});

app.get("/set", (req, res) => {
  console.log("1: ", req.session);
  req.session.user = "sesac";
  console.log("2: ", req.session);
  res.send("set session");
});

app.get("/get", (req, res) => {
  console.log("user: ", req.session.user);
  res.send({ user: req.session.user });
});

app.get("/destroy", (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.send({ result: true, msg: "destroy session" });
  });
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
