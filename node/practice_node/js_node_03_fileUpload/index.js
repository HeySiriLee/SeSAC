const express = require("express");
const multer = require("multer");
const path = require("path");

const profile_img_upload = multer({
  dest: "profile_img/",
});
const profile_img = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "profile_img/");
    },
    filename: function (req, file, done) {
      const ext = path.extname(file.originalname);
      const basename = path.basename(file.originalname, ext);
      const fileName = basename + "_" + Date.now() + ext;
      done(null, fileName);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

const app = express();
const PORT = 8080;

app.use("/profile_img", express.static(__dirname + "/profile_img"));

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/join", profile_img.single("profile_img"), function (req, res) {
  res.render("profile", {
    src: req.file.path,
    userId: req.body.userId,
    userPw: req.body.userPw,
    name: req.body.name,
    nickName: req.body.nickName,
  });
});

app.post("/join2", profile_img.single("profile_img"), function (req, res) {
  res.send({
    src: req.file.path,
    userId: req.body.userId,
    userPw: req.body.userPw,
    name: req.body.name,
    nickName: req.body.nickName,
  });
});

app.listen(PORT, function () {
  console.log`Server Open: ${PORT}`;
});
