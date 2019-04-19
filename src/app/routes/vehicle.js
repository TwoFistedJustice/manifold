const express = require('express');
const Vehicle = require('../odm/vehicle');
const router = new express.router();

const requireAuthentication= () => {
  console.log('need to create authentication');
}


/* Routes
* all require authentication
* Create - makes a new vehicle
*
* RUD
* - takes an ID as a parameter
* */

// do not use arrow functions if you are going to need 'this' in the route
router.all('*', requireAuthentication);


router.route('/vehicle')
  .all(function(req, res, next){
    console.log('vehicle.all is not doing anything ');
    next();
  })
  .post(function(req, res, next){
    // create a new doc
    next(new Error('Not implemented'));
  });

// should PUT be allowed?
router.route('/vehicle/:vehicle_id')
  .all(function(req, res, next){
    // remove if not needed
    next(new Error('Not implemented'));
  })
  .get(function(req, res, next){
    console.log('GETting a car');
    next(new Error('Not implemented'));
  })
  .patch(function(req, res, next){
    console.log('PATCHing a car with bondo');
    next(new Error('Not implemented'));
  })
  .delete(function(req, res, next){
    // delete should probably NOT delete the resource, but rather
    // remove it from the public sphere so it can be recovered later
    // and only actually be deleted after some time has passed
    console.log('Sending the car to the junkyard with DELETE');
    next(new Error('Not implemented'));
  });





module.exports = router;