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
  return  songs.map(song => song.album === albumName ? song.title : null).filter(Boolean)
}


// #3 
/**
 * Categorizes and counts songs based on their runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object with counts of short, medium, and long songs.
 */
function categorizeSongsByRuntime(songs) {
  return songs.reduce((runtimeObject, song) => {
    if(song.runtimeInSeconds < 180) {
      runtimeObject.shortSongs++
    }else if(song.runtimeInSeconds >= 180 && song.runtimeInSeconds <= 300) {
      runtimeObject.mediumSongs++
    }else if(song.runtimeInSeconds > 300) {
      runtimeObject.longSongs++
    }
    return runtimeObject
  }, {shortSongs: 0, mediumSongs: 0, longSongs: 0})
}

// #4
/**
 * Finds the album with the highest number of songs.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the album with the most songs.
 */
function findAlbumWithMostSongs(songs) {
  let albums = songs.map(song => song.album)
  let mostSongsValue = 0
  let album;
  albums.reduce((albumsObject, currAlbum) => {
    albumsObject[currAlbum] = (albumsObject[currAlbum] || 0) + 1
    if(albumsObject[currAlbum] > mostSongsValue) {
      mostSongsValue = albumsObject[currAlbum]
      album = currAlbum
    }
    return albumsObject
  },{})
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
  songs.forEach(song => song["durationInMinutes"] = song.runtimeInSeconds / 60)
  return songs
}

// #8
/**
 * Returns the album names in reverse alphabetical order.
 * @param {Object[]} songs - An array of songs.
 * @returns {string[]} Array of album names in reverse alphabetical order.
 */
function getAlbumsInReverseOrder(songs) {
  let albumArray = songs.map(song => song.album).sort((a, b) => {
    if(a > b) {
      return -1
    }else {
      return 1
    }
  });
  return albumArray.filter((album, index) => albumArray.indexOf(album) === index)
}

// #9
/**
 * Returns a list of song titles that contain a specific word.
 * @param {Object[]} songs - An array of songs.
 * @param {string} word - The word to search for in song titles.
 * @returns {string[]} An array of song titles containing the word.
 */
function songsWithWord(songs, word) {
  return songs.filter(song => song.title.includes(word)).map(song => song.title);
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
  return artist.reduce((artistObject, currArtist) => {
    artistObject[currArtist] = (artistObject[currArtist] || 0) + 1
    if(artistObject[currArtist] > 1) {
      console.log(currArtist)
    }
    return artistObject
  },{})
  // let obj = {}
  // for(let i = 0; i < songs.length; i++) {
  //   if(obj.hasOwnProperty(songs[i].artist)){
  //     continue;
  //   }
  //   obj[songs[i].artist] = 0
  // }
  // for(let j = 0; j < artist.length; j++) {
  //   for(let key in obj) {
  //     if(artist[j] === key){
  //       obj[key]++
  //     }
  //   }
  // }
  // for(let key in obj) {
  //   if(obj[key] > 1 ) {
  //     console.log(key)
  //   }
  // }
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
    obj[song.album] = (obj[song.album] || 0) + song.runtimeInSeconds
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
  return songs.find(song => song.title[0] === letter) || null;
}

// Problem #16
/**
 * Maps each artist to an array of their song titles.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object mapping each artist to an array of their song titles.
 */

function mapArtistsToSongs(songs) {
  // * MY CODE 
  return songs.reduce((object, song) => {
    let arr = []
    for(const songs2 of songs){
      if(song.artist === songs2.artist){
        arr.push(songs2.title)
      }
    }
    object[song.artist] = (object[song.artist] || arr)
    return object
  },{})
}

// Problem #17
/**
 * Finds the album with the longest average song runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the album with the longest average song runtime.
 */
// object[song.album] = (object[song.album] || r) += song.runtimeInSeconds && object[song.album].songCount++

