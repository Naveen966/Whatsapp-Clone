const mongoose = require("mongoose");
const UserSchema = require("./model.js");
const mongoDBUrl = require("./password.js");

mongoose
  .connect(mongoDBUrl, {})
  .then(() => {
    console.log("mongoDB connected...");
  })
  .catch((error) => {
    console.log(error);
  });

async function mainDataExecutive() {
  // try {
  //   const results = await UserSchema({
  //     fName: fName,
  //     lName: lName,
  //     phNumber: phNumber,
  //     email: email,
  //     password: password,
  //     cPassword: cPassword,
  //   });
  //   const mainResult = await results
  //     .save()
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));
  // } catch {
  //   console.log("function is not working well");
  // }
}

module.exports = mainDataExecutive;
