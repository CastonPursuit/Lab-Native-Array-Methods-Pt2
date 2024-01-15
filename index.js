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
function getSortedTitles(songs) {  // COMPLETE!
  let allTitles = [];
  for (let i = 0; i < exampleSongData.length; i++) {
    if (songs[i].title)
      allTitles.push(exampleSongData[i].title);
  }
  return allTitles.sort((a, b) => a < b ? -1 : 1);
}

console.log(getSortedTitles(exampleSongData));

// #2
/**
 * Returns the titles of all songs from a specified album.
 * @param {Object[]} songs - An array of songs.
 * @param {string} albumName - Name of the album.
 * @returns {string[]} An array of song titles.
 */
function getSongsFromAlbum(songs, albumName) { // COMPLETE!
  return songs
    .filter((song) => song.album === albumName)
    .map((song) => song.title);
}

console.log(getSongsFromAlbum(exampleSongData, "Horizon Lines"));

// #3 
/**
 * Categorizes and counts songs based on their runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object with counts of short, medium, and long songs.
 */
function categorizeSongsByRuntime(songs) { // COMPLETE!!
  let resultObj = {};
  resultObj['longSongs'] = songs.filter(song => song.runtimeInSeconds > 300).length;
  resultObj['mediumSongs'] = songs.filter(song => (song.runtimeInSeconds > 176) && (song.runtimeInSeconds <= 300)).length;
  resultObj['shortSongs'] = songs.filter(song => (song.runtimeInSeconds > 0) && (song.runtimeInSeconds <= 175)).length;
  return resultObj;
}

console.log(categorizeSongsByRuntime(exampleSongData));

// #4
/**
 * Finds the album with the highest number of songs.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the album with the most songs.
 */
function findAlbumWithMostSongs(songs) { // COMPLETE!!!
  let obj = {};
  let albumWithMostSongs = '';
  let maxNumOfSongs = 0;
  
  songs.forEach((x) => {
    if (obj[x.album]) {
      if (x.title) {
        obj[x.album] += 1;
      }
    } else {
      obj[x.album] = 1;
    }
  });

  for (let key in obj) {
    if (obj[key] > maxNumOfSongs) {
      maxNumOfSongs = obj[key];
      albumWithMostSongs = key;
    }
  }
  
  return albumWithMostSongs;
}

console.log(findAlbumWithMostSongs(exampleSongData));

// #5
/**
 * Returns details of the first song in a specific album.
 * @param {Object[]} songs - An array of songs.
 * @param {string} albumName - Name of the album.
 * @returns {Object|null} First song object in the album or null.
 */
function getFirstSongInAlbum(songs, albumName) { // COMPLETE!!!
  for (let i = 0; i < songs.length; i++) {
    if (songs[i].album === albumName)
      return songs[i];
  }
}

console.log(getFirstSongInAlbum(exampleSongData, 'Bi-To Te-Pu'));


// #6
/**
 * Checks if there is at least one song longer than a specified runtime.
 * @param {Object[]} songs - An array of songs.
 * @param {number} runtime - The runtime to check against in seconds.
 * @returns {boolean} True if there is at least one song longer than the runtime.
 */
function isThereLongSong(songs, runtime) { // COMPLETE!!!
  for (let i = 0; i < songs.length; i++) {
    if (songs[i].runtimeInSeconds > runtime) {
      return true;
    }
  }
}

console.log(isThereLongSong(exampleSongData, 200));

// #7
/**
 * Transforms song data to show title and runtime in minutes.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object[]} Array of song objects with runtime in minutes.
 */
function getSongsWithDurationInMinutes(songs) { // (!!!) INCOMPLETE!!!
  let resultArr = [];
  for (let i = 0; i < songs.length; i++) {
    let obj = {};
    obj[songs[i].title] = Math.floor(songs[i].runtimeInSeconds / 60); // Need to figure out how to properly turn into minutes
    resultArr.push(obj);
  }
  return resultArr;
}

console.log(getSongsWithDurationInMinutes(exampleSongData));

// #8
/**
 * Returns the album names in reverse alphabetical order.
 * @param {Object[]} songs - An array of songs.
 * @returns {string[]} Array of album names in reverse alphabetical order.
 */
function getAlbumsInReverseOrder(songs) { // COMPLETE!!!
  return Array.from(new Set(songs.map(song => song.album))).sort().reverse()
}

console.log(getAlbumsInReverseOrder(exampleSongData));

// #9
/**
 * Returns a list of song titles that contain a specific word.
 * @param {Object[]} songs - An array of songs.
 * @param {string} word - The word to search for in song titles.
 * @returns {string[]} An array of song titles containing the word.
 */
function songsWithWord(songs, word) { // COMPLETE!!!
  let titleWithWords = [];
  for (let i = 0; i < songs.length; i++) {
    if ((songs[i].title).includes(word)) {
      titleWithWords.push(songs[i].title);
    }
  }
  return titleWithWords;
}

console.log(songsWithWord(exampleSongData, 'of'));

// #10
/**
 * Returns the total runtime of songs by a specific artist.
 * @param {Object[]} songs - An array of songs.
 * @param {string} artistName - Name of the artist.
 * @returns {number} Total runtime in seconds.
 */
