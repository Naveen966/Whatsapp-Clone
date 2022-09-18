const express = require("express");
const app = express();

const Data = require("./model.js");
const mongoDBUrl = require("./password.js");
const port = 5000;

mongoose
  .connect(mongoDBUrl, {})
  .then(() => {
    console.log("mongoDB connected...");
  })
  .catch((error) => {
    console.log(error);
  });

const results = Data({
  fName: "Naveen",
  lName: "Kumar",
  phNumber: 9667110081,
  email: "naveenkumar8600@gmail.com",
  password: "1251ou45sf4",
  cPassword: "1251ou45sf4",
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
