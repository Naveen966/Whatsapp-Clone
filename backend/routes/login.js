const router = require("express").Router();
const UserData = require("../models/UserData");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const { verifiedPassword, verifiedEmail } = req.body;
  // login end points
  try {
    const doc = await UserData.find({
      $and: [{ email: verifiedEmail }, { password: verifiedPassword }],
    }).exec();

    if (doc) {
    }
    console.log(doc);
    res.send("this is a login method");
  } catch {
    console.log("it's an error");
  }
});

module.exports = router;
