const exampleSongData = require("./data/songs");

function printArtistsWithMultipleSongs(songs) {
    let artist = songs.map(song => song.artist)
    let obj = {}
    let mostSongsValue = 0
    let album;
    for(let i = 0; i < songs.length; i++) {
        if(obj.hasOwnProperty(songs[i].artist)){
            continue;
        }
        obj[songs[i].artist] = 0
    }
    for(let j = 0; j < artist.length; j++) {
        for(let key in obj) {
            if(artist[j] === key){
                obj[key]++
            }
        }
    }
    for(let key in obj) {
        if(obj[key] > 1 ) {
            console.log(key)
        }
    }
  }

console.log(printArtistsWithMultipleSongs(exampleSongData, "Saib"))
