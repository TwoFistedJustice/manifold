/* A Repair Issue records a known problem with the vehicle.
*
*  It should record symptoms. .ie. What is happening that should not be, or is not that should be?
 *  - string
*
*  It should record what the user suspects is the problem.
*  - string
*
* It should record the system(s) affected
*  - string, possibly api pull
*  - this property will be read when recording a Service Report
*
* It should record the part(s) the user expects to replace.
*  - string
*  - These parts will be *prompted* to the user when recording a Service Report to respect DRY
*
*
*  It should link to a Repair Series ObjectId. If none is chosen, one is created by default. It
*  should be able to be changed by the user later.
*
*  It should record whether the issue is completed.
*  - bool def- false
*
* It should record the date completed.
*  - timestamp, def- now, can be set by user.
*
*  It should record the odometer reading when first noticed.
*
*  It should record the odometer reading when completed.
*
*  It should have a 'remedy' property which records What will fix the problem permanently
*  - string
  - should auto gen, but be editable by the user
*
*  It should record any special tools required. These will be *prompted* to the user
*  when creating an associated Service Report
*
*  It should record any tips the user has for completing the job, which will feed into a public store
*
*  It should record the pages in the repair manual that the instructions start at.
*
*  Methods
*  It should be able to generate a "shopping list" of parts for the user.
*
*  *  It should record any repair services which are required or convenient to perform when doing
*  this repair. These can be pulled and prompted from aggregate anonymous user data.
*  - serviceOpportunities
*
*   It should fetch tips that others have come up for the same job
*
*   It should have a method which generates a Service Record and sets completed to true.
*
*  It should have a way for users to add helpful tips they want to record for later or share
*  with others.
* */

