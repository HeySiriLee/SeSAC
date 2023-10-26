const express = require("express");
const router = express.Router();
const controllerIndex = require("../controller/Cindex");
const controllerJoin = require("../controller/Cjoin");

router.get("/", controllerIndex.loginPage);
router.get("/", controllerIndex.index);
router.post("/", controllerIndex.index);
router.post("/index", controllerIndex.index);
router.get("/join", controllerJoin.index);
router.get("/register", controllerJoin.register);

module.exports = router;
