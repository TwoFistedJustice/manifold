# Manifold -- a database app for my car

# The Story

Once upon a time there was a guy who wrenched on cars and motorcycles. He made it 
a habit to write down every little thing he did to his vehicles. This was very useful
because it allowed him to know what he had done, what worked, what didn't, and how to
do it again when he forgot. It also helped him to not buy duplicate parts or tools he
didn't really need. But as the notebooks got thicker and denser, it became harder and
harder to organize and find what he had written. He needed something better, but nothing
better existed. So he decided to build it.  

# Directory Structure

Model on Fractal Pattern by Kapil Verma

https://codeburst.io/fractal-a-nodejs-app-structure-for-infinite-scale-d74dda57ee11

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





