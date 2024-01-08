const exampleSongData = require("./data/songs");

function categorizeSongsByRuntime(songs) {
    let shortSongs = songs.reduce((total, song) => {
      if(song.runtimeInSeconds < 180) {
        total++
      }
      return total
    }, 0)
    let mediumSongs = songs.reduce((total, song) => {
      if(song.runtimeInSeconds >= 180 && song.runtimeInSeconds <= 300) {
        total++
      }
      return total
    }, 0)
    let longSongs = songs.reduce((total, song) => {
      if(song.runtimeInSeconds > 300) {
        total++
      }
      return total
    }, 0)
    return {
      shortSongs: shortSongs,
      mediumSongs: mediumSongs,
      longSongs: longSongs
    }
  }

  console.log(categorizeSongsByRuntime(exampleSongData))