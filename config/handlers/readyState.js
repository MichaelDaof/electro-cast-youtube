/**
 * Check for service ready state and provide any default configs
 * for YouTube API queries
 */

function readyState(req, res) {
  res.send('I\'m ready! And I got some configuration data for you!')
}

module.exports = readyState;