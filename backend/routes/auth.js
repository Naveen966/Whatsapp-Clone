const router = require("express").Router();
const UserData = require("../models/UserData");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const { fName, lName, email, phNumber, password, cPassword } = req.body;

  if (
    !fName ||
    !email ||
    !phNumber ||
    !password ||
    !cPassword ||
    password !== cPassword
  ) {
    console.log("please recheck your credentials");
  } else {
    // const corruptedPassword = await bcrypt.hash(password);
    const result = await UserData({
      fName: fName,
      lName: lName,
      phNumber: phNumber,
      email: email,
      password: password,
      cPassword: cPassword,
    });

    const mainResult = await result.save();
    res.send(mainResult);
  }
});

module.exports = router;
