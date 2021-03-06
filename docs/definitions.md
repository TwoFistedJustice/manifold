# Definitions

## Manifold
From the Oxford English Dictionary:
- Many and various.

- The part conveying air and fuel from the carburettor to the cylinders
or that leading from the cylinders to the exhaust pipe.

- A collection of points forming a certain kind of set, such as those of a
  topologically closed surface or an analogue of this in three or more dimensions.


- The sum of the particulars furnished by sense before they have been unified
   by the synthesis of the understanding.



### Person
A Person is a human who is a "user" of our software.

### User
A User is a collection of data representing one person. A user will have one or more
"vehicles".


### Vehicle
A vehicle is a collection of data storing the most important information about a user's
car, motorycle, or truck. We will focus on wheeled, motorized vehicles. We should allow
enough flexibility in our data structures to allow forks for other modes of transportation,
such as water, air, or space craft. (let's look to future and be ready for it). We should
also bear in mind that electric vehicles are now mainstream and people are beginning to
service them at home.

A Vehicle may be transferred from one User to another. The previous owner will retain access
to any information about a vehicle which they previously had, but not to data a future owner
creates.

In the course of maintaining a vehicle, a user will need to complete many "projects".

### Project
A Project is a collection of data storing a user's broad goals.

Think of goals, such as "Rebuild the suspension", "Lower the car two inches",
"Install a catback exhaust", "Dampen vibrations inside the passenger compartment',
"Bore the engine 0.2L over". These are all broad aspirations which would require
mulitple complicated procedures, each with its own separate set of procdures. In
order to acheive the overall goal, one must complete many smaller, yet still complex
"jobs".

### Job
A Job is a collection of data storing the parts, tools, and optionally the steps necessary
to complete a complex procedure.

In our analog world, a job is something like "Service drum brakes",  "Fix a coolant leak",
"Replace the front struts", "Change the clutch". It should be granular enough to be easily
comprehensible, yet still have complexity.

Sometimes to make repeating a job in the future easier, a user may want to record some "tips".

### Tips
A Tip is a collection of data storing the ideas and experience of users which will help to
jog the memory of or enlighten a user as they perform a task.

Tips are public facing records written by users. They are what they sound like, "tips and tricks"
to make a job or project go more smoothly. They can be job specific or even vehicle model specific.
Any tip should be searchable, and readable by any user. They should allow comments and be editable
by the OP. There may even be something like a feed so that enthusiasts can see and maybe even follow
what other users say. -- naturally this one is more of a medium term goal, as it would be pretty
complicated to set up.


#### Clarification

##### Projects vs Jobs
"Change the struts" would be a "Project", consisting of the "jobs"
"Change the front struts" and "Change the rear struts".

 "Rebuild the brakes" would be a "Project" consising of the "jobs", "Service the front disc
 brakes", "Service the rear drum brakess", "Rebuild the master cylinder", and "Replace the rubber brake lines".
