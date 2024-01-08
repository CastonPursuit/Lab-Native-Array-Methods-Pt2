const exampleSongData = require("./data/songs");

function getAlbumsInReverseOrder(songs) {
    return songs.map(song => song.album).sort((a, b) => {
      if(a > b) {
        return -1
      }else {
        return 1
      }
    } )
  }

console.log(getAlbumsInReverseOrder(exampleSongData))
