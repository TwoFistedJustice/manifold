/* A User Profile contains personally identifiable information
*  such as real names.
* This user profile schema will be used as the foreign key in all docs
* It is therefore required for a user to have a user profile.
*
* It should contain the hashed hexstring of the ObjectId of the associated user
* It should specify a type of profile, such as personal or professional
* It should have a Garage store  which contains ObjectIds of currently owned Vehicles
*
* It should have a History store containing the ObjectIds of Vehicles
* previously owned. The point of this is that any vehicle can be traced back
* and previous owners can be viewed or contacted (if they allow)
*
* */

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