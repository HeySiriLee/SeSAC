const bcrypt = require("bcrypt");

const salt = 10;

function bcryptPw(password) {
  return bcrypt.hashSync(password, salt);
}

function comparePw(password, dbPw) {
  return bcrypt.compareSync(password, dbPw);
}

const dbPw = bcryptPw("1234");
console.log("Password 1234: ", dbPw);
console.log("Compare Password: ", comparePw("1234", dbPw));
