/*
*
*  Idea:
*
*  keep the methods and statics in their own files
*  In the schema:
*
 *   Depending on how mongoose parses this stuff:
 *
 *   const methods = require('somefile')
*     ... the schema structure
*   someSchema.methods = methods;
*
*  OR
*
*  someSchema.methods = require('somefile')
*
*
* */