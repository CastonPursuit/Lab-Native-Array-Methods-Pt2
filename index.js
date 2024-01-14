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
  return songs.map(x => x.title).sort()
}

console.log(getSortedTitles(exampleSongData))

// #2
/**
 * Returns the titles of all songs from a specified album.
 * @param {Object[]} songs - An array of songs.
 * @param {string} albumName - Name of the album.
 * @returns {string[]} An array of song titles.
 */
function getSongsFromAlbum(songs, albumName) {
  return songs.filter(x => x.album === albumName).map(x => x.title)
}

// #3
/**
 * Categorizes and counts songs based on their runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object with counts of short, medium, and long songs.
 */

// Expected: {"longSongs": 0, "mediumSongs": 12, "shortSongs": 11}

function categorizeSongsByRuntime(songs) {
  const longSongs = songs.filter(x => x.runtimeInSeconds > 220).length;
  const mediumSongs = songs.filter(x => x.runtimeInSeconds >= 180).length;
  const shortSongs = songs.filter(x => x.runtimeInSeconds < 180).length;

  return {
    longSongs: longSongs,
    mediumSongs: mediumSongs,
    shortSongs : shortSongs
  }
}

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
    if (songCountObj[currValue.album] > highestSongCount) {
      highestSongCount = songCountObj[currValue.album];
      albumWithMostSongs = currValue.album;
    }
    return songCountObj;
  }, {});

  return albumWithMostSongs;
}

// Example usage
// const albumWithMostSongs = findAlbumWithMostSongs(songs);
// console.log(`Album with the most songs: ${albumWithMostSongs}`);


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
  return songs.some(x => x.runtimeInSeconds > runtime);
}

// #7
/**
 * Transforms song data to show title and runtime in minutes.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object[]} Array of song objects with runtime in minutes.
 */
function getSongsWithDurationInMinutes(songs) {
  return songs.map(x => {
    return {
      title: x.title,
      durationInMinutes: (x.runtimeInSeconds / 60)
    }
  })
}

// console.log(getSongsWithDurationInMinutes(exampleSongData))

// #8
/**
 * Returns the album names in reverse alphabetical order.
 * @param {Object[]} songs - An array of songs.
 * @returns {string[]} Array of album names in reverse alphabetical order.
 */
function getAlbumsInReverseOrder(songs) {
  return songs.map(x => x.album).filter((val, index) => songs.indexOf(val) === index).sort((a, b) => b.localeCompare(a));
}
// #9
/**
 * Returns a list of song titles that contain a specific word.
 * @param {Object[]} songs - An array of songs.
 * @param {string} word - The word to search for in song titles.
 * @returns {string[]} An array of song titles containing the word.
 */
function songsWithWord(songs, word) {
  return songs.map(x => x.title).filter(x => x.includes(word));
}

// #10
/**
 * Returns the total runtime of songs by a specific artist.
 * @param {Object[]} songs - An array of songs.
 * @param {string} artistName - Name of the artist.
 * @returns {number} Total runtime in seconds.
 */
function getTotalRuntimeOfArtist(songs, artistName) {
  return songs.filter(x => x.artist === artistName).reduce((total, x) => total + x.runtimeInSeconds, 0)
}

// Problem #11
/**
 * Prints artists who have more than one song in the list.
 * @param {Object[]} songs - An array of songs.
 */
function printArtistsWithMultipleSongs(songs) {
  // let artistWithTheMostSongs = {};
  // return songs.forEach(song => {
  //   if (artistWithTheMostSongs[song.artist]) {
  //     artistWithTheMostSongs[song.artist]
  //   } else {
  //     artistWithTheMostSongs[song.artist] += artistWithTheMostSongs[song.artist]
  //   }
  // })
  // console.log(artistWithTheMostSongs);
}

// Problem #12
/**
 * Logs the longest song title.
 * @param {Object[]} songs - An array of songs.
 */
function printLongestSongTitle(songs) {
  let longestSongTitle = songs.sort((a, b) => b.title.length - a.title.length)[0].title;
  return longestSongTitle;
}

console.log(printLongestSongTitle(exampleSongData))

// Problem #13
/**
 * Sorts songs by artist name, then by song title alphabetically.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object[]} Sorted array of songs.
 */
function sortSongsByArtistAndTitle(songs) {
  return songs.sort((a, b) => a.artist.localeCompare(b.artist) || a.title.localeCompare(b.title));
}

// Problem #14
/**
 * Lists albums along with their total runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object mapping each album to its total runtime.
 */
function listAlbumTotalRuntimes(songs) {

}


// Problem #15
/**
 * Finds the first song with a title starting with a specific letter.
 * @param {Object[]} songs - An array of songs.
 * @param {string} letter - The letter to search for.
 * @returns {Object|null} The first song object that matches the criterion or null.
 */
function findFirstSongStartingWith(songs, letter) {
  return songs.find(x => x.title[0].startsWith(letter)) || null;
}

// Problem #16
/**
 * Maps each artist to an array of their song titles.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object mapping each artist to an array of their song titles.
 */
function mapArtistsToSongs(songs) {
  let artistMap = {};

  songs.map(song => {
    if(!artistMap.hasOwnProperty(song.artist)){
      artistMap[song.artist] = [song.title];
    }
    else {
      artistMap[song.artist].push(song.title);
    }
  })
  return artistMap;
}

// Problem #17
/**
 * Finds the album with the longest average song runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the album with the longest average song runtime.
 */
function findAlbumWithLongestAverageRuntime(songs) {
  //need to find avg runtime of each album!
  return songs.map(x => x.album).sort((a, b) => b.runtimeInSeconds - a.runtimeInSeconds)[0];
}

// Problem #18
/**
 * Logs song titles sorted by their runtime.
 * @param {Object[]} songs - An array of songs.
 */
// function printSongsSortedByRuntime(songs) {
//   console.log(songs.map(x => x.title).sort((a, b) => a.runtimeInSeconds - b.runtimeInSeconds)[0]);
// }
function printSongsSortedByRuntime(songs) {
  let songsSortedByRuntime = songs.sort((songA, songB) => songA.runtimeInSeconds - songB.runtimeInSeconds);
  songsSortedByRuntime.forEach(song => console.log(song.title))
}

// Problem #19
/*
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

// Problem #20
/**
 * Finds the artist with the most songs in the list.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the artist with the most songs.
 */
function findArtistWithMostSongs(songs) {

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
