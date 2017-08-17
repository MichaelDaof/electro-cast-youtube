/**
 * We're just re-mapping the client query to YouTube Data API.
 * Expecting one-to-one mapping.
 * 
 * This is basically a Google Developer API key-enabled redirect.
 */
const key = process.env.YOUTUBE_DEV_KEY || require('../../key.json').key;

function query(req, res) {
  const search = req.params.search;
  console.log(`q=${search} and ${key}`)
  res.send(`got ${search}`)
}

module.exports = query;