function getTotalRuntimeOfArtist(songs, artistName) {
  let runtimeTotal = 0;
  for (let i = 0; i < songs.length; i++) {
    if (songs[i].artist === artistName) {
      runtimeTotal += songs[i].runtimeInSeconds;
    } 
  }
  return runtimeTotal;
}

console.log(getTotalRuntimeOfArtist(exampleSongData, "Echo Vistas"));

// Problem #11
/**
 * Prints artists who have more than one song in the list.
 * @param {Object[]} songs - An array of songs.
 */

function printArtistsWithMultipleSongs(songs) { // COMPLETE!!!
  let obj = {};

  songs.forEach((x) => {
    if (obj[x.artist]) {
      if (x.title)
        obj[x.artist] += 1;
    } else {
      obj[x.artist] = 1;
    }
  });

  for (let key in obj) {
    if (obj[key] > 1)
      console.log(key);
  }
}

printArtistsWithMultipleSongs(exampleSongData);

// Problem #12
/**
 * Logs the longest song title.
 * @param {Object[]} songs - An array of songs.
 */
function printLongestSongTitle(songs) {
  let longestSongTitle = '';
  let titlesArr = [];
  let songTitleLength = 0; 

  songs.forEach((x) => {
    if (x.title) titlesArr.push(x.title);
  });

  for (let i = 0; i < titlesArr.length; i++) {
    if (titlesArr[i].length > songTitleLength) {
      songTitleLength = titlesArr[i].length;
      longestSongTitle = titlesArr[i];
    }
  }
console.log(longestSongTitle);
}

printLongestSongTitle(exampleSongData);

// Problem #13
/**
 * Sorts songs by artist name, then by song title alphabetically.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object[]} Sorted array of songs.
 */
function sortSongsByArtistAndTitle(songs) { // (!!!) INCOMPLETE!!
  
}

// Problem #14
/**
 * Lists albums along with their total runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object mapping each album to its total runtime.
 */
function listAlbumTotalRuntimes(songs) {
  let obj = {};
  songs.forEach((x) => {
    if (obj[x.album])
      obj[x.album] += x.runtimeInSeconds;
    else
      obj[x.album] = x.runtimeInSeconds;
  });
  return obj;
}

console.log(listAlbumTotalRuntimes(exampleSongData));

// Problem #15
/**
 * Finds the first song with a title starting with a specific letter.
 * @param {Object[]} songs - An array of songs.
 * @param {string} letter - The letter to search for.
 * @returns {Object|null} The first song object that matches the criterion or null.
 */
function findFirstSongStartingWith(songs, letter) {  // COMPLETE!!!
  // forEach, sort(), some/every, map, reduce()
return songs.find(x => x.title[0] === letter) || null;
}

console.log(findFirstSongStartingWith(exampleSongData, 'U'));


// Problem #16
/**
 * Maps each artist to an array of their song titles.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object mapping each artist to an array of their song titles.
 */
function mapArtistsToSongs(songs) { // COMPLETE!!!
  let artistMap = {};
  songs.map(x => {
    if (!artistMap.hasOwnProperty(x.artist)) {
      artistMap[x.artist] = [x.title];
    } else {
      artistMap[x.artist].push(x.title);
    }
  });
  return artistMap;
}

console.log(mapArtistsToSongs(exampleSongData));

// Problem #17
/**
 * Finds the album with the longest average song runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the album with the longest average song runtime.
 */
function findAlbumWithLongestAverageRuntime(songs) { // (!!!) INCOMPLETE!!!
  
}

// Problem #18
/**
 * Logs song titles sorted by their runtime.
 * @param {Object[]} songs - An array of songs.
 */
function printSongsSortedByRuntime(songs) {
  let songsSortedByRuntime = songs.sort((songA, songB) => songA.runtimeInSeconds - songB.runtimeInSeconds);
  songsSortedByRuntime.forEach((songs) => console.log(songs.title));
}

printSongsSortedByRuntime(exampleSongData);

// Problem #19
/**
 * Prints a summary of each album, including its name, total runtime, and number of songs.
 * @param {Object[]} songs - An array of songs.
 */
function printAlbumSummaries(songs) {
  let albumSummaries = {};
  songs.forEach((song) => {
    if (!albumSummaries[song.album]) {
      albumSummaries[song.album] = {
        songCount: 1,
        totalRuntime: song.runtimeInSeconds,
      };
    } else {
      albumSummaries[song.album].songCount++;
      albumSummaries[song.album].totalRuntime += song.runtimeInSeconds;
    }
  });
  for (const summary in albumSummaries) {
    console.log(
      `${summary}: ${albumSummaries[summary].songCount} songs, Total Runtime: ${albumSummaries[summary].totalRuntime} seconds`
    );
  }
}

console.log(printAlbumSummaries(exampleSongData));

// Problem #20
/**
 * Finds the artist with the most songs in the list.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the artist with the most songs.
 */
function findArtistWithMostSongs(songs) {
  let artistWithMostSongs = '';
  let maxNumOfSongs = 0;
  let obj = {};

  songs.forEach((x) => {
    if (obj[x.artist]) {
      if (x.title)
        obj[x.artist] += 1;
    } else
      obj[x.artist] = 1;
  });

  for (let key in obj) {
    if (obj[key] > maxNumOfSongs) {
      maxNumOfSongs = obj[key];
      artistWithMostSongs = key;
    }
  }
  
  return artistWithMostSongs;
}

console.log(findArtistWithMostSongs(exampleSongData));


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
