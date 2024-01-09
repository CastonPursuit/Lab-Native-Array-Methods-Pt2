const { get } = require("http");
const exampleSongData = require("./data/songs");

function listAlbumTotalRuntimes(songs) {
    const albumObj = {}
    for(let i = 0; i < songs.length; i++) {
      if(albumObj.hasOwnProperty(songs[i].album)){
        albumObj[songs[i].album] += songs[i].runtimeInSeconds
    }
    albumObj[songs[i].album] = songs[i].runtimeInSeconds
    }
    return albumObj
}
// console.log(listAlbumTotalRuntimes(exampleSongData))
