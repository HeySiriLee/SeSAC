const express = require("express");
const user = require("../controller/Cuser");
const router = express.Router();

router.get("/", user.index);

router.get("/user/signup", user.signup);
router.post("/user/signup", user.postSignup);

router.get("/user/signin", user.signin);
router.post("/user/signin", user.postSignin);

router.get("/user/profile", user.profile);
router.patch("/user/profile/edit/:id", user.profileEdit);
router.delete("/user/profile/delete/:id", user.profileDelete);

module.exports = router;
