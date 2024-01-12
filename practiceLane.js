const exampleSongData = require("./data/songs");

function getSongsWithDurationInMinutes(songs) {
  songs.forEach(song => song["durationInMinutes"] = song.runtimeInSeconds / 60)
  return songs
  // for(let i = 0; i < songs.length; i++) {
  //   songs[i].durationInMinutes = songs[i].runtimeInSeconds / 60
  // }
  // return songs;
}
  console.log(getSongsWithDurationInMinutes(exampleSongData))