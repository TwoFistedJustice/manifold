/*
// a repair issue is a known problem with the vehicle.


// Description: briefly, what do you think is wrong? -string
// Symptoms: What is happening that should not be, or is not that should be? - string

// System affected: In which system does the problem originate - string
// Part suspected: What part do you think is causing the issue - string



// Are there other repairs that are necessary or convenient to do along the way - boolean
  // Repair series: object ID of the repair series this doc belongs to.
  // If none is chosen, one is created by default. Can be changed later.
  

// What parts are needed?



// completed: bool def- false
  - setting this to 'true' should mark any replacement part's 'repair' property
  to false and vice versa

// odometer when discovered
// date discovered: def-date now

'remedy' - What will fix the problem permanently - string
  - should auto gen, but be editable by the user

Some aspects of this should be pulled from the 'parts' needed
// What special tools are needed? - pulled from



*/
