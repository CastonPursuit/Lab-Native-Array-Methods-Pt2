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
  return songs.map(songs => songs.title).sort()
}

// #2
/**
 * Returns the titles of all songs from a specified album.
 * @param {Object[]} songs - An array of songs.
 * @param {string} albumName - Name of the album.
 * @returns {string[]} An array of song titles.
 */
function getSongsFromAlbum(songs, albumName) {
  return songs.filter(song => song.album === albumName).map(song => song.title);
}

// #3 
/**
 * Categorizes and counts songs based on their runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object with counts of short, medium, and long songs.
 */
function categorizeSongsByRuntime(songs) {
  return {
    longSongs: songs.filter(song => song.runtimeInSeconds > 300).length,
    mediumSongs: songs.filter(song => song.runtimeInSeconds >= 180 && song.runtimeInSeconds < 300).length,
    shortSongs: songs.filter(song => song.runtimeInSeconds < 180).length,
  }
}

// #4
/**
 * Finds the album with the highest number of songs.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the album with the most songs.
 */
function findAlbumWithMostSongs(songs) {
  let albumSongs = {};
  songs.map(song => {
    if(!albumSongs.hasOwnProperty(song.album)){
    albumSongs[song.album]= 1;
  }
  else{
    albumSongs[song.album]++ 
  }
}
  )
  let songCount = 0;
  let longestAlbum = "";
for (let key in albumSongs){
if(albumSongs[key] > songCount){
  songCount = albumSongs[key];
  longestAlbum = key;
}
}
return longestAlbum ;
}
findAlbumWithMostSongs(exampleSongData)
// #5
/**
 * Returns details of the first song in a specific album.
 * @param {Object[]} songs - An array of songs.
 * @param {string} albumName - Name of the album.
 * @returns {Object|null} First song object in the album or null.
 */
function getFirstSongInAlbum(songs, albumName) {
  return songs.find(song => song.album === albumName);
}

// #6
/**
 * Checks if there is at least one song longer than a specified runtime.
 * @param {Object[]} songs - An array of songs.
 * @param {number} runtime - The runtime to check against in seconds.
 * @returns {boolean} True if there is at least one song longer than the runtime.
 */
function isThereLongSong(songs, runtime) {
 if(songs.find(song => song.runtimeInSeconds > runtime)){
   return true;
 }
 else{
  return false;
 }

}

// #7
/**
 * Transforms song data to show title and runtime in minutes.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object[]} Array of song objects with runtime in minutes.
 */
function getSongsWithDurationInMinutes(songs) {
 let runtimeArr = [];
 songs.forEach(song => runtimeArr.push({title : song.title , durationInMinutes : song.runtimeInSeconds / 60
}));
return runtimeArr;
}

// #8
/**
 * Returns the album names in reverse alphabetical order.
 * @param {Object[]} songs - An array of songs.
 * @returns {string[]} Array of album names in reverse alphabetical order.
 */
function getAlbumsInReverseOrder(songs) {
  let albumsOrdered = [];
  songs.forEach(song => {
    if(!albumsOrdered.includes(song.album)){
    albumsOrdered.push(song.album)
  }
})

  return albumsOrdered.sort((a, b) => a > b ? -1 : a < b ? 1 : 0);
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
  let totalRuntime = 0
  songs.filter(song => song.artist === artistName).forEach(song => totalRuntime += song.runtimeInSeconds);
  return totalRuntime;
}

// Problem #11
/**
 * Prints artists who have more than one song in the list.
 * @param {Object[]} songs - An array of songs.
 */
function printArtistsWithMultipleSongs(songs) {
  let artists = [];
  songs.forEach(song => artists.includes(song.artist) ? console.log(song.artist) : artists.push(song.artist))
}

// Problem #12
/**
 * Logs the longest song title.
 * @param {Object[]} songs - An array of songs.
 */
function printLongestSongTitle(songs) {
  let titlesArr = songs.sort((a, b) => a.title.length - b.title.length);
  console.log(titlesArr[titlesArr.length-1].title) ;
}
printLongestSongTitle(exampleSongData);
// Problem #13
/**
 * Sorts songs by artist name, then by song title alphabetically.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object[]} Sorted array of songs.
 */
