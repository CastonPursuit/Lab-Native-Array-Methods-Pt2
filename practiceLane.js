const { get } = require("http");
const exampleSongData = require("./data/songs");

function printLongestSongTitle(songs) {
    let longestSong = songs.reduce((longest, song) => {
      if(longest.length < song.title.length) {
        longest = song.title
      }
      return longest
    },"")
    return longestSong
  }

console.log(printLongestSongTitle(exampleSongData))

