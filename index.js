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
  // ! I wanted to create an object with the key being the album name and the values being the amount of songs on the album
  let albums = songs.map(song => song.album)
  let obj = {}
  let mostSongsValue = 0
  let album;
  // ! This loop is creating key(album) value(0) pairs in the obj variable. if the key is already created it continues in the loop so there is no duplicates
  for(let i = 0; i < songs.length; i++) {
    if(obj.hasOwnProperty(songs[i].album)){
      continue;
    }
    obj[songs[i].album] = 0
  }
  // ! These loops is counting the songs with the same album name to give values in the obj variable
  for(let j = 0; j < albums.length; j++) {
    for(let key in obj) {
      if(albums[j] === key){
        obj[key]++
      }
    }
  }
  // ! this loop is assigning the album with the most songs to return the album with the most songs
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
  // ! This mpas the albums in to its own array then its sorts the album names in reverse order 
  let array =  songs.map(song => song.album).sort((a, b) => {
    if(a > b) {
      return -1
    }else {
      return 1
    }
  })
  //  ! This removes the duplicate album names
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
  return songs.sort((a, b) => {
    return a.artist.localeCompare(b.artist) || a.title.localeCompare(b.title);
  })
}



// Problem #14
/**
 * Lists albums along with their total runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object mapping each album to its total runtime.
 */
function listAlbumTotalRuntimes(songs) {
  return songs.reduce((obj, song) => {
    if(obj.hasOwnProperty(song.album)) {
      obj[song.album] += song.runtimeInSeconds
    }else {
      obj[song.album] = song.runtimeInSeconds
    } 
    return obj;
  },{})
}

// Problem #15
/**
 * Finds the first song with a title starting with a specific letter.
 * @param {Object[]} songs - An array of songs.
 * @param {string} letter - The letter to search for.
 * @returns {Object|null} The first song object that matches the criterion or null.
 */
function findFirstSongStartingWith(songs, letter) {
  return songs.find(song => song.title.charAt(0) === letter ? song : null)
}


// Problem #16
/**
 * Maps each artist to an array of their song titles.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object mapping each artist to an array of their song titles.
 */

function mapArtistsToSongs(songs) {
  // ! With this I wanted to create an object with the key being the artist and the value being and array of the artist songs
  // ! Map out an array of the artist
  const artists = songs.map(song => song.artist)
  // ! create an object to return 
  const mappedObject = {};
  // ! Loop through the artist array
  for(const artist of artists) {
  // ! create an array for every artist
    const arr = []
  // ! Now loop through the songs array
    for(const song of songs) {
  // ! if the artist we are currently on in the artist loop equals the current song object artist push the current song object title in the arr 
      if(artist === song.artist) {
        arr.push(song.title)
      }
    }
  // ! after that loop the array will have the artist songs in from the songs loop and assigin the key and value pairs
    if(mappedObject.hasOwnProperty(artist)){
      continue;
    }
    mappedObject[artist] = arr
  }
  return mappedObject
}


// Problem #17
/**
 * Finds the album with the longest average song runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the album with the longest average song runtime.
 */
function findAlbumWithLongestAverageRuntime(songs) {
  const albums = songs.map(song => song.album)
  let mappedObject = {};
  let longest = 0
  let albumName = ""
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
    let total = 0
    let songAmount = 0
    for(const time of mappedObject[album]) {
      total += time
      songAmount++ 
    }
    mappedObject[album] = Math.round(total / songAmount)
  }
  for(const album in mappedObject){
    if(mappedObject[album] > longest){
      longest = mappedObject[album]
      albumName = album
    }
  }
  return albumName
}

// Problem #18
/**
 * Logs song titles sorted by their runtime.
 * @param {Object[]} songs - An array of songs.
 */
function printSongsSortedByRuntime(songs) {
  let sortedRunitimes = songs.sort((a, b) => a.runtimeInSeconds - b.runtimeInSeconds)
  for(const song of sortedRunitimes) {
    console.log(song.title)
  }
}

// Problem #19
/**
 * Prints a summary of each album, including its name, total runtime, and number of songs.
 * @param {Object[]} songs - An array of songs.
 */
function printAlbumSummaries(songs) {
  const albums = songs.map(song => song.album)
  let albumWithRuntimeObject = {};
  for(const album of albums) {
    const arr = []
    for(const song of songs) {
      if(album === song.album) {
        arr.push(song.runtimeInSeconds)
      }
    }
    if(albumWithRuntimeObject.hasOwnProperty(album)){
      continue;
    }
    albumWithRuntimeObject[album] = arr
  }
  for(const album in albumWithRuntimeObject){
    let songtotal = 0
    let totalRuntime = 0
    for(const time of albumWithRuntimeObject[album]) {
      totalRuntime += time
      songtotal++
    }
    console.log(`${album}: ${songtotal} songs, Total Runtime: ${totalRuntime} seconds`)
  }
}
// Problem #20
/**
 * Finds the artist with the most songs in the list.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the artist with the most songs.
 */
function findArtistWithMostSongs(songs) {
  const artists = songs.map(song => song.artist)
  let artistWithSongsObject = {};
  let artistWithMost;
  let highestValue = 0
  for(const artist of artists) {
    let totalSongs = 0
    for(const song of songs) {
      if(artist === song.artist) {
        totalSongs++
      }
    }
    if(artistWithSongsObject.hasOwnProperty(artist)){
      continue;
    }
    artistWithSongsObject[artist] = totalSongs
  }
  for(const key in artistWithSongsObject){
    if(artistWithSongsObject[key] > highestValue){
      artistWithMost = key
      highestValue = artistWithSongsObject[key]
    }
  }
  return artistWithMost
}


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
