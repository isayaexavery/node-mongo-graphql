const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },

  email: {
    type: String,
    require: true
  },

  password: {
    type: String,
    require: true
  },

  mobile: {
    type: String,
    require: true
  },

  country: {
    type: String,
    require: true
  },

  verified: {
    type: Boolean,
    default: false,
    require: true
  },

});

const User = mongoose.model('user', UserSchema);
module.exports = User;
