# Manifold -- Vehicle Maintenance

# The Story

Once upon a time there was a guy who wrenched on cars and motorcycles. He made it 
a habit to write down every little thing he did to his vehicles. This was very useful
because it allowed him to know what he had done, what worked, what didn't, and how to
do it again when he forgot. It also helped him to not buy duplicate parts or tools he
didn't really need. But as the notebooks got thicker and denser, it became harder and
harder to organize and find what he had written. He needed something better, but nothing
better existed. So he decided to build it.

# Operating Principles

#### User DRY (uDRY)
Whenever possible we will anonymously aggregate certain types of data in order to prompt
users when adding Repair Issues and Service Reports. The data types in question will be
vehicle related: part numbers, brands, tools used, tips and tricks, etc.

##### Wireframing and pseudo coding
Before writing ANY code for a model or route, there should be detailed summary at the top
of the file containing declarations stating what it is and what it should be able to do.
Declarations should be modeled after unit testing statements should be atomic and should\\
 begin with "It should...(do something)" 

#### Code Style Guide
- It should be double space indented.
- It should ALWAYS use semi-colons.
- It should ALWAYS express functions as variables to prevent function hoisting and spaghetti code. 
- It should NEVER declare functions. ie. function Myfunction(){//do something}
- In general it should follow the AirBnb style guide, but Webstorm default is nearly the same
 and easier to set up, so in practice that is what I am using, except for the double-space indent.


# Directory Structure

Model on Fractal Pattern by Kapil Verma

https://codeburst.io/fractal-a-nodejs-app-structure-for-infinite-scale-d74dda57ee11

# Universal Modeling Language
Each coding directory should have a sub-directory called "uml" which exists only in the uml branch.
Schemas, relationships, routes, sequences should all be modeled in UML using the planttuml language
prior to writing any code. Webstorm has a plugin for UML called "plantUMl Integration". This is
recommended for use with this repo.

Branch master should occasionally be PULLed in to branch uml. But the reverse is
NOT true. Need to find way to exclude UML folders from production so they can be
used as references while working in other branches.


# Stack - Initial
Node, Express, Mongo, Postman

# Initial Plan
Have basic auth using tokens.
Data structures will represent users, vehicles, and services.
Users will have name, email, password, and link to a vehicle.
Vehicles will have the usual info, plus VIN, and link to services.
Services will track oil changes and brake jobs at a given odometer reading.

There will be no front end at this stage. All interaction will be via Postman.
The app will initially be deployed to Heroku.

# Questions I need to answer

How to get makes and models of vehicles?
Some are no longer in production, and some don't exist yet.
So the data store for these must be expandable, and preferably automated. But that leaves open
the possibility of misspelled duplicates and fictional entries. How to future proof the data structure?

How to deal with customized vehicles?
Some people Frankenstein their vehicles. Need to be able to handle that.

Some maintenance is standard, same on every vehicle, some is not. Need to be able to handle that.

# Back to the Future

- Integrate with Fuelly, or improve on it if they won't play nice. 
- Transfer vehicle to new owner.
- Track tools owned - separate from vehicle.
- Keep detailed parts inventory, whether installed, where kept, where bought, how much paid.
- Track vehicle expenses.
- Prompt user to update odo reading.
- Prompt user to perform interval maintenance at given odo readings.
- Let users see tips from other users with the same vehicle.
- Let users "call for or offer help" in their local area to users with same vehicle.
- Let users enter vehicle specific data, such as torque values, maintenance intervals, etc.
  + let OTHER users vote up or vote down that data.
- Users should be able to add a repair manual page/section to a service.
- have an API so others can integrate with us.
- Add a marketplace
- MODELS TO ADD
  + Vehicle Design Flaows - allow users to specify something as a DF. When so many do, it becomes a thing.

# Types of data we need to have

- Make/Model of vehicles
- Part manufacturer brand names
- Part names, with user ratings for brand and model
- Files - user uploads


# File Uploads
Users will obviously want to upload images for profiles and Vehicles. It may
also be helpful to users to allow them to upload PDFs of their part purchases,
though this may cause bloated data storage. So it might be preferable to come
up with some kind of data format so parts vendors can export data easily and 
directly, or alternatively, someone can develop a plug-in for a given parts store.
Like the RockAuto plug in, or Advanced Auto Parts plug in.


# Trying to understand Fractal Pattern as it relates to this app

"odm" is the Object Document Mapper aka Mongo/mongoose. 
It contains the schemas and models, but no logic.

"actions" are the methods, statics, and pre on a given schema ???

"middleware" is normal middleware
  - not sure if I should break it out according to models or dump it all in index???
  
  
  "helpers" are functions that don't fall into other categories
   -- this may not be needed
  
  "routes" - is where I define routes: gets, posts, etc
  
  
  # Build Phase I
  Include: models, server, routes (GET, POST, DELETE) 
  Exclude: auth
Goal: Create a m

# File Structure

### /src 
  All the source code goes here

### src/actions
  Mongoose model instance methods, class static methods, and middleware go here, 
  each in their own directory.
 
### src/odm
  Mongoose models and schemas are kep here.

### src/routes
  Express routers are kept here. 


  





