const { json } = require("express");
const app = require("express");
const router = app.Router();
const UserData = require("../models/UserData");

const authenticate = router.post("/", async (req, res) => {
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

module.exports = authenticate;
