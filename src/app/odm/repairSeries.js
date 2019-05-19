/* A repair series is a queue of repair issues.
* The repair issues should be in the order they need to be completed in.
*
* It should have a queue of Repair Issue ObjectIds.
* https://mongoosejs.com/docs/populate.html
*  Use virtuals to grab all of a user's docs by type see Node v3 video 12-13 ~18:00
*
*  Also look at "virtuals"
*  https://mongoosejs.com/docs/guide.html#virtuals
*
* It should be able to re-order the queue of Repair Issues so the user can optimize
* the order of operations. The orders will be anonymously aggregated and prompted
* to other uses to help them work more efficiently.
*
* It should have a completed property which records when all Repair Issues have been completed.
* This should be set automatically upon completion of last Repair Issue.
* Can be changed later by user by re-opening a Repair Issue or creating a new one.
* -bool def-false
*
*  It should record the odometer reading upon completion. This can be pulled from the last
*  Repair Issue marked as complete. - Actually, no. This seems like repeating oneself.
*
*  It should record the date completed.his can be pulled from the last
*  Repair Issue marked as complete.
*
* */

