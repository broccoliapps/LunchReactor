// Default modules
var path = require('path'); // https://nodejs.org/api/path.html#path_path

// Imports NPM modules
var express = require('express');

// Set environment variables
var port = process.env.PORT || 3000;

// Creates the instance of express that will become the server
var app = express();

// Configure express.static middleware to serve static assets
// http://expressjs.com/starter/static-files.html
app.use('/', express.static(path.join(__dirname, '../client')));
app.use('/bower_components', express.static(path.join(__dirname, '../bower_components')));

// Start the server
var server = app.listen(port, function() {
  console.log('Listening on port:', port);
});
