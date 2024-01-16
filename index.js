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
  return songs.map(song => song.title).sort();
}


// #2
/**
 * Returns the titles of all songs from a specified album.
 * @param {Object[]} songs - An array of songs.
 * @param {string} albumName - Name of the album.
 * @returns {string[]} An array of song titles.
 */
function getSongsFromAlbum(songs, albumName) {
  return songs.filter(songByAlbum => songByAlbum.album === albumName).map(songArr => songArr.title)
}

// #3 
/**
 * Categorizes and counts songs based on their runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object with counts of short, medium, and long songs.
 */
function categorizeSongsByRuntime(songs) {
  const songLength = {shortSongs: 0 , mediumSongs: 0,longSongs: 0 }
 
  songs.forEach(song => {
  if (song.runtimeInSeconds < 180){
   songLength.shortSongs++
  } else if (song.runtimeInSeconds >= 180 && song.runtimeInSeconds < 240){
    songLength.mediumSongs++
  } else {
    songLength.longSongs++
  }
  })

  return songLength


}

// #4
/**
 * Finds the album with the highest number of songs.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the album with the most songs.
 */
function findAlbumWithMostSongs(songs) {
  const albumWithMost = songs.reduce((acc,song) => {
     if (acc[song.album]) {
      acc[song.album]++
     } else {
      acc[song.album] = 1
     }
     return acc
  
    }, {});
    
    let count = 0
    let result = ''
    for (const song in albumWithMost) {
      if(albumWithMost[song] > count) {
        count = albumWithMost[song]++
        result = song.album
    }
    return result
  }
}


// #5
/**
 * Returns details of the first song in a specific album.
 * @param {Object[]} songs - An array of songs.
 * @param {string} albumName - Name of the album.
 * @returns {Object|null} First song object in the album or null.
 */
function getFirstSongInAlbum(songs, albumName) {
  const findFirstSong = songs.find(song => song.album === albumName);
  return findFirstSong || null ;
}

// #6
/**
 * Checks if there is at least one song longer than a specified runtime.
 * @param {Object[]} songs - An array of songs.
 * @param {number} runtime - The runtime to check against in seconds.
 * @returns {boolean} True if there is at least one song longer than the runtime.
 */
function isThereLongSong(songs, runtime) {
 if (songs.some(song => song.runtimeInSeconds > runtime)){
  return true
 };
}

// #7
/**
 * Transforms song data to show title and runtime in minutes.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object[]} Array of song objects with runtime in minutes.
 */
function getSongsWithDurationInMinutes(songs) {
  return songs.map(song => ({
    title: song.title,
    durationInMinutes: song.runtimeInSeconds / 60
  }));
}

// #8
/**
 * Returns the album names in reverse alphabetical order.
 * @param {Object[]} songs - An array of songs.
 * @returns {string[]} Array of album names in reverse alphabetical order.
 */
function getAlbumsInReverseOrder(songs) {
 return songs.map(song => song.album).sort((b,a) => {
    if (a>b) {
      return -1;
    } else if (b>a) {
      return 1;
    } else {
      return 0;
    }
  });
}

// #9
/**
 * Returns a list of song titles that contain a specific word.
 * @param {Object[]} songs - An array of songs.
 * @param {string} word - The word to search for in song titles.
 * @returns {string[]} An array of song titles containing the word.
 */
function songsWithWord(songs, word) {
  let listOfSongs = songs.filter(song => song.title.includes(word));
  let songTitles = listOfSongs.map(song => song.title);
  return songTitles;
}

// #10
/**
 * Returns the total runtime of songs by a specific artist.
 * @param {Object[]} songs - An array of songs.
 * @param {string} artistName - Name of the artist.
 * @returns {number} Total runtime in seconds.
 */
function getTotalRuntimeOfArtist(songs, artistName) {
 let songsByArtist = songs.filter(song => song.artist === artistName);
 let runtimeCount = 0
 for (let i = 0; i < songsByArtist.length; i++) {
  runtimeCount += songsByArtist[i].runtimeInSeconds
 } 
 return runtimeCount
}

// Problem #11
/**
 * Prints artists who have more than one song in the list.
 * @param {Object[]} songs - An array of songs.
 */
function printArtistsWithMultipleSongs(songs) {
  let artists = songs.map(song => song.artist);

  for (let i = 0; i < artists.length; i++) {
    if (artists.indexOf(artists[i]) !== artists.lastIndexOf(artists[i])) {
      console.log(artists[i]);
    }
  }
}

// Problem #12
/**
 * Logs the longest song title.
 * @param {Object[]} songs - An array of songs.
 */
function printLongestSongTitle(songs) {}

// Problem #13
/**
 * Sorts songs by artist name, then by song title alphabetically.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object[]} Sorted array of songs.
 */
function sortSongsByArtistAndTitle(songs) {}

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
function mapArtistsToSongs(songs) {
  let artistMap = {};
  songs.map(song => {
    if (!artistMap.hasOwnProperty(song.artist)){
      artistMap[song.artist] = [song.title]
    }
    else {
      artistMap[song.artist].push(song.title)
    }
  })
  
  return artistMap

}


// Problem #17
/**
 * Finds the album with the longest average song runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the album with the longest average song runtime.
 */


function findAlbumWithLongestAverageRuntime(songs) {}
//   const albumAverageRuntime = {};
//    let albumName = ''
//    let longestAvgRuntime = 0

//    songs.forEach(song => {
//     if (!albumAverageRuntime[song.album]) {
//       albumAverageRuntime[song.album] = {
//         totalrunTime: song.runtimeInSeconds, 
//         songCount: 1, 
//         avgRuntime: runtimeInSeconds,
//       };
//     } else {
//       albumAverageRuntime[song.album].totalrunTime += song.runtimeInSeconds;
//       albumAverageRuntime[song.album].songCount++;
//       albumAverageRuntime[song.album] = avgRuntime +(
//         albumAverageRuntime[song.album].totalrunTime /
//         albumAverageRuntime[song.album].songCount
//       )
//     }
//     if (albumAverageRuntime[song.album].avgRuntime > longestAvgRuntime) {
//       longestAvgRuntime = albumAverageRuntime[song.album].avgRuntime;
//       albumName = song.album
//     }
//   });
//     
//     return avgRuntime.albumName

// }


// Problem #18
/**
 * Logs song titles sorted by their runtime.
 * @param {Object[]} songs - An array of songs.
 */
function printSongsSortedByRuntime(songs) {
// let songsSortedByRuntime = songs.sort((songA,songB)=> songA.runtimeInSeconds - songB.runtimeInSeconds);

// songsSortedByRuntime.forEach((song)=> console.log(song.title))

}

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
