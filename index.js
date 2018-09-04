const express = require("express");
const app = express();
const mongoose = require("mongoose");
const keys = require("./config/keys");
const Users = require("./models/users");

// console.log(Users);

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

const PORT = process.env.PORT || 5000;

// Users.create(
//   {
//     name: "Gerardo",
//     attending: "Yes",
//     food: "Pasta"
//   },
//   (err, user) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("NEW USER CREATED");
//       console.log(user);
//     }
//   }
// );

app.get("/", (req, res) => {
  res.send({ name: "Gerardo Fernandez" });
});

app.get("/subscribed", (req, res) => {
  res.send("<h1>This is the People attending</h1>");
});

app.listen(PORT, () => {
  console.log("Server listening on Port", PORT);
});
