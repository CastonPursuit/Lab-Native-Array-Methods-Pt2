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
//console.log(getSortedTitles(exampleSongData));

// #2
/**
 * Returns the titles of all songs from a specified album.
 * @param {Object[]} songs - An array of songs.
 * @param {string} albumName - Name of the album.
 * @returns {string[]} An array of song titles.
 */
function getSongsFromAlbum(songs, albumName) {
  return songs.reduce((list,song) => {
    if(song.album == albumName){
      list.push(song.title)
    }
    return list
  },[]);
}
//console.log(getSongsFromAlbum(exampleSongData, 'Bluewerks Vol. 1: Up Down Left Right'));

// #3 
/**
 * Categorizes and counts songs based on their runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object with counts of short, medium, and long songs.
 */
function categorizeSongsByRuntime(songs) {
  return {shortSongs: songs.filter(song => song.runtimeInSeconds < 180).length,
    mediumSongs: songs.filter(song => 180 <= song.runtimeInSeconds && song.runtimeInSeconds <= 300).length, 
    longSongs: songs.filter(song => 300 < song.runtimeInSeconds).length};
}
//console.log(categorizeSongsByRuntime(exampleSongData));

// #4
/**
 * Finds the album with the highest number of songs.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the album with the most songs.
 */
function findAlbumWithMostSongs(songs) {
  const listOfAlbums = new Set(songs.map(song => song.album));
  let mostSongs = '';
  let currHighest = 0;
  Array.from(listOfAlbums).forEach(album =>{
    const songsInAlbum = songs.filter(song => song.album == album).length;
    if(songsInAlbum > currHighest){
      currHighest = songsInAlbum;
      mostSongs = album;
    }
  });
  return mostSongs;
}
//console.log(findAlbumWithMostSongs(exampleSongData));

// #5
/**
 * Returns details of the first song in a specific album.
 * @param {Object[]} songs - An array of songs.
 * @param {string} albumName - Name of the album.
 * @returns {Object|null} First song object in the album or null.
 */
function getFirstSongInAlbum(songs, albumName) {
  return songs.find(song => song.album == albumName) || null;
}
//console.log(getFirstSongInAlbum(exampleSongData, "Bluewerks Vol. 1: Up Down Left Right"));

// #6
/**
 * Checks if there is at least one song longer than a specified runtime.
 * @param {Object[]} songs - An array of songs.
 * @param {number} runtime - The runtime to check against in seconds.
 * @returns {boolean} True if there is at least one song longer than the runtime.
 */
function isThereLongSong(songs, runtime) {
  const songsOverTime = songs.filter(song => song.runtimeInSeconds >= runtime).length;
  return 0 < songsOverTime ? true : false;
}
//console.log(isThereLongSong(exampleSongData,180));

// #7
/**
 * Transforms song data to show title and runtime in minutes.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object[]} Array of song objects with runtime in minutes.
 */
function getSongsWithDurationInMinutes(songs) {
  return songs.map(song => {
    song.durationInMinutes = song.runtimeInSeconds / 60;
    return song;
  })
}
//console.log(getSongsWithDurationInMinutes(exampleSongData));

// #8
/**
 * Returns the album names in reverse alphabetical order.
 * @param {Object[]} songs - An array of songs.
 * @returns {string[]} Array of album names in reverse alphabetical order.
 */
function getAlbumsInReverseOrder(songs) {
  return songs.reduce((uniqueAlbums, song) => {
    if(!uniqueAlbums.includes(song.album)){
      uniqueAlbums.push(song.album);
    }
    return uniqueAlbums;
  },[]).sort().reverse();
}
//console.log(getAlbumsInReverseOrder(exampleSongData));

// #9
/**
 * Returns a list of song titles that contain a specific word.
 * @param {Object[]} songs - An array of songs.
 * @param {string} word - The word to search for in song titles.
 * @returns {string[]} An array of song titles containing the word.
 */
function songsWithWord(songs, word) {
  return songs.reduce((allTitles, song) => {
    const titleSplit = song.title.split(' ');
    if(titleSplit.includes(word)){
      allTitles.push(song.title);
    }
    return allTitles;
  },[]);
}
//console.log(songsWithWord(exampleSongData, 'of'))

// #10
/**
 * Returns the total runtime of songs by a specific artist.
 * @param {Object[]} songs - An array of songs.
 * @param {string} artistName - Name of the artist.
 * @returns {number} Total runtime in seconds.
 */
function getTotalRuntimeOfArtist(songs, artistName) {
  return songs.reduce((totalTime, song) => {
    if(song.artist == artistName){
      totalTime += song.runtimeInSeconds;
    }
    return totalTime;
  },0);
}
//console.log(getTotalRuntimeOfArtist(exampleSongData, "Echo Vistas"));

