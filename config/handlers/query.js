/**
 * We're just re-mapping the client query to YouTube Data API.
 * Expecting one-to-one mapping.
 * 
 * This is basically a Google Developer API key-enabled redirect.
 */

const ytSearch = require('youtube-search');

let key;
try {
  key = process.env.YOUTUBE_DEV_KEY || require('../../key.json').key;
} catch(e) {
  key = key || 'dud';
  console.error('You don\'t have a valid source for your developer key. Check your process environment, or if developing locally, you\'ll have to create that file yourself')
  throw e
}

function query(req, res) {
  const search = req.params.search;
  ytSearch(search, { maxResults: 20, key }, function(err, result) {
    console.log('results: ', result, err)
    res.json(result)
  })
}

module.exports = query;