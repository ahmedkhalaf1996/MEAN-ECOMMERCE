const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String },
  isAdmin: { type: Boolean , default: false }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
