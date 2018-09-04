const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  attending: String,
  food: String
});

let Users = mongoose.model("Users", userSchema);

module.exports = Users;
