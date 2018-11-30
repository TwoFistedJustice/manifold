const mongoose= require('mongoose');
const {Schema} = mongoose;
const validator = require('validator');

// plan to use jwt for web tokens
// plan to use bcrypt for passwords
// plan to use lodash for middleware
// plan to have a separate "profile" model which will be linked to a user - keep peronal info separate from auth

const {Schema} = mongoose;

const user = new Schema({
  email: {
    type: String,
    required: true,
    trime: true,
    minLength: 1,
    unique: true,
    validate:{
    validator:validator.isEmail,
      message: `{VALUE} is not a valid email.`
    }
  },
  // password: {},
  // tokens:[]
});

const User = mongoose.model('User', user );

module.exports = {User};