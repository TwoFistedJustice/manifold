//Todo this file (part.js) is now only for notes on the relationship between Master and Replacement Parts

//Todo the UML diagrams for part classes will need to be redone to reflect changes in structure

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
 compatibleVehicles: { not sure how best to do this yet},
 fitmentNotes: {collection of notes}
 failureNotes: {collection of notes}
 
}

 __________________REPLACEMENT PART______________________________

There needs to be a way to know if a part has already been recorded
so dates and odos can be recorded without duplication.

we can check for a date of failure, since that will not exist on a
part that is in service.

But there MUST be a way to make sure a part is not duplicated by
accident. Otherwise someone can just add infinite tie rods to a car,
which will render that data set pretty useless, even to the user.
This has potential to wreck the project with complexity. So simplicity
in implementation is essential.

It could be as simple as adding a boolean property to a vehicle when a
part is added using the part name as the property name.

Another possibility (more complicated) is to have a master diagram for each type of
vehicle, where the diagram is divided into sections and the part belongs to a given
section. The diagram could even be comprise of three separate diagrams, one for each
axis (X,Y,Z). The user would simply tap in the general area for each axis, and BAM the
part location is recorded. This would require some doing and is beyond my abilities
at the moment.

Replacement Part {
 vendor: 'RockAuto.com',
 purchasePrice: 26.31,
 dateInstalled: (Date drawn from Service Record),
 dateOfFailure: (Date drawn from future Repair Issue),
 odometerAtInstallation: (Number drawn from Service Record),
 odometerAtFailure: (Number drawn from future Repair Issue),
 
 sideOfVehicle: 'LH',
 
}

* */