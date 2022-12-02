const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  fullname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  address: {
    type: String,
  },
  gender: {
    type: String,
  },
  status: {
    type: String,
  },
  avatarUrl: {
    type: String,
  },
  dateCreate: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model("Users", UserSchema);
