const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 8080;

app.set("view engine", "ejs");

app.use(cookieParser());

const router = require("./routes");
app.use("/", router);

app.listen(PORT, function () {
  console.log(`Server Open: ${PORT}`);
});
