const { json } = require("express");
const app = require("express");
const router = app.Router();
const UserData = require("../models/UserData");

const authenticate = router.post("/", async (req, res) => {
  const { fName, lName, email, phoneNumber, password, cPassword } = req.body;

  const result = await UserData({
    fName: fName,
    lName: lName,
    phNumber: phoneNumber,
    email: email,
    password: password,
    cPassword: cPassword,
  });

  const mainResult = await result.save();
  res.send(mainResult);
});

module.exports = authenticate;
