const { User } = require("../model/Index");

exports.index = (req, res) => {
  console.log(req.headers.cookie);
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};
exports.postSignup = async (req, res) => {
  try {
    const { userid, name, pw } = req.body;
    const createUser = await User.create({ userid, name, pw });
    res.send(createUser);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating user");
  }
};

exports.signin = (req, res) => {
  res.render("signin");
};
exports.postSignin = async (req, res) => {
  const { userid, pw } = req.body;
  const user = await User.findOne({ where: { userid, pw } });
  if (user) {
    // req.cookie.user = user;
    res.send(user);
  } else {
    res.status(401).send({ msg: "Login Failed" });
  }
};

exports.profile = async (req, res) => {
  const id = req.headers.cookie.split("=")[1];
  const user = await User.findOne({
    where: { id: id },
  });

  if (user) {
    res.render("profile", { data: user });
  } else {
    res.redirect("/user/signin");
  }
};

exports.profileEdit = async (req, res) => {
  const id = req.params.id;
  const { name, pw } = req.body;

  const result = await User.update({ name, pw }, { where: { id: id } });

  if (result[0] === 1) {
    res.send({ result: true });
  } else {
    res.send({ result: false });
  }
};

exports.profileDelete = async (req, res) => {
  const id = req.params.id;

  const result = await User.destroy({ where: { id: id } });

  if (result === 1) {
    res.send({ result: true });
  } else {
    res.send({ result: false });
  }
};
