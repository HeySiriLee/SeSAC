const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/popup", (req, res) => {
  res.render("popup");
});

router.post("/stopPopup", (req, res) => {
  const oneDayInSeconds = 24 * 60 * 60;

  res.cookie("popup", "stopped", {
    maxAge: oneDayInSeconds,
    httpOnly: true,
  });

  res.send("Popup will not be shown today.");
});

router.get("/", (req, res) => {
  if (!req.cookies.popup) {
    res.render("popup");
  } else {
    res.send("No more pop-ups.");
  }
});

module.exports = router;
