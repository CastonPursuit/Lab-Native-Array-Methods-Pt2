/*
Native Array Methods pt.2 continues with the same dataset: songs. All required functions and array methods (forEach, map, find, some/every, sort) are combined into a single file, each addressing a distinct problem.
*/


const exampleSongData = require("./data/songs");
// Do not change the line above.


// #1
/**
 * Returns the titles of songs sorted alphabetically.
 * @param {Object[]} songs - An array of songs.
 * @returns {string[]} Sorted song titles.
 */
function getSortedTitles(songs) {
  return songs.map(x => x.title).sort();
}

// #2
/**
 * Returns the titles of all songs from a specified album.
 * @param {Object[]} songs - An array of songs.
 * @param {string} albumName - Name of the album.
 * @returns {string[]} An array of song titles.
 */
function getSongsFromAlbum(songs, albumName) {
  let newArr = [];
  for(let i = 0; i < songs.length; i++){
    if(songs[i].album === albumName){
      newArr.push(songs[i].title)
    }
  }
  return newArr
}


// #3 
/**
 * Categorizes and counts songs based on their runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object with counts of short, medium, and long songs.
 */
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

// #4
/**
 * Finds the album with the highest number of songs.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the album with the most songs.
 */
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

// #5
/**
 * Returns details of the first song in a specific album.
 * @param {Object[]} songs - An array of songs.
 * @param {string} albumName - Name of the album.
 * @returns {Object|null} First song object in the album or null.
 */
function getFirstSongInAlbum(songs, albumName) {
  return songs.find(song => song.album === albumName)
}

// #6
/**
 * Checks if there is at least one song longer than a specified runtime.
 * @param {Object[]} songs - An array of songs.
 * @param {number} runtime - The runtime to check against in seconds.
 * @returns {boolean} True if there is at least one song longer than the runtime.
 */
function isThereLongSong(songs, runtime) {
  return songs.some(song => song.runtimeInSeconds > runtime)
}

// #7
/**
 * Transforms song data to show title and runtime in minutes.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object[]} Array of song objects with runtime in minutes.
 */
function getSongsWithDurationInMinutes(songs) {
  for(let i = 0; i < songs.length; i++) {
    songs[i].durationInMinutes = songs[i].runtimeInSeconds / 60
  }
  return songs;
}

// #8
/**
 * Returns the album names in reverse alphabetical order.
 * @param {Object[]} songs - An array of songs.
 * @returns {string[]} Array of album names in reverse alphabetical order.
 */
function getAlbumsInReverseOrder(songs) {
  let array =  songs.map(song => song.album).sort((a, b) => {
    if(a > b) {
      return -1
    }else {
      return 1
    }
  })
  for(let i = 0; i < array.length; i++) {
    if(array[i] === array[i + 1] || array[i] === array[i - 1]){
      array.splice(i,1)
    }
  }
  return array
}

// #9
/**
 * Returns a list of song titles that contain a specific word.
 * @param {Object[]} songs - An array of songs.
 * @param {string} word - The word to search for in song titles.
 * @returns {string[]} An array of song titles containing the word.
 */
function songsWithWord(songs, word) {
  let array = []
  let newArr = songs.filter(song => song.title.includes(word))
  for(const obj of newArr){
      array.push(obj.title)
  }
  return array
}


// #10
/**
 * Returns the total runtime of songs by a specific artist.
 * @param {Object[]} songs - An array of songs.
 * @param {string} artistName - Name of the artist.
 * @returns {number} Total runtime in seconds.
 */
function getTotalRuntimeOfArtist(songs, artistName) {
  return songs.reduce((total, song) => {
    if(song.artist == artistName){
      total += song.runtimeInSeconds
    }
    return total
  },0)
}

// Problem #11
/**
 * Prints artists who have more than one song in the list.
 * @param {Object[]} songs - An array of songs.
 */
function printArtistsWithMultipleSongs(songs) {
  let artist = songs.map(song => song.artist)
  let obj = {}
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

// Problem #12
/**
 * Logs the longest song title.
 * @param {Object[]} songs - An array of songs.
 */
function printLongestSongTitle(songs) {
  let longestSong = songs.reduce((longest, song) => {
    if(longest.length < song.title.length) {
      longest = song.title
    }
    return longest
  },"")
  console.log(longestSong) 
}

// Problem #13
/**
 * Sorts songs by artist name, then by song title alphabetically.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object[]} Sorted array of songs.
 */
function sortSongsByArtistAndTitle(songs) {
  let sortArtist = songs.sort((a, b) => a.artist.localeCompare(b.artist))
  return sortArtist.sort((a, b) => a.title.localeCompare(b.title))
}

// Problem #14
/**
 * Lists albums along with their total runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object mapping each album to its total runtime.
 */
function listAlbumTotalRuntimes(songs) {}

// Problem #15
/**
 * Finds the first song with a title starting with a specific letter.
 * @param {Object[]} songs - An array of songs.
 * @param {string} letter - The letter to search for.
 * @returns {Object|null} The first song object that matches the criterion or null.
 */
function findFirstSongStartingWith(songs, letter) {}

// Problem #16
/**
 * Maps each artist to an array of their song titles.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object mapping each artist to an array of their song titles.
 */
function mapArtistsToSongs(songs) {}

// Problem #17
/**
 * Finds the album with the longest average song runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the album with the longest average song runtime.
 */
function findAlbumWithLongestAverageRuntime(songs) {}

// Problem #18
/**
 * Logs song titles sorted by their runtime.
 * @param {Object[]} songs - An array of songs.
 */
function printSongsSortedByRuntime(songs) {}

// Problem #19
/**
 * Prints a summary of each album, including its name, total runtime, and number of songs.
 * @param {Object[]} songs - An array of songs.
 */
function printAlbumSummaries(songs) {}

// Problem #20
/**
 * Finds the artist with the most songs in the list.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the artist with the most songs.
 */
function findArtistWithMostSongs(songs) {}


module.exports = {
  getSortedTitles,
  getSongsFromAlbum,
  categorizeSongsByRuntime, 
  findAlbumWithMostSongs,
  getFirstSongInAlbum,
  isThereLongSong,
  getSongsWithDurationInMinutes,
  getAlbumsInReverseOrder,
  songsWithWord,
  getTotalRuntimeOfArtist,
  printArtistsWithMultipleSongs,
  sortSongsByArtistAndTitle,
  printLongestSongTitle,
  listAlbumTotalRuntimes,
  findFirstSongStartingWith,
  mapArtistsToSongs,
  findAlbumWithLongestAverageRuntime,
  printSongsSortedByRuntime,
  printAlbumSummaries,
  findArtistWithMostSongs
};;
