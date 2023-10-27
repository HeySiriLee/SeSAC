const { users } = require("../model/User");

exports.loginPage = (req, res) => {
  res.render("index");
};

exports.index = (req, res) => {
  let userData = users();

  let msg = "";
  for (let i = 0; i < userData.length; i++) {
    if (req.body.userId == userData[i].userId) {
      if (req.body.userPw == userData[i].userPw) {
        msg = "Success Log in:)";
        break;
      } else {
        msg = "Wrong Password:(";
      }
    } else {
      msg = "Wrong ID:(";
    }
  }

  res.send({
    isSuccess: msg === "Success Log in:)",
    msg: `Success Log in, Welcome ${req.body.userId}!`,
  });
};
