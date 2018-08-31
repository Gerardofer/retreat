const express = require("express");
const app = express();
const mongoose = require("mongoose");
const keys = require("./config/keys");

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send({ name: "Gerardo Fernandez" });
});

app.listen(PORT, () => {
  console.log("Server listening on Port", PORT);
});