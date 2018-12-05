// This user profile schema will be used as the foreign key in all docs
// It is therefore required for a user to have a user profile.

const mongoose = require('mongoose');
const {Schema} = mongoose;
const {ObjectID} = Schema.types;

const userProfile = new Schema({
  // NOTE: to concatenate first and last name see the docs models/virtuals
name: {
  first: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  last: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  }
},
  
// if no handle is specified, have it default to first + last name + some suffix
  // ideally the handle should be changeable
  handle: {
    type: String,
    required: false,
    minLength: 1,
    trim: true,
    unique: true
  }
  
  
});


const UserProfile = mongoose.model('UserProfile', userProfile);
module.exports = {UserProfile};