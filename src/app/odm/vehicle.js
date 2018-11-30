const mongoose = require ('mongoose');
const {Schema} = mongoose;
const {ObjectID} = Schema.types;
const latestModelYear = new Date().getUTCFullYear() + 1;
// import user from index???


const vehicle = new Schema ({
  owner: {
   type: ObjectID,
    // ref: 'User' // foreign key to User model
  },
  vin: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  // min is the year the first car was invented, max is the current year plus one to allow for early releases
  year: {
    type: Number,
    required: true,
    min: 1885,
    max: latestModelYear + 1
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
    required: true,
    minLength: 1,
    trim: true
  },
  engineDisplacement: {
    type: Number,
    required: true,
    min: 0
  },
  // example would be cc, liters, or cubic inches (CID)
  engineDisplacementUnits: {
    type: String,
    required: true,
    min: 0
  },
  licensePlate: {
    type: String,
    required: true,
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
  purchaseTax: {
    type: Number,
    required: false,
    min: 0,
    default: 0
  },
  purchaseFees: {
    type: Number,
    required: false,
    min: 0,
    default: 0
  },
  // a rare someone might have a one off or early early version
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
  
  
  
});


const Vehicle = mongoose.model ('Vehicle', vehicle);
// to store as a subdoc, see MongooseNestedSchemas: modelTool.js
module.exports = {Vehicle};



