const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;
const connectToMongoose = require("./db");

connectToMongoose();

app.use(cors());
app.use(express.json());
app.use("/api/auth/signup", require("./routes/auth"));
app.use("/api/login", require("./routes/login"));

app.listen(PORT, () => {
  console.log(`the server is running on https://localhost:${PORT}`);
});