function sortSongsByArtistAndTitle(songs) {
return songs.sort((a, b) => {
  if(a.artist.toUpperCase() == b.artist.toUpperCase()){
    if(a.title.toLowerCase() < b.title.toLowerCase()){
      return -1;
    }else if(a.title.toLowerCase() > a.title.toLowerCase()){
      return 1;
    }
  }else{
    if(a.artist.toUpperCase() < b.artist.toUpperCase()){
      return -1;
    } else if(a.artist.toUpperCase() > b.artist.toUpperCase()){
      return 1;
    }
    
  }
})
}

// Problem #14
/**
 * Lists albums along with their total runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object mapping each album to its total runtime.
 */
function listAlbumTotalRuntimes(songs) {
  const albumRuntimes = {};
  songs.forEach(song => !albumRuntimes[song.album] ? albumRuntimes[song.album] = song.runtimeInSeconds : albumRuntimes[song.album] += song.runtimeInSeconds);
  return albumRuntimes;
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
  const artistsSongs = {}
  songs.forEach(song => !artistsSongs[song.artist] ? artistsSongs[song.artist] = [song.title] : artistsSongs[song.artist].push(song.title));
  return artistsSongs;
}

// Problem #17
/**
 * Finds the album with the longest average song runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the album with the longest average song runtime.
 */
function findAlbumWithLongestAverageRuntime(songs) {
  let highestAverageRuntime = 0;
  let highestAverageAlbum = "";
  let countAndTime = {};
  songs.forEach(song => {
    if(!countAndTime[song.album]){
      countAndTime[song.album] = {
        runtime : song.runtimeInSeconds,
        songCount : 1
      }
    }
    else {
      countAndTime[song.album].runtime += song.runtimeInSeconds;
      countAndTime[song.album].songCount++;
    }
  })
  for(const album in countAndTime){
    if(countAndTime[album].runtime / countAndTime[album].songCount > highestAverageRuntime){
      highestAverageAlbum = album;
      highestAverageRuntime = countAndTime[album].runtime / countAndTime[album].songCount;
    }
  }
  return highestAverageAlbum;
}

// Problem #18
/**
 * Logs song titles sorted by their runtime.
 * @param {Object[]} songs - An array of songs.
 */
function printSongsSortedByRuntime(songs) {
songs.sort((a, b) => a.runtime - b.runtime);
return songs.forEach(song => console.log(song.title));
}

// Problem #19
/**
 * Prints a summary of each album, including its name, total runtime, and number of songs.
 * @param {Object[]} songs - An array of songs.
 */
function printAlbumSummaries(songs) {
  let albumSummaries = {};
  songs.forEach(song => {
    if(!albumSummaries[song.album]){
      albumSummaries[song.album] = {name : song.album,
                                    totalRuntime : song.runtimeInSeconds,
                                    songCount : 1}
    }
    else{
      albumSummaries[song.album].totalRuntime += song.runtimeInSeconds;
      albumSummaries[song.album].songCount++;
    }
  })
  for (let albumKey in albumSummaries){
    console.log(`${albumSummaries[albumKey].name}: ${albumSummaries[albumKey].songCount} songs, Total Runtime: ${albumSummaries[albumKey].totalRuntime} seconds`)
}
}
printAlbumSummaries(exampleSongData);
// Problem #20
/**
 * Finds the artist with the most songs in the list.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the artist with the most songs.
 */
function findArtistWithMostSongs(songs) {
  let artistSongCounts = {};
  songs.forEach(song => {
    if (!artistSongCounts[song.artist]){
      artistSongCounts[song.artist] = 1
    }
    else{
      artistSongCounts[song.artist] ++
    }
  })
  let artistWithMostSongs = "";
  let highestSongCount = 0;
  for(let artist in artistSongCounts){
    if(artistSongCounts[artist] > highestSongCount){
      artistWithMostSongs = artist;
      highestSongCount = artistSongCounts[artist];
    }
  }
  return artistWithMostSongs;
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
