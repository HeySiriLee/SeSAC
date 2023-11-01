const express = require("express");
const user = require("../controller/Cuser");
const router = express.Router();

router.get("/", user.index);

router.get("/signup", user.signup);
router.post("/signup", user.postSignup);

router.get("/signin", user.signin);
router.post("/signin", user.postSignin);

router.get("/profile", user.profile);
router.patch("/profile/edit/:id", user.profileEdit);
router.delete("/profile/delete/:id", user.profileDelete);

module.exports = router;
