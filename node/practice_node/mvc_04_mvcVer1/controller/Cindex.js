const { users } = require("../model/User");

exports.loginPage = (req, res) => {
  res.render("index");
};

exports.index = (req, res) => {
  let userData = users();
  let idMatched = false;
  let pwMatched = false;

  for (let i = 0; i < userData.length; i++) {
    if (req.body.userId == userData[i].userId) {
      idMatched = true;
      if (req.body.userPw == userData[i].userPw) {
        pwMatched = true;
        break;
      }
    }
  }

  let msg = "";

  if (idMatched && pwMatched) {
    msg = `Success Log in, Welcome ${req.body.userId}!`;
  } else if (idMatched) {
    msg = "Wrong Password:(";
  } else if (pwMatched) {
    msg = "Wrong ID:(";
  } else {
    msg = "Check your ID and Password:(";
  }

  res.send({
    isSuccess: msg === "Success Log in, Welcome " + req.body.userId + "!",
    msg,
  });
};
