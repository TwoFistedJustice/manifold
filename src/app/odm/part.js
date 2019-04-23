/*
* This may not be necessary. It might be more efficient to use a property in a Service Report.
* OR it might be useful to create this when a user adds a part to a Service Report, requiring
* a brand and part number, then having it be unique. Then the part can be prompted to users
* later when they add a Service Report or create a shopping list from a Repair Issue thus
* respecting user DRY.
*
* this plug in allows mongoose to extend schemas. May be useful for this feature
* https://github.com/briankircho/mongoose-schema-extend
*
* part may not be the best name... could be construed as 'incomplete'
*
* This model represents a generic vehicle part. It can be in literally any system of
* any vehicle. It should have  only the properties that are common to all vehicle parts.
* Though that may not be flexible enough. So maybe it's better to make only the super-commonalities
* required, and other common but not universal aspects not-required
*
*
* parts will probably only be created by a user when they are either defective or upgraded.
*
* Parts should differentiate by year/make/model/submodel
*  to prevent duplication, users should be able to import settings from
*  vehicles that use the same parts (for example all years Saturn S-Series use
*  exactly the same tie-rod ends and oil filters.
*
* things I would like to incorporate:
*   'vehicle' - the objectID of the vehicle it belongs to
*
*  the following properties are drawn and set from the user's vehicle schema
*    make, model, year - self explantory
*    vehicle type' - automobile, motorcycle, etc. drawn and set from
*
*
*
*    The following properties will be common to all the same kind of parts from the given make and model
*    'system': system in which the part belongs, i.e. 'steering', 'brakes', 'HVAC', etc.
*      - may be derived from some other super-schema (but probably won't be)
*   'tools-common' - array of common tools, i.e. '10mm socket, impact gun'
*   'tools-special' - array of tools Joe DIY won't often have i.e. '10mm crowfoot'
*   'prevailing torque lock nut' - a boolean that indicates such a fastener is required
*   'lubricant' - the recommended lubricant - default to 'none
*   'thread locker' - boolean - do any of the fasteners require loctite - default to true
*      - not required - only set if true

*
*
*    The following properties are set by the user and unique to the part instance
*   'repair' - boolean - true means this needs to be repaired
*       Setting this to true should auto gen a repair issue
*       Conversely, changing the repair issue to 'fixed' should set this to false
*    'Aftermarket' - boolean. default: false
*       - when marked to true, changes 'brand' to 'non-oem', prompts user to enter a brand
*    'brand': default to make of car
*    'part number' - manufacturer part number - default to: 'none entered'
*    'vendor' - string name of place it was purchased
*    'notes' - any notes a user wants to add. This is a sharable field.
*       - if a user marks it as shareable, then it goes into a feed and the user's
*          username is displayed alongside the note
*        - shareable - boolean, default: false - can be changed by the user either
*          in their global settings or individually by 'note'. Thus they can mark
*          any 'note' as shareable or not. The default is false, unless set to true
*          in their global settings.
*          - 'notes' will be viewable by devs - common ones can be incorprated into the schema
*

*
*
*
*
*
*
*
*
*
* */