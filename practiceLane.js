const exampleSongData = require("./data/songs");

function getSongsFromAlbum(songs, albumName) {
  return  songs.map(song => song.album === albumName ? song.title : "").filter(Boolean)
}
  console.log(getSongsFromAlbum(exampleSongData,"Seasonal Sounds"))