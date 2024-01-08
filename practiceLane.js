const exampleSongData = require("./data/songs");

function findAlbumWithMostSongs(songs) {
    let albums = songs.map(song => song.album)
    let obj = {}
    let mostSongsValue = 0
    let album;
    for(let i = 0; i < songs.length; i++) {
        if(obj.hasOwnProperty(songs[i].album)){
            continue;
        }
        obj[songs[i].album] = 0
    }
    for(let j = 0; j < albums.length; j++) {
        for(let key in obj) {
            if(albums[j] === key){
                obj[key]++
            }
        }
    }
    for(let key in obj) {
        if(obj[key] > mostSongsValue) {
            mostSongsValue = obj[key]
            album = key
        }
    }
    return album
  }

  console.log(findAlbumWithMostSongs(exampleSongData))