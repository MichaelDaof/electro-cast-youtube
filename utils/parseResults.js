function parseResults(data) {
  const parsed = {
    byId: {},
    order: []
  }
  for (let i = 0; i < data.length; i++) {
    let video = data[i];
    if (video.kind === 'youtube#video') {
      let id = video.id
      parsed.byId[id] = {
        id: id,
        title: video.title,
        // We're looking for an image with width of 120px and height of 90px
        thumbnail: video.thumbnails.default.url,
        description: video.description
      }
      parsed.order.push(id)
    }
  }
  return parsed;
}

module.exports = parseResults;