const mongoose = require("mongoose");
const key = require("./password");

const connectToMongoose = () =>
  mongoose.connect(key, () => {
    console.log("mongoose has been connected");
  });

module.exports = connectToMongoose;