function findAlbumWithLongestAverageRuntime(songs) {
  let longestAvg = 0
  let albumName = ""
  songs.reduce((object, song) => {
    if(!object[song.album]){
      object[song.album] = {
        runtimes: song.runtimeInSeconds,
        songCount: 1
      }
    }else {
      object[song.album].runtimes += song.runtimeInSeconds
      object[song.album].songCount++
    }
    let average = object[song.album].runtimes / object[song.album].songCount
    if(average > longestAvg) {
      longestAvg = average
      albumName = song.album
    }
    return object
  },{})
  return albumName;
}

// Problem #18
/**
 * Logs song titles sorted by their runtime.
 * @param {Object[]} songs - An array of songs.
 */
function printSongsSortedByRuntime(songs) {
  songs.sort((a, b) => a.runtimeInSeconds - b.runtimeInSeconds)
      .forEach((song) => console.log(song.title))
}

// Problem #19
/**
 * Prints a summary of each album, including its name, total runtime, and number of songs.
 * @param {Object[]} songs - An array of songs.
 */
function printAlbumSummaries(songs) {
  // * CLASSCODE
  let albumSummaries = {};
  songs.forEach(song => {
    if(!albumSummaries[song.album]){
      albumSummaries[song.album] = {
        albumName: song.album,
        songCount: 1,
        totalRuntime: song.runtimeInSeconds
        }
    }else {
      albumSummaries[song.album].songCount++;
      albumSummaries[song.album].totalRuntime += song.runtimeInSeconds;
    }
  })
  for(const summary in albumSummaries) {
    console.log(`${albumSummaries[summary].albumName}: ${albumSummaries[summary].songCount} songs, Total Runtime: ${albumSummaries[summary].totalRuntime} seconds`)
    //                                             To account for the s in a plural value       ^ ${albumSummaries[summary].songCount > 1 ? "s" : ""}
  }

  // * MYCODE
  // const albums = songs.map(song => song.album)
  // let albumWithRuntimeObject = {};
  // for(const album of albums) {
  //   const arr = []
  //   for(const song of songs) {
  //     if(album === song.album) {
  //       arr.push(song.runtimeInSeconds)
  //     }
  //   }
  //   if(albumWithRuntimeObject.hasOwnProperty(album)){
  //     continue;
  //   }
  //   albumWithRuntimeObject[album] = arr
  // }
  // for(const album in albumWithRuntimeObject){
  //   let songtotal = 0
  //   let totalRuntime = 0
  //   for(const time of albumWithRuntimeObject[album]) {
  //     totalRuntime += time
  //     songtotal++
  //   }
  //   console.log(`${album}: ${songtotal} songs, Total Runtime: ${totalRuntime} seconds`)
  // }
}

// Problem #20
/**
 * Finds the artist with the most songs in the list.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the artist with the most songs.
 */
function findArtistWithMostSongs(songs) {
  let artists = songs.map(song => song.artist)
  // let artistWithSongsObject = {};
  let artistWithMost;
  let highestValue = 0
  artists.reduce((artistObject, currArtist) => {
    artistObject[currArtist] = (artistObject[currArtist] || 0) + 1
    if(highestValue < artistObject[currArtist]) {
      highestValue = artistObject[currArtist]
      artistWithMost = currArtist
    }
    return artistObject
  },{})
  return artistWithMost
  // for(const artist of artists) {
  //   let totalSongs = 0
  //   for(const song of songs) {
  //     if(artist === song.artist) {
  //       totalSongs++
  //     }
  //   }
  //   if(artistWithSongsObject.hasOwnProperty(artist)){
  //     continue;
  //   }
  //   artistWithSongsObject[artist] = totalSongs
  // }
  // for(const key in artistWithSongsObject){
  //   if(artistWithSongsObject[key] > highestValue){
  //     artistWithMost = key
  //     highestValue = artistWithSongsObject[key]
  //   }
  // }
  // return artistWithMost
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
