const exampleSongData = require("./data/songs");

function songsWithWord(songs, word) {
    return songs.filter(song => song.title.includes(word))
  }

console.log(songsWithWord(exampleSongData, "Berlin"))
