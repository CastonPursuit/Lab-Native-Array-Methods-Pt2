/*
Native Array Methods pt.2 continues with the same dataset: songs. All required functions and array methods (forEach, map, find, some/every, sort) are combined into a single file, each addressing a distinct problem.
git commit -m 'Completed problem # using Y method'
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
  songs.sort((a,b) => {
    let songTitleA = a.title.toUpperCase();
    let songTitleB = b.title.toUpperCase();
    if (songTitleA > songTitleB)
      return 1;
    if (songTitleA < songTitleB)
      return -1;
  });

  return songs.map(x => x.title)
}

// #2
/**
 * Returns the titles of all songs from a specified album.
 * @param {Object[]} songs - An array of songs.
 * @param {string} albumName - Name of the album.
 * @returns {string[]} An array of song titles.
 */
function getSongsFromAlbum(songs, albumName) {
  return songs.filter((x) => x.album == albumName).map(x => x.title);
}

// #3 
/**
 * Categorizes and counts songs based on their runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object with counts of short, medium, and long songs.
 */
function categorizeSongsByRuntime(songs) {
  let short = songs.filter(x => x.runtimeInSeconds < 180);
  let medium = songs.filter(x => x.runtimeInSeconds >= 180 && x.runtimeInSeconds <= 300);
  let long = songs.filter(x => x.runtimeInSeconds > 300);
  return {longSongs: long.length, mediumSongs: medium.length, shortSongs: short.length};
}


// #4
/**
 * Finds the album with the highest number of songs.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the album with the most songs.
 */
function findAlbumWithMostSongs(songs) {
  let newSongs = {};

  songs.forEach(x => {
    if (!newSongs[x.album]){
      newSongs[x.album] = {
        title: x.album,
        songCount: 0
      };
    }
    else
      newSongs[x.album].songCount++;
  });

  let longestAlbum = {title: "album", songCount: 0};

  for(album in newSongs){
    if (newSongs[album].songCount > longestAlbum.songCount)
      longestAlbum = newSongs[album];
  }

  return longestAlbum['title'];
}

// #5
/**
 * Returns details of the first song in a specific album.
 * @param {Object[]} songs - An array of songs.
 * @param {string} albumName - Name of the album.
 * @returns {Object|null} First song object in the album or null.
 */
function getFirstSongInAlbum(songs, albumName) {
  albumArray = songs.map(x => x.album);
  return songs[albumArray.indexOf(albumName)];
}

// #6
/**
 * Checks if there is at least one song longer than a specified runtime.
 * @param {Object[]} songs - An array of songs.
 * @param {number} runtime - The runtime to check against in seconds.
 * @returns {boolean} True if there is at least one song longer than the runtime.
 */
function isThereLongSong(songs, runtime) {
  return songs.some(x => x.runtimeInSeconds > runtime);
}

// #7
/**
 * Transforms song data to show title and runtime in minutes.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object[]} Array of song objects with runtime in minutes.
 */
function getSongsWithDurationInMinutes(songs) {
  songs.forEach(x => x.durationInMinutes = x.runtimeInSeconds/60);
  return songs
}

// #8
/**
 * Returns the album names in reverse alphabetical order.
 * @param {Object[]} songs - An array of songs.
 * @returns {string[]} Array of album names in reverse alphabetical order.
 */
function getAlbumsInReverseOrder(songs) {
  albumArray = [];

  songs.forEach(x => {
    if (!albumArray.includes(x.album))
      albumArray.push(x.album);
  });

  albumArray.sort((album1, album2) => {
    album1 = album1.toUpperCase();
    album2 = album2.toUpperCase();
    if (album1 > album2) return -1;
    if (album2 < album2) return 1;
  });

  return albumArray;
}

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
function printArtistsWithMultipleSongs(songs) {}

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
