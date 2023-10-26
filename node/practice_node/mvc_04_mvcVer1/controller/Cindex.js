const { users } = require("../model/User");

exports.loginPage = (req, res) => {
  res.render("index");
};

exports.index = (req, res) => {
  let userData = users();

  let msg = "";
  for (let i = 0; i < userData.length; i++) {
    if (req.body.userId != userData[i].userId) {
      msg = "Wrong ID:(";
    } else if (req.body.userPw != userData[i].userPw) {
      msg = "Wrong Password:(";
    } else {
      msg = "Success sign up!";
      break;
    }
  }

  res.send({ isSuccess: msg === "Success sign up!", msg });
};
