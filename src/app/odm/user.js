/*
* Use bcrypt for webtoken generation and verification
* Use jwt for webtokens
* Use lodash for middleware
*
*  a "user" contains an email, a hashed password, and some auth tokens. That's it.
*   in order to protect privacy, a User Profile will store the ObjectID of the
*   associated user, but the user will never directly link to a user profile.
*
*   Thus it is possible for a user to have more than one profile, though in practice
*   there should be a limit on the number of active profiles.
*
*   Vehicles will be attached to a User Profile and NOT to a User.
*
* */

const mongoose= require('mongoose');
const {Schema} = mongoose;
const validator = require('validator');


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