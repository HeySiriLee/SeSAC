const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const app = express();
const PORT = 8000;
// croess-env
// 배포버전이냐? 개발버전이냐? 에 따라 다를 env 파일을 로드할 수 있게끔 도와줌

console.log(process.env);

// dotenv.config();
// index.js 와 같은 위치에 있는 .env 파일을 불러와서 환경변수로 사용할 수 있게 하는것
dotenv.config({ path: path.join(__dirname, "./config/envs/.env") });
dotenv.config({
  path: path.join(__dirname, `./config/envs/${process.env.NODE_ENV}.env`),
});
dotenv.config({ path: path.join(__dirname, "./config/envs/production.env") });

console.log("Test Var: ", process.env.TEST_VAR);
console.log("Password: ", process.env.PASSWORD);

app.get("/", (req, res) => {
  res.send("Hello env!");
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${process.env.PORT}`);
});
