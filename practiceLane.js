const { availableParallelism } = require("os");
const exampleSongData = require("./data/songs");

function findAlbumWithLongestAverageRuntime(songs) {
    const albums = songs.map(song => song.album)
    const mappedObject = {};
    for(const album of albums) {
      const arr = []
      for(const song of songs) {
        if(album === song.album) {
          arr.push(song.runtimeInSeconds)
        }
      }
      if(mappedObject.hasOwnProperty(album)){
        continue;
      }
      mappedObject[album] = arr
    }
    for(const album in mappedObject){
        let average = 0
        let songAmount = 0
        for(const time of mappedObject[album]) {
            average += time
            songAmount++ 
        }
        mappedObject[album] = Math.round(average / songAmount)
    }
    let longest = 0
    for(const album in mappedObject){
        if(mappedObject[album] > longest){
            longest = mappedObject[album]
        }
    }
    return longest
}
console.log(findAlbumWithLongestAverageRuntime(exampleSongData))
