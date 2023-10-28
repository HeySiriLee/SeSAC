const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");

router.get("/", controller.home);

router.get("/visitors", controller.visitor);

// 방명록 등록
router.post("/visitor", controller.postVisitor);

router.patch("/visitor/:id", (req, res) => {});

router.delete("/visitor/:id", controller.deleteVisitor);

module.exports = router;
