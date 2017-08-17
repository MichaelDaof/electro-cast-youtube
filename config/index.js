/**
 * Routing and middleware! And handlers!
 */
const enableCors = require('./middleware/enableCors')
const query = require('./handlers/query');
const readyState = require('./handlers/readyState');

function configApp(app) {
  app.use(enableCors)
  app.get('/ready', readyState)
  app.get('/yt/:search', query)
}

module.exports = configApp;