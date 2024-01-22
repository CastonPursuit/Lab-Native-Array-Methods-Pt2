const exampleSongData = require("./data/songs");

function findAlbumWithLongestAverageRuntime(songs) {
  let longest = 0
  let albumName = ""
  let mappedObject = songs.reduce((object, song) => {
    if(!object[song.album]){
      object[song.album] = {
        runtimes: song.runtimeInSeconds,
        songCount: 1
      }
    }else {
      object[song.album].runtimes += song.runtimeInSeconds
      object[song.album].songCount++
    }
    return object
  },{})
  for(const album in mappedObject) {
    let average = mappedObject[album].runtimes / mappedObject[album].songCount
    if(average > longest) {
      longest = average
      albumName = album
    }
  }
  return albumName
}

  console.log(findAlbumWithLongestAverageRuntime(exampleSongData))