/*
* A Service Record records a service performed on the vehicle.
*
* It should take a standard form for all vehicle types.
*
* It should record the odometer reading at the time the service is performed.
*
* It should record the system serviced.
*
* It should have the ability to link to specific repair issues and set their competed
* properties to true and their dateCompleted properties to 'now' or the date specified
* by the user. When linking to a Service Issue, is should pull system information from
* that Service Issue, thus respecting user DRY.
*
* It should have an object property for parts used which records the brand, manufactuer
* part number, the vendor, and the price paid. These will be collected as aggregaged data
* for both monetization and helping others to complete the job. One way to collect the data
* will be to look for patterns of parts being frequently replaced and correlating the brand
* and vendor.
*
* It should have a property to record any tools used. This is to help others get the job
* done.
*
* It should record any special tools that were used. This will be anonymously aggregated and
 * prompted other users to respect DRY. It should give the user the option of recording the
 * brand and part number of the tool and allow them to rate the tool. Aggregate ratings may be
 * displayed to a user seeking information prior to a performing a repair.
*
* */