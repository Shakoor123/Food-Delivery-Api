const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const dotenv = require("dotenv");
const { v1: uuidv1, v4: uuidv4 } = require("uuid");
dotenv.config();
//register
router.post("/register", async (req, res) => {
  var encrypted = await CryptoJS.AES.encrypt(req.body.password, "shakoor");

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: encrypted,
  });
  try {
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});
//login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      var decrypted = await CryptoJS.AES.decrypt(user.password, "shakoor");
      password = decrypted.toString(CryptoJS.enc.Utf8);
      if (password === req.body.password) {
        const { password, ...others } = user._doc;
        res.status(200).json({ ...others });
      } else {
        res.status(401).json({ message: "password is incorrect" });
      }
    } else {
      res.status(401).json({ message: "user not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
