//Todo this file (part.js) is now only for notes on the relationship between Master and Replacement Parts
/*
* this plug in allows mongoose to extend schemas. May be useful for this feature
* https://github.com/briankircho/mongoose-schema-extend
*
* This is probably going to be the most difficult part of the whole project to code.
*
*
___________  MASTER PART__________________

There should be only ONE of any Master Part. Each is unique according to the
Manufacturer Part Number (MPN) - as determined by the actual Manufacturer (examples Moog, Cardone).
In this case Manufacturer means the brand name, not who actually melted the metal and
cast it into a car part.


Master Parts are created when a user attempts to add a Part to a Repair Issue and the
part does not exist in the DB. In order to add the part, the user will need to create it,
adding the brand and the MPN. If they choose not to add the rest of the descriptive fields,
that is okay. Any descriptive field not expressly filled out, gets a null value. Then future
users who add that part will be prompted and asked if they would like to fill in the missing
fields. Eventually, someone will, and if not then oh well.

Torque values should be entered once, in the users chosen metric, then converted automatically.
Yes, I know that this can be done on the fly from a single entry when a user requests it, but that
can potentially add up to thousands of operations, where only two are required.

Some parts may require more than one torque value, i.e. Lower Control Arms may need up to three separate
values. We can deal with that later.

Master Part {
manufacturerPartNumber: 'xyz123',
brand: 'Cheapo Auto Parts',
system: 'Front Suspension',
description: 'Lower Control Arm',
recommendedLubricant: 'Chassis lube',
fasteners: {
   fastener1: {
    name: 'castle nut',
    recommendedThreadLocker: 'blue',
    isPrevailingTorqueNut: false,
    isIncluded: true,
    measures: {
      external: '18mm',
      thread: '10mm',
      threadPitch: 1.5
    },
    torque: {
      poundInches: 120,
      poundFeet: 10,
      newtonMeters: 13.5
    },
    
    },
  fastener2: {
    name: 'stabilizer nut',
    recommendedThreadLocker: 'n/a',
    isPrevailingTorqueNut: true,
    isIncluded: false,
    measures: {
      external: '22mm',
      thread: '14mm',
      threadPitch: 2
    },
    torque: {
      poundInches: 120,
      poundFeet: 10,
      newtonMeters: 13.5
    },
    },
  fastener3: {
    name: 'lower control arm to frame nut',
    recommendedThreadLocker: 'n/a',
    isPrevailingTorqueNut: true,
    isIncluded: false,
    measures: {
      external: '24mm',
      thread: '14mm',
      threadPitch: 2
    },
    torque: {
      poundInches: 120,
      poundFeet: 10,
      newtonMeters: 13.5
    },
    }
  },
 userRating: {
   averageRating: 3.578348372626,
   numberOfRatings: 38
 },
 accuracyRating: {
   averageRating: 4.578348372626,
   numberOfRatings: 26
 },
 compatibleVehicles: { },
 fitmentNotes: {}
 failureNotes: {}
 
}

 __________________REPLACEMENT PART______________________________

Replacement Part {
 vendor: 'RockAuto.com',
 purchasePrice: 26.31,
 
 



}



* */