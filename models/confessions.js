const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Scehma
const ConfessionSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  confession: {
    type: String,
    required: true,
  },
});

module.exports = Confession = mongoose.model("confessions", ConfessionSchema);
