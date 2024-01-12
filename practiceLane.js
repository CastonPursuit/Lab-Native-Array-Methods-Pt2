const exampleSongData = require("./data/songs");

function songsWithWord(songs, word) {
    let array = []
    let newArr = songs.filter(song => song.title.includes(word))
    for(const obj of newArr){
      array.push(obj.title)
    }
    return array
  }

  console.log(songsWithWord(exampleSongData))