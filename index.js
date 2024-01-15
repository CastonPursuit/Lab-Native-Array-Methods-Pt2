/*
Native Array Methods pt.2 continues with the same dataset: songs. All required functions and array methods (forEach, map, find, some/every, sort) are combined into a single file, each addressing a distinct problem.
*/


const exampleSongData = require("./data/songs");
// Do not change the line above.


// // // #1
// // /**
// //  * Returns the titles of songs sorted alphabetically.
// //  * @param {Object[]} songs - An array of songs.
// //  * @returns {string[]} Sorted song titles.
// //  */
function getSortedTitles(songs) {
  const result = [];
  songs.forEach(a => { result.push(a.title) });
  result.sort();
  return result;
}
console.log(getSortedTitles(exampleSongData));

// // // #2
// // /**
// //  * Returns the titles of all songs from a specified album.
// //  * @param {Object[]} songs - An array of songs.
// //  * @param {string} albumName - Name of the album.
// //  * @returns {string[]} An array of song titles.
// //  */
function getSongsFromAlbum(songs, albumName) {
  const result = [];
  songs.forEach(a => {
    if (a.album == albumName)
      result.push(a.title)
  });
  return result;
}
console.log(getSongsFromAlbum(exampleSongData, "Bluewerks Vol. 1: Up Down Left Right"));
// // // #3 
// // /**
// //  * Categorizes and counts songs based on their runtime.
// //  * @param {Object[]} songs - An array of songs.
// //  * @returns {Object} An object with counts of short, medium, and long songs.
// //  */
function categorizeSongsByRuntime(songs) {
  let retObj = {
    shortSongs: 0,
    mediumSongs: 0,
    longSongs: 0
  }
  for (let i = 0; i < songs.length; i++) {
    if (songs[i].runtimeInSeconds < 180)
      retObj.shortSongs += 1;
    else if (songs[i].runtimeInSeconds >= 180 && songs[i].runtimeInSeconds <= 300) {
      retObj.mediumSongs += 1;
    }
    else if (songs[i].runtimeInSeconds > 300)
      retObj.longSongs += 1;
  }
  return retObj;
}
console.log(categorizeSongsByRuntime(exampleSongData));
// // // #4
// // /**
// //  * Finds the album with the highest number of songs.
// //  * @param {Object[]} songs - An array of songs.
// //  * @returns {string} The name of the album with the most songs.
// //  */
function findAlbumWithMostSongs(songs) {
  let map = {};
  let high = 0;
  let alb = '';
  songs.forEach(a => {
    let item = a.album;
    if (map.hasOwnProperty(item)) {
      map[item] += 1;;
    }
    else
      map[item] = 1;
  })
  console.log(map);
  for (let ele in map) {
    if (map[ele] > high) {
      alb = ele;
      high = map[ele];
    }
  }

  return alb;

}
console.log("Problem 4:");
console.log(findAlbumWithMostSongs(exampleSongData));

// // // #5
// // /**
// //  * Returns details of the first song in a specific album.
// //  * @param {Object[]} songs - An array of songs.
// //  * @param {string} albumName - Name of the album.
// //  * @returns {Object|null} First song object in the album or null.
// //  */
function getFirstSongInAlbum(songs, albumName) {
  let retObj = {};
  for (let i = 0; i < songs.length; i++) {
    if (songs[i].album == albumName) {
      retObj = songs[i];
      break;
    }
  }
  return retObj;
}
console.log("Problem 5: " + getFirstSongInAlbum(exampleSongData, "Horizon Lines"));
// // // #6
// // /**
// //  * Checks if there is at least one song longer than a specified runtime.
// //  * @param {Object[]} songs - An array of songs.
// //  * @param {number} runtime - The runtime to check against in seconds.
// //  * @returns {boolean} True if there is at least one song longer than the runtime.
// //  */
function isThereLongSong(songs, runtime) {
  for (let i = 0; i < songs.length; i++) {
    if (songs[i].runtimeInSeconds > runtime)
      return true;
  }
  return false;
}
console.log("Problem 6: " + isThereLongSong(exampleSongData, 400));
console.log("Problem 6: " + isThereLongSong(exampleSongData, 210));

