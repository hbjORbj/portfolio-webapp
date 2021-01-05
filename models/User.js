const mongoose = require("mongoose");
const { v1 } = require("uuid");
const crypto = require("crypto");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  hashedPassword: {
    type: String,
    trim: true,
    required: true,
  },
  salt: String,
  created: {
    type: Date,
    default: Date.now,
  },
});

// virtual fields
UserSchema.virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = v1();
    this.hashedPassword = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

// methods
UserSchema.methods = {
  authenticate: function (password) {
    return this.encryptPassword(password) === this.hashedPassword;
  },
  encryptPassword: function (password) {
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = mongoose.model("User", UserSchema);
