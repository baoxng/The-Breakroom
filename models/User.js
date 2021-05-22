const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id:{
    type: Number,
    unique: true
  },
  username: {
    type: String,
    trim: true,
    unique: true,
    required: "Username is Required"
  },
   password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."]
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;