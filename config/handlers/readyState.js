/**
 * Check for service ready state and provide any default configs
 * for YouTube API queries
 * 
 * We're waking up our free Heroku server.
 */

function readyState(req, res) {
  res.json({ up: true })
}

module.exports = readyState;