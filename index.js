/**
 * A microservice API for Electro-Cast.
 * We're just redirecting user-requests to the YouTube API.
 */

const express = require('express');
const app = express();
const configApp = require('./config')

// Port defined by Heroku, or default during development
const PORT = process.env.PORT || 8080;

// Config app
configApp(app)

app.listen(PORT, function() {
  // Maybe include other information?
  console.log(`Electro Cast Youtube service running on port: ${PORT}`)
})