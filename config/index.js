/**
 * Routing! And handlers!
 */

const query = require('./handlers/query');
const readyState = require('./handlers/readyState')

function configApp(app) {
  app.get('/ready', readyState)
  app.get('/yt/:search', query)
}

module.exports = configApp;