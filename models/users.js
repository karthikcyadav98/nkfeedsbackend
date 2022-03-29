const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Scehma
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  // password: {
  //   type: String,
  //   required: true,
  // },
});

module.exports = User = mongoose.model("users", UserSchema);
