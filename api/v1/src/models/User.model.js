const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, trim: true },
  email: {
    type: String, required: true, trim: true, email: true, lowercase: true, unique: true,
  },
  password: {
    type: String, required: true, select: false,
  },
});

module.exports = model('User', userSchema);
