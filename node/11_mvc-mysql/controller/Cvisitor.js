const Visitor = require("../model/Visitor");

exports.home = (req, res) => {
  res.render("index");
};

exports.visitor = (req, res) => {
  // const data = Visitor.getVisitors();
  // res.render("visitor", { data: data });
  Visitor.getVisitors((rows) => {
    res.render("visitor", { data: rows });
  });
};
