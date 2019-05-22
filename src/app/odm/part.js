//Todo break this up into two classes as laid out in the UML partMaster and partReplacement
/*
* this plug in allows mongoose to extend schemas. May be useful for this feature
* https://github.com/briankircho/mongoose-schema-extend
*
* This is probably going to be the most difficult part of the whole project to code.
*
* As written now there is one class called a Part. There should be TWO.
* A SuperClass, which records Immutable and Cumulative properties
* And a SubClass which handles the rest and is stored separately.
*
* The SuperClass will have exactly one instance in the DB, whereas the SubClass will
* have MANY creating a one-to-many relationship between them.
*
*
* parts will probably only be created by a user when they are either defective or upgraded.
*
*  the following properties are drawn and set from the user's vehicle schema
*  and added to the parts data store when a Service Record is created using the part
*    make, model, year
*
*    The following properties will be common to all the same kind of parts from the given make and model
*    'system': system in which the part belongs, i.e. 'steering', 'brakes', 'HVAC', etc.
*      - may be derived from some other super-schema (but probably won't be)
*
___________  MASTER PART__________________

* It should have properties editable by a user as well as properties pulled from a data store.
*
*  Immutable Properties - May be entered by a user,
*  Entered by a single user one time, becoming part of a separate data store.
*  Afterwards, other users can search by Manufacturer and Part Number
*  It if is found, they can select it. Otherwise they have to enter it.
*  ----------------------------------------------------------
*  It should record the brand
*  It should record the manufacturer part number
*  It should record the system the part belongs to (steering, brakes, fuel, etc)
*  It should record whether a prevailing torque lock nut is required
*  It should state whether it comes with replacement fasteners
*  It should note the recommended lubricant. Default is 'none'.
*           Examples: "disc brake grease", "Lithium Spray Grease", "Chassis grease"
*  It should note whether thread locker is required and whether blue or red. Object{}
*  It should note the recommended torque in both in/ft-lb and NM: Object{}
*

  * Cumulative Properties -
*  ----------------------------------------------------------
* It should have a user rating from 1 through 5 - an object with an average rating and number of ratings
* It should have a compatible vehicles list : Object{make/model/year}
* It should have a collection of fitment notes : Objects{ make/model/year, description"}\
*   - Note make/model/year duplication - solve by new data store??? - mission creep!
*  It should have an accuracy rating for the user to judge the accuracy of the description.
*    - if the accuracy falls below a threshold, an alert should be generated and somebody
*      maybe anybody, should be allowed to edit the details.
*      - It could be if someone rates it less than completely accurate they are prompted to
*       detail what is wrong. it could be that the displayed fields are displayed as a checklist
*       and the user can check which fields are inaccurate, then be allowed to add a short text
*       description of the problem.
*
*
*
 __________________REPLACEMENT PART______________________________
 * When a replacement part is added to a repair issue it MUST have access to a Master Part
 * When the replacment part is displayed to the user it will display data pulled from
 * the master part. To the end user it should appear as if they are a single object. To
 * the dev they should be distinct objects.
 
*  Mutable Properties - User input only
*  ----------------------------------------------------------
*  It should record where it was purchases
*  It should record the purchase price before tax
*  It should have a collection of Failure Notes
*    ("the rubber boot broke", "the rubber bushing wore out", "the temperature sensor went bad", "incorrect installation")


*
*  Mutable Properties - Autogenerated by Repair Issue
*   (Assumes part was previously recorded in a Service Record)
*  ----------------------------------------------------------
*  It should record the date of failure
*  It should the record the odometer reading at failure
*

*  Mutable Properties - Autogenerated by Service Record
*  ----------------------------------------------------------
*  It should record the date installed
*  It should the record the odometer reading at installation
*
* */