// // // #7
// // /**
// //  * Transforms song data to show title and runtime in minutes.
// //  * @param {Object[]} songs - An array of songs.
// //  * @returns {Object[]} Array of song objects with runtime in minutes.
// //  */
function getSongsWithDurationInMinutes(songs) {

  for (let i = 0; i < songs.length; i++) {
    songs[i].durationInMinutes = songs[i].runtimeInSeconds / 60;
  }
  return songs;

}
console.log("Problem 7");
console.log(getSongsWithDurationInMinutes(exampleSongData));
// // #8
// /**
//  * Returns the album names in reverse alphabetical order.
// //  * @param {Object[]} songs - An array of songs.
// //  * @returns {string[]} Array of album names in reverse alphabetical order.
// //  */
function getAlbumsInReverseOrder(songs) {

  let arr = songs.map(a => a.album);
  arr = arr.sort().reverse();
  let arr2 = arr.filter((a, i, s) => { return i == s.indexOf(a); })
  return arr2;
}
console.log("Problem 8");
console.log(getAlbumsInReverseOrder(exampleSongData));

// // #9
// /**
// //  * Returns a list of song titles that contain a specific word.
// //  * @param {Object[]} songs - An array of songs.
// //  * @param {string} word - The word to search for in song titles.
// //  * @returns {string[]} An array of song titles containing the word.
// //  */
function songsWithWord(songs, word) {
  let res = [];
  for (let i = 0; i < songs.length; i++) {
    if (songs[i].title.includes(word))
      res.push(songs[i].title);
  }
  return res;

}
console.log("Problem 9");
console.log(songsWithWord(exampleSongData, 'Pink'));

// // #10
// /**
//  * Returns the total runtime of songs by a specific artist.
// //  * @param {Object[]} songs - An array of songs.
// //  * @param {string} artistName - Name of the artist.
// //  * @returns {number} Total runtime in seconds.
// //  */
function getTotalRuntimeOfArtist(songs, artistName) {
  let total = 0;
  for (let i = 0; i < songs.length; i++) {
    if (songs[i].artist == artistName)
      total += songs[i].runtimeInSeconds;
  }
  return total
}
console.log("Problem 10");
console.log(getTotalRuntimeOfArtist(exampleSongData, 'Saib'));

// // Problem #11
// /**
//  * Prints artists who have more than one song in the list.
// //  * @param {Object[]} songs - An array of songs.
// //  */
function printArtistsWithMultipleSongs(songs) {
  let map = {};
  let res = [];
  for (let i = 0; i < songs.length; i++) {
    let item = songs[i].artist;
    map[item] = (map[item] + 1) || 1;
  }
  for (let ele in map) {
    if (map[ele] > 1)
      console.log(ele);
  }
  //return res;
}
console.log("Problem 11");
console.log(printArtistsWithMultipleSongs(exampleSongData,));

// // Problem #12
// /**
//  * Logs the longest song title.
// //  * @param {Object[]} songs - An array of songs.
// //  */
function printLongestSongTitle(songs) {
  let longestTitle = songs[0].title.length;
  let songTitle = songs[0].title;
  for (let i = 1; i < songs.length; i++) {
    if (songs[i].title.length > longestTitle) {
      songTitle = songs[i].title;
      longestTitle = songs[i].title.length;
    }
  }
  console.log(songTitle);
  return songTitle;
}
console.log("Problem 12");
console.log(printLongestSongTitle(exampleSongData,));

// // Problem #13
// /**
//  * Sorts songs by artist name, then by song title alphabetically.
// //  * @param {Object[]} songs - An array of songs.
// //  * @returns {Object[]} Sorted array of songs.
// //  */
function sortSongsByArtistAndTitle(songs) {
  // const sorted = songs.sort(function (a, b) {
  //   if (a.artist < b.artist)
  //     return -1;
  //   if (b.artist < a.artist)
  //     return 1;
  //   if (a.artist == b.artist) {
  //     if (a.title < b.title)
  //       return -1;
  //     if (b.title < a.title)
  //       return 1;
  //     return 0;
  //   }
  // });
  const sorted = songs.slice().sort((a, b) => {
    return a.artist.localeCompare(b.artist) || a.title.localeCompare(b.title);
  });
  return sorted;
}
console.log("Problem 13");
console.log(sortSongsByArtistAndTitle(exampleSongData));
// Problem #14
/**
 * Lists albums along with their total runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object mapping each album to its total runtime.
 */
