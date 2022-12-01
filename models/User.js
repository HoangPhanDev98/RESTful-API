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
  address: {
    type: String,
  },
  avatarUrl: {
    type: String,
  },
  dateCreate: {
    type: String,
    default: Date.now,
  },
  _id: false,
});

module.exports = mongoose.model("Users", UserSchema);
