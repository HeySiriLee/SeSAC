const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = require("./routes/index");
// localhost:8000/~~
app.use("/", router);

// 존재하지 않는 get 요청에 대해서
app.get("*", (req, res) => {
  res.send("Not found Page");
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
