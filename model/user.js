const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstname: {type: String, required: true, max: 100},
  lastname: {type: String, required: true, max: 100},
  email: {type: String, required: true, unique: true},
});

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", UserSchema);

