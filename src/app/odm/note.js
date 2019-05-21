/* a Note is, well, a note
*  it is a generally re-usable object which will be a part of many other schemas
*  it should NEVER be independently created.
*  It should ALWAYS be created as part of another schema.
*  Examples:
 *  a fitment Note in the Part schema
 *  a tip in the Repair Issue schema
*
*
*  It should have a text/description field
*  It should record the ObjectId of the user that created it
*  It should record the ObjectId of the creating object
*  It should record the purpose (fitment, failure, tip, etc)
*    This will probably be passed as an argument by the generating class
*  It should record the class name of the creating object
*    So it can be ind
*
* */