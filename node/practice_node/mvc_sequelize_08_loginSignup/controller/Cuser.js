const { User } = require("../model/Index");

exports.index = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};
exports.postSignup = async (req, res) => {
  try {
    const { id, name, pw } = req.body;
    const createUser = await User.create({ id, name, pw });
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
  const { id, pw } = req.body;
  const user = await User.findOne({ where: { id, pw } });

  if (user) {
    req.session.user = user;
    res.send(user);
  } else {
    res.status(401).send("Login Failed");
  }
};

exports.profile = async (req, res) => {
  const user = req.session.user;

  if (user) {
    res.rende("profile", { data: user });
  } else {
    res.redirect("/user/signin");
  }
};

exports.profileEdit = async (req, res) => {
  const userId = req.params.id;
  const { name, pw } = req.body;

  const result = await User.update({ name, pw }, { where: { id: userId } });

  if (result[0] === 1) {
    res.send({ result: true });
  } else {
    res.send({ result: false });
  }
};

exports.profileDelete = async (req, res) => {
  const userId = req.params.id;

  const result = await User.destroy({ where: { id: userId } });

  if (result === 1) {
    res.send({ result: true });
  } else {
    res.send({ result: false });
  }
};
