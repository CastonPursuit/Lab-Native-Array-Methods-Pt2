const { get } = require("http");
const exampleSongData = require("./data/songs");

function sortSongsByArtistAndTitle(songs) {
    let sortArtist = songs.sort((a, b) => a.artist.localeCompare(b.artist))
    return sortArtist.sort((a, b) => a.title.localeCompare(b.title))
  }

console.log(sortSongsByArtistAndTitle(exampleSongData))

