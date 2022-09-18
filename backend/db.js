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
  // const {fName,lName,phNumber,email,password,cPassword} = user

  try {
    const results = await UserSchema({
      fName: "rahul",
      lName: "Kumar",
      phNumber: 1238802813,
      email: "rahulhkumar9600@gmail.com",
      password: "12sdf51ou45ssdlfjf4",
      cPassword: "1251asdou45sdfasf4",
    });
    const mainResult = await results
      .save()
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  } catch {
    console.log("function is not working well");
  }
}

module.exports = mainDataExecutive;
