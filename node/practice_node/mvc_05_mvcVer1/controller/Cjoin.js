exports.index = (req, res) => {
  res.render("join");
};

exports.register = (req, res) => {
  res.send(req.query);
};