// Problem #11
/**
 * Prints artists who have more than one song in the list.
 * @param {Object[]} songs - An array of songs.
 */
function printArtistsWithMultipleSongs(songs) {
  const artists = new Set(songs.map(song => song.artist));
  Array.from(artists).forEach(artist => {
    const allSongs = songs.filter(song => song.artist == artist).length;
    if(allSongs > 1){
      console.log(artist);
    }
  });
}

// Problem #12
/**
 * Logs the longest song title.
 * @param {Object[]} songs - An array of songs.
 */
function printLongestSongTitle(songs) {
  const titles = new Set(songs.map(song => song.title));
  let longestTitle = '';
  let currHighest = 0;
  Array.from(titles).forEach(title => {
    if(title.length > currHighest){
      longestTitle = title;
      currHighest = title.length;
    }
  });
  console.log(longestTitle);
}

// Problem #13
/**
 * Sorts songs by artist name, then by song title alphabetically.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object[]} Sorted array of songs.
 */
function sortSongsByArtistAndTitle(songs) {
  return songs.sort((a, b) => a.artist.localeCompare(b.artist) || a.title.localeCompare(b.title));
}
// console.log(sortSongsByArtistAndTitle(exampleSongData));

// Problem #14
/**
 * Lists albums along with their total runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object mapping each album to its total runtime.
 */
function listAlbumTotalRuntimes(songs) {
  return songs.reduce((albumsTotalTime, song) => {
    const currAlbum = song.album;
    albumsTotalTime[currAlbum] = (albumsTotalTime[currAlbum] || 0) + song.runtimeInSeconds;
    return albumsTotalTime;
  },{});
}
//console.log(listAlbumTotalRuntimes(exampleSongData));

// Problem #15
/**
 * Finds the first song with a title starting with a specific letter.
 * @param {Object[]} songs - An array of songs.
 * @param {string} letter - The letter to search for.
 * @returns {Object|null} The first song object that matches the criterion or null.
 */
function findFirstSongStartingWith(songs, letter) {
  return songs.find(song => song.title[0] == letter);
}
//console.log(findFirstSongStartingWith(exampleSongData, 'D'));

// Problem #16
/**
 * Maps each artist to an array of their song titles.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object mapping each artist to an array of their song titles.
 */
function mapArtistsToSongs(songs) {
  return songs.reduce((artistsSongs, song) => {
    artistsSongs[song.artist] = (artistsSongs[song.artist] || []).concat(song.title);
    return artistsSongs;
  },{});
}
// console.log(mapArtistsToSongs(exampleSongData));

// Problem #17
/**
 * Finds the album with the longest average song runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the album with the longest average song runtime.
 */
function findAlbumWithLongestAverageRuntime(songs) {
  const albums = new Set(songs.map(song => song.album));
  let highestAvg = '';
  let currHighest = 0;
  Array.from(albums).forEach(album => {
    const totalRuntime = songs.reduce((total, song) => {
      if(song.album == album){
        total += song.runtimeInSeconds;
      }
      return total;
    },0);
    const totalTitles = songs.filter(song => song.album == album).length;
    const avg = totalRuntime / totalTitles;
    if(avg > currHighest){
      currHighest = avg;
      highestAvg = album;
    }
  });
  return highestAvg;
}
// console.log(findAlbumWithLongestAverageRuntime(exampleSongData));

// Problem #18
/**
 * Logs song titles sorted by their runtime.
 * @param {Object[]} songs - An array of songs.
 */
function printSongsSortedByRuntime(songs) {
  songs.sort((a, b) => a.runtimeInSeconds - b.runtimeInSeconds).forEach(song => {console.log(song.title)});
}

// Problem #19
/**
 * Prints a summary of each album, including its name, total runtime, and number of songs.
 * @param {Object[]} songs - An array of songs.
 */
function printAlbumSummaries(songs) {
  const albums = new Set(songs.map(song => song.album));
  Array.from(albums).forEach(album => {
    const totalRuntime = songs.reduce((total, song) => {
      if(song.album == album){
        total += song.runtimeInSeconds;
      }
      return total;
    },0);
    const totalTitles = songs.filter(song => song.album == album).length;
    console.log(`${album}: ${totalTitles} songs, Total Runtime: ${totalRuntime} seconds`)
  });
}

// Problem #20
/**
 * Finds the artist with the most songs in the list.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the artist with the most songs.
 */
function findArtistWithMostSongs(songs) {
  const artists = new Set(songs.map(song => song.artist));
  let artistWithMostSongs = '';
  let currHighest = 0;
  Array.from(artists).forEach(artist => {
    const allSongs = songs.filter(song => song.artist == artist).length;
    if(allSongs > currHighest){
      currHighest = allSongs;
      artistWithMostSongs = artist;
    }
  });
  return artistWithMostSongs;
}
// console.log(findArtistWithMostSongs(exampleSongData));


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