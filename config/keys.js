if (process.env.NODE_ENV === "productions") {
  //we are in productions, use prod keys
  module.exports = require("./prod");
} else {
  //we are in dev, use the Dev keys.
  module.exports = require("./dev");
}
