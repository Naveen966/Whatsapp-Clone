const express = require("express");
const mongoose = require("mongoose");
const app = express();
const mainDataExecutive = require("./db");
const port = 5000;

mainDataExecutive();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
