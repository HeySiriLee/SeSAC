const express = require("express");
const multer = require("multer"); //multer 불러오기
const path = require("path"); // file 경로를 받았을때 그 조작을 도와줌
// upload라는 객체 안에는 미들웨어 함수가 존재. single() array()
// multer가 임의의 문자를 생성해서 그 문자열을 파일 이름으로 만듬. 심지어 확장자까지..
const upload = multer({
  dest: "uploads/",
});
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename: function (req, file, done) {
      const ext = path.extname(file.originalname); // extname 파일 확장자
      const basename = path.basename(file.originalname, ext); // basename 파일 이름
      const fileName = basename + "_" + Date.now() + ext; // basename 파일 이름
      done(null, fileName);
    },
  }),
});
// storage: 파일을 저장할 정보
// -diskStorage: 파일을 디스크에 저장하기 위한 기능을 제공하는 메소드
// --destination:
// --filename:
// limit:
// -filesize: 파일의 크기

const app = express();
const PORT = 8000;

// client가 uploads folder에 저장한 img file에 접근할 수 있도록 미들웨어 작성
app.use("/uploads", express.static(__dirname + "/uploads"));

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("index");
});

// single(), array(), fields()= 미들웨어 : 클라이언트가 보낸 요청 중에 userfile이라는 name의 파일 데이터가 있다면
//  파일을 multer의 설정대로 저장해서, req.file of req.files 이라는 객체를 생성해서 다음 함수에 넘겨줌
app.post("/upload", upload.single("userfile"), function (req, res) {
  console.log("file: ", req.file);
  console.log("body: ", req.body);
  res.send("File Upload");
});

// single():파일 하나만 업로드 할 때 사용
// req.file 생성
app.post(
  "/upload/detail",
  uploadDetail.single("userfile"),
  function (req, res) {
    // console.log("file detail: ", req.file);
    // console.log("body detail: ", req.body);
    // res.send("File Upload");
    res.render("result", {
      src: req.file.path,
      title: req.body.title,
    });
  }
);

// array(): name 하나로 여러개의 파일을 받는 방법
// req.files 생성
app.post("/upload/array", uploadDetail.array("userfile"), function (req, res) {
  console.log("files use a input: ", req.files);
  res.send("Success upload files");
});

// fields(): 여러개의 파일을 upload하는데 name(=input)이 두 개 이상 받는 방법
// req.files 생성
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  function (req, res) {
    console.log("files use the inputes: ", req.files);
    console.log("req.body: ", req.body);
    res.send("Success upload files");
  }
);

app.post(
  "/upload/dynamic",
  uploadDetail.single("userfile"),
  function (req, res) {
    res.send({ src: req.file.path });
  }
);

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
