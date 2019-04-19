/*
*  Making a single 'vehicle' super-type might prove cumbersome, assuming people will use it for
*  more than one kind of vehicle. It might be best to keep the props to the bare minimum
*  then build extended classes for cars, pick up trucks, motorcycles, etc.. Doing this would
*  leave enough flexibility to expand the app into other specialties like watercraft, aircraft,
*  Federation starships, etc.
*
*
*  Doing it that way would complicate the building of routes since we would need to take into account
*  all the different types of vechicles. Really we would need to set a prop and call the appropriate
*  classes and helpers. Still, it's a lot of code to write and maintain....
*
* */

const mongoose = require ('mongoose');
const {Schema} = mongoose;
const {ObjectID} = Schema.types;

// don't import everything from index bc that may cause bugs
// as it would import THIS file into THIS file
const {UserProfile} = require('./index');



const latestModelYear = new Date().getUTCFullYear() + 2;
// import user from index???


const vehicle = new Schema ({
  owner: {
   type: ObjectID,
    ref:'UserProfile'
  },
  vin: {
    type: String,
    required: false,
    unique: true,
    default: 'Please add this soon',
    minlength: 1,
    trim: true
  },
  // min is the year the first car was invented, max is the current year plus one to allow for early releases
  year: {
    type: Number,
    required: true,
    min: 1885,
    max: latestModelYear
  },
  make: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  model: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  color: {
    type: String,
    required: false,
    default: 'Black',
    minLength: 1,
    trim: true
  },
  
  // store this in cc - convert from other units using helpers
  engineDisplacement: {
    type: Number,
    required: true,
    min: 0
  },
  // example would be cc, liters, or cubic inches (CID)
  // engineDisplacementUnits: {
  //   type: String,
  //   required: false,
  //   default: 'L',
  //   min: 0
  // },

  // should be stored with a prefix of the state in which it was issued
  // ie. CA 682BMQ - California 682BMQ
  licensePlate: {
    type: String,
    required: true,
    unique: true,
    minLength: 1,
    trim: true
  },
  dateAcquired: {
    type: Date,
    required: true
  },
  purchasePrice: {
    type: Number,
    required: true,
    min: 0
  },
  // purchaseTax: {
  //   type: Number,
  //   required: false,
  //   min: 0,
  //   default: 0
  // },
  // purchaseFees: {
  //   type: Number,
  //   required: false,
  //   min: 0,
  //   default: 0
  // },
  
  /*
  // a rare someone might have a one off or early early version
  // these might be better as an extended data type
  isPrototype: {
    type: Boolean,
    required: false,
    default: false
  },
  // kit cars are a thing...
  isKitCar:  {
    type: Boolean,
    required: false,
    default: false
  }
  */
});


const Vehicle = mongoose.model ('Vehicle', vehicle);
// to store as a subdoc, see MongooseNestedSchemas: modelTool.js
module.exports = {Vehicle};




