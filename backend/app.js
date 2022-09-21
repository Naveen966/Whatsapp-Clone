const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, (err) => {
  console.log(err);
});
