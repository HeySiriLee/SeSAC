const { Visitor } = require("../model/index");

exports.home = (req, res) => {
  res.render("index");
};

// 임시
exports.getTest = (req, res) => {
  // SELETE * FROM visitor WHERE id = params.id ORDER BY username ASC;
  Visitor.findAll({
    attribute: ["username", "id"],
    // where: {
    //   id: req.params.id,
    // },
    order: [["id", "ASC"]],
  }).then((result) => {
    console.log("findOne result: ", result);
    res.send(result);
  });
};

// GET /visitors => 기존 방명록 조회 후 render("visitor.ejs")
exports.visitor = (req, res) => {
  // SELECT *  FROM visitor
  Visitor.findAll().then((result) => {
    console.log("findAll result: ", result);
    console.log("0 index의 username: ", result[0].username);
    res.render("visitor", { data: result });
  });
};

// POST /visitor => 방명록 insert
exports.postVisitor = async (req, res) => {
  const data = {
    username: req.body.username,
    comment: req.body.comment,
  };
  //   Visitor.create(data).then((result) => {
  //     console.log("create result: ", result);
  //     res.send(result);
  const createVisitor = await Visitor.create(data).catch((err) => {});
  res.send(createVisitor);
};

// GET /visitor/:id => 방명록 하나 조회
exports.getVisitorById = (req, res) => {
  // SELETE * FROM visitor WHERE id = ?? LIMIT 1;
  Visitor.findOne({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    console.log("findOne result: ", result);
    res.send(result);
  });
};

// PATCH /visitor/:id => 방명록 수정
exports.patchVisitor = (req, res) => {
  const data = {
    username: req.body.username,
    comment: req.body.comment,
  };
  // UPDATE visiter SET username = '??', comment = '???', WHERE id = ?
  Visitor.update(data, {
    where: {
      id: req.body.id,
    },
  }).then((result) => {
    console.log("update result: ", result);
    res.send({ result: true });
  });
};

// DELETE /visitor/:id => 방명록 삭제
exports.deleteVisitor = (req, res) => {
  Visitor.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    console.log("destroy: ", result);
    res.send({ result: true });
  });
};
