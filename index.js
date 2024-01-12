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

console.log(getSortedTitles(exampleSongData));

// #2
/**
 * Returns the titles of all songs from a specified album.
 * @param {Object[]} songs - An array of songs.
 * @param {string} albumName - Name of the album.
 * @returns {string[]} An array of song titles.
 */
function getSongsFromAlbum(songs, albumName) {
  return songs.filter(x => x.album === albumName).map(x => x.title);
}
console.log(getSongsFromAlbum(exampleSongData, 'Bi-To Te-Pu'))

// #3 
/**
 * Categorizes and counts songs based on their runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object with counts of short, medium, and long songs.
 */
function categorizeSongsByRuntime(songs) {
 return { 
        longSongs: songs.filter(x => x.runtimeInSeconds > 220).length,
        mediumSongs: songs.filter(x => x.runtimeInSeconds >= 180).length,
        shortSongs: songs.filter(x => x.runtimeInSeconds < 180).length
 };
      };


      // songs.forEach((song) => {
      //   if (song.runtimeInSeconds < 180) {
      //     runtimeCategorization.short++;
      //   } else if (song.runtimeInSeconds >= 180 && song.runtimeInSeconds <= 300) {
      //     runtimeCategorization.medium++;
      //   } else if (song.runtimeInSeconds > 300) {
      //     runtimeCategorization.long++;
      //   }
      // });




console.log(categorizeSongsByRuntime(exampleSongData))

// #4
/**
 * Finds the album with the highest number of songs.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the album with the most songs.
 */
function findAlbumWithMostSongs(songs) {
  let highestSongCount = 0;
  let albumWithMostSongs;

  songs.reduce((songCountObj, currValue) => {
  songCountObj[currValue.album] = (songCountObj[currValue.album] || 0) + 1;
  if(songCountObj[currValue.album] > highestSongCount){
    highestSongCount = songCountObj[currValue.album];
    albumWithMostSongs = currValue.album
  }
  return songCountObj;
}, {});

return albumWithMostSongs;
}

console.log(findAlbumWithMostSongs(exampleSongData))

// #5
/**
 * Returns details of the first song in a specific album.
 * @param {Object[]} songs - An array of songs.
 * @param {string} albumName - Name of the album.
 * @returns {Object|null} First song object in the album or null.
 */
function getFirstSongInAlbum(songs, albumName) {
 let getAlbumDetails = songs.find((x) => {
  return {} === albumName
 })
 return getAlbumDetails;

}




// #6
/**
 * Checks if there is at least one song longer than a specified runtime.
 * @param {Object[]} songs - An array of songs.
 * @param {number} runtime - The runtime to check against in seconds.
 * @returns {boolean} True if there is at least one song longer than the runtime.
 */
function isThereLongSong(songs, runtime) {
  Array.prototype.every.call(songs, (x) => typeof x.runtime < 400)
}

// #7
/**
 * Transforms song data to show title and runtime in minutes.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object[]} Array of song objects with runtime in minutes.
 */
function getSongsWithDurationInMinutes(songs) {}

// #8
/**
 * Returns the album names in reverse alphabetical order.
 * @param {Object[]} songs - An array of songs.
 * @returns {string[]} Array of album names in reverse alphabetical order.
 */
function getAlbumsInReverseOrder(songs) {}

// #9
/**
 * Returns a list of song titles that contain a specific word.
 * @param {Object[]} songs - An array of songs.
 * @param {string} word - The word to search for in song titles.
 * @returns {string[]} An array of song titles containing the word.
 */
function songsWithWord(songs, word) {}

// #10
/**
 * Returns the total runtime of songs by a specific artist.
 * @param {Object[]} songs - An array of songs.
 * @param {string} artistName - Name of the artist.
 * @returns {number} Total runtime in seconds.
 */
function getTotalRuntimeOfArtist(songs, artistName) {}

// Problem #11
/**
 * Prints artists who have more than one song in the list.
 * @param {Object[]} songs - An array of songs.
 */
function printArtistsWithMultipleSongs(songs) {
  let artistSongCount = {};
  songs.forEach((song) => {
    if(artistSongCount[song.artist]){
      artistSongCount[song.artist]++;
    }else{
      artistSongCount[song.artist] = 1;
    }
    if(artistSongCount[song.artist] > 1){
      console.log(song.artist);
    }
    return artistSongCount;
  });
  }

  console.log(printArtistsWithMultipleSongs(exampleSongData))
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
function listAlbumTotalRuntimes(songs) {
  let albumTotalRuntimes = {};

  songs.forEach(song => {
    if(albumTotalRuntimes[song.album]){
      albumTotalRuntimes[song.album] += song.runtimeInSeconds;
    }else {
      albumTotalRuntimes[song.album] = song.runtimeInSeconds
    }
  })

  return albumTotalRuntimes;
}

console.log(listAlbumTotalRuntimes(exampleSongData))

// Problem #15
/** 
 * Finds the first song with a title starting with a specific letter.
 * @param {Object[]} songs - An array of songs.
 * @param {string} letter - The letter to search for.
 * @returns {Object|null} The first song object that matches the criterion or null.
 */
function findFirstSongStartingWith(songs, letter) {
  const firstSongWithLetter = songs.find(song => song.title[0] === letter);
  return firstSongWithLetter
};

console.log(findFirstSongStartingWith(exampleSongData, "U") )

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