function listAlbumTotalRuntimes(songs) {
  let map = {};
  songs.forEach(a => {
    let item = a.album;
    map[item] = (map[item] + a.runtimeInSeconds) || a.runtimeInSeconds;
  })
  return map;

}
console.log("Problem 14");
console.log(listAlbumTotalRuntimes(exampleSongData));
// Problem #15
/**
 * Finds the first song with a title starting with a specific letter.
 * @param {Object[]} songs - An array of songs.
 * @param {string} letter - The letter to search for.
 * @returns {Object|null} The first song object that matches the criterion or null.
 */
function findFirstSongStartingWith(songs, letter) {
  //let retObj={};
  let first = songs.find(a => {

    return a.title.charAt(0) == letter
  })
  return first;

}
console.log("Problem 15");
console.log(findFirstSongStartingWith(exampleSongData, 'D'));
// Problem #16
/**
 * Maps each artist to an array of their song titles.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object mapping each artist to an array of their song titles.
 */
function mapArtistsToSongs(songs) {
  let map = {};
  songs.forEach(a => {
    let item = a.artist;
    if (map.hasOwnProperty(item)) {
      map[item].push(a.title);
    }
    else
      map[item] = [a.title];
  })
  return map;

}
console.log("Problem 16");
console.log(mapArtistsToSongs(exampleSongData));

// Problem #17
/**
 * Finds the album with the longest average song runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the album with the longest average song runtime.
 */
function findAlbumWithLongestAverageRuntime(songs) {
  let map = {};
  let longest = 0;
  let long;
  songs.forEach(a => {
    let item = a.album;
    if (map.hasOwnProperty(item)) {
      map[item] = (map[item] + a.runtimeInSeconds) / 2;
    }
    else {
      map[item] = a.runtimeInSeconds;

    }
  })
  for (let ele in map) {
    if (map[ele] > longest) {
      long = ele;
      longest = map[ele];
    }
  }
  return long;
}
console.log("Problem 17");
console.log(findAlbumWithLongestAverageRuntime(exampleSongData));

// Problem #18
/**
 * Logs song titles sorted by their runtime.
 * @param {Object[]} songs - An array of songs.
 */
function printSongsSortedByRuntime(songs) {
  songs.sort(function (a, b) { return a.runtimeInSeconds - b.runtimeInSeconds });
  console.log(songs);
  songs = songs.map(a => { return a.title });
  console.log(songs[0]);
  return songs[0];

}
console.log("Problem 18");
console.log(printSongsSortedByRuntime(exampleSongData));

// Problem #19
/**
 * Prints a summary of each album, including its name, total runtime, and number of songs.
 * @param {Object[]} songs - An array of songs.
 */
function printAlbumSummaries(songs) {
  const albSum = {};
  songs.forEach(song => {
    if (albSum[song.album]) {
      albSum[song.album].totalRuntime += song.runtimeInSeconds;
      albSum[song.album].songCount++;

    } else {
      albSum[song.album] = { totalRuntime: song.runtimeInSeconds, songCount: 1 };
    }
  })
  // for(let ele in albSum){
  //     let summary = `${ele}: ${albSum[ele].songCount} songs, Total Runtime: ${albSum[ele].totalRuntime} seconds`;
  //     console.log(summary);
  // }
  Object.keys(albSum).forEach(album => {
    const summary = `${album}: ${albSum[album].songCount} songs, Total Runtime: ${albSum[album].totalRuntime} seconds`;
    console.log(summary);
  });

}
console.log("Problem 19");
console.log(printAlbumSummaries(exampleSongData));
// Problem #20
/**
 * Finds the artist with the most songs in the list.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the artist with the most songs.
 */
function findArtistWithMostSongs(songs) {
  let map = {};
  let high = 0;
  let art = '';
  songs.forEach(a => {
    let item = a.artist;
    if (map.hasOwnProperty(item)) {
      map[item] += 1;;
    }
    else
      map[item] = 1;
  })
  console.log(map);
  for (let ele in map) {
    if (map[ele] > high) {
      art = ele;
      high = map[ele];
    }
  }

  return art;

}
console.log("Problem 20");
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
};