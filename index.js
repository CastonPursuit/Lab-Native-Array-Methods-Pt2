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
  return songs.filter(song => song.album === albumName).map(song => song.title);
}

// #3 
/**
 * Categorizes and counts songs based on their runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object with counts of short, medium, and long songs.
 */
// this was my first answer - before i knew the conditional seconds were written in the test, i knew how to look for it on replit, forgot to look for it on vscode. hehe :D
// function categorizeSongsByRuntime(songs) {
  // let shortSecs = 180;
  // let mediumSecs = 240;

  // let shortCount = 0;
  // let mediumCount = 0;
  // let longCount = 0;

  // songs.forEach(song => {
  //   let runtime = song.runtimeInSeconds;

  //   if (runtime < shortSecs) {
  //     shortCount += 1;
  //   } else if (runtime < mediumSecs) {
  //     mediumCount += 1;
  //   } else {
  //     longCount += 1;
  //   }
  // });
  //   return {
  //     longSongs: longCount,
  //     mediumSongs: mediumCount,
  //     shortSongs: shortCount
  //   };
  // }

  // josh's class examples
  // function categorizeSongsByRuntime(songs) {
  //   const runtimeCategorization = {
  //     short: 0,
  //     medium: 0,
  //     long: 0,
  // };

  // songs.forEach((song) => {
  //   if(song.runtimeInSeconds < 180) {
  //     runtimeCategorization.short++;
  //   } else if (song.runtimeInSeconds >= 180 && song.runtimeInSeconds <= 300) {
  //     runtimeCategorization.medium++;
  //   } else if (song.runtimeInSeconds > 300) {
  //     runtimeCategorization.long++;
  //   }
  //   });
  //   return runtimeCategorization;
  // }
  // console.log("categorize by runtime", categorizeSongsByRuntime(exampleSongData));

  function categorizeSongsByRuntime(songs) {
    return songs.reduce((categorizedSongs, currSong) => {
      if (currSong.runtimeInSeconds < 180) {
        categorizedSongs.shortSongs++;
      } else if (
        currSong.runtimeInSeconds >= 180 &&
        currSong.runtimeInSeconds <= 300
      ) {
        categorizedSongs.mediumSongs++;
      } else if (
        currSong.runtimeInSeconds > 300) {
          categorizedSongs.longSongs++;
        }
        return categorizedSongs;
    }, {shortSongs: 0, mediumSongs: 0, longSongs: 0 });
  }
  console.log("categorize by runtime", categorizeSongsByRuntime(exampleSongData));

// #4
/**
 * Finds the album with the highest number of songs.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the album with the most songs.
 */
// function findAlbumWithMostSongs(songs) {
//   let albumCount = {};

//   for (const song of songs) {
//     let albumName = song.album;
//     if (!albumCount[albumName]) {
//       albumCount[albumName] = 1;
//     } else {
//       albumCount[albumName] += 1;
//     }
//   }
//   let maxAlbum = '';
//   let maxSongs = 0;
//   for (const album in albumCount) {
//     if (albumCount[album] > maxSongs) {
//       maxAlbum = album;
//       maxSongs = albumCount[album];
//     }
//   }
//   return maxAlbum;
// }
// not using native array method

function findAlbumWithMostSongs(songs) {
    const albumCount = songs.reduce((acc, song) => {
    const albumName = song.album;
    acc[albumName] = (acc[albumName] || 0) + 1;
    return acc;
  }, {});

    const maxAlbum = Object.keys(albumCount).find((album) => {
    return albumCount[album] === Math.max(...Object.values(albumCount));
  });

  return maxAlbum || '';
}


// #5
/**
 * Returns details of the first song in a specific album.
 * @param {Object[]} songs - An array of songs.
 * @param {string} albumName - Name of the album.
 * @returns {Object|null} First song object in the album or null.
 */
function getFirstSongInAlbum(songs, albumName) {
  let firstSong = songs.find(song => song.album === albumName)
  return firstSong || null;
}

// #6
/**
 * Checks if there is at least one song longer than a specified runtime.
 * @param {Object[]} songs - An array of songs.
 * @param {number} runtime - The runtime to check against in seconds.
 * @returns {boolean} True if there is at least one song longer than the runtime.
 */
function isThereLongSong(songs, runtime) {
  return songs.some(song => song.runtimeInSeconds > runtime);
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
  let albumSongs = [...new Set(songs.map(song => song.album))];
  let reverseAlbums = albumSongs.sort((a,b) => b.localeCompare(a));
  return reverseAlbums;
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
  return songs.reduce((totalRuntime, song) => {
    if (song.artist === artistName){
      return totalRuntime + song.runtimeInSeconds;
    }
    return totalRuntime;
  }, 0);
}

// Problem #11
/**
 * Prints artists who have more than one song in the list.
 * @param {Object[]} songs - An array of songs.
 */
// function printArtistsWithMultipleSongs(songs) {
//   let artistCount = {};

//   for (const song of songs) {
//     const artist = song.artist;
//     artistCount[artist] = (artistCount[artist] || 0) + 1;
//   }
//   for (const artist in artistCount) {
//     if (artistCount[artist] > 1) {
//       console.log(artist);
//     }
//   }
// }

function printArtistsWithMultipleSongs(songs) {
    const artistCount = songs.reduce((acc, song) => { 
    const artist = song.artist;
    acc[artist] = (acc[artist] || 0) + 1;
    return acc;
  }, {});

  Object.keys(artistCount) 
    .filter(artist => artistCount[artist] > 1) 
    .forEach(artist => console.log(artist)); 
}

// Problem #12
/**
 * Logs the longest song title.
 * @param {Object[]} songs - An array of songs.
 */
// function printLongestSongTitle(songs) {
//   let longestTitle = '';
//   for (const song of songs) {
//     const title = song.title;
//     if (title.length > longestTitle.length) {
//       longestTitle = title;
//     }
//   }
//   console.log(longestTitle);
// }

function printLongestSongTitle(songs) {
  let longestTitle = '';

  songs.forEach((song) => {
    const title = song.title;
    if (title.length > longestTitle.length) {
      longestTitle = title;
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
  return songs.sort((a,b) => 
  a.artist.localeCompare(b.artist) || a.title.localeCompare(b.title)
  );
}

// Problem #14
/**
 * Lists albums along with their total runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object mapping each album to its total runtime.
 */
function listAlbumTotalRuntimes(songs) {
  let albumTotalRuntimes = {};

  songs.forEach(song => {
    const { album, runtimeInSeconds } = song;
    if (!albumTotalRuntimes[album]) {
      albumTotalRuntimes[album] = 0;
    }
   albumTotalRuntimes[album] += runtimeInSeconds;
  });
  return albumTotalRuntimes;
}

// Problem #15
/**
 * Finds the first song with a title starting with a specific letter.
 * @param {Object[]} songs - An array of songs.
 * @param {string} letter - The letter to search for.
 * @returns {Object|null} The first song object that matches the criterion or null.
 */
// function findFirstSongStartingWith(songs, letter) {
//   for (const song of songs) {
//     if (song.title.startsWith(letter)) {
//       return song || null
//     }
//   }
// }

function findFirstSongStartingWith(songs, letter) {
  return songs.find(song => song.title.startsWith(letter)) || null;
}

// Problem #16
/**
 * Maps each artist to an array of their song titles.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object mapping each artist to an array of their song titles.
 */
// function mapArtistsToSongs(songs) {
//   const artistToSongs = {};

//   for(const song of songs) {
//     if(artistToSongs[song.artist]) {
//       artistToSongs[song.artist].push(song.title);
//     } else {
//       artistToSongs[song.artist] = [song.title];
//   }
// }
//   return artistToSongs;
// }

function mapArtistsToSongs(songs) {
  const artistToSongs = {};

  songs.map(song => {
    if (artistToSongs[song.artist]) {
      artistToSongs[song.artist].push(song.title);
    } else {
      artistToSongs[song.artist] = [song.title];
    }
    return null; 
  });

  return artistToSongs;
}

// Problem #17
/**
 * Finds the album with the longest average song runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the album with the longest average song runtime.
 */
// function findAlbumWithLongestAverageRuntime(songs) {
//   const albumRuntimes = {};
//   songs.forEach((song) => {
//     const album = song.album;
//     const runtime = song.runtimeInSeconds;
//     if(!albumRuntimes[album]) {
//       albumRuntimes[album] = {totalRuntime: 0, songCount: 0};
//     }
//     albumRuntimes[album].totalRuntime += runtime;
//     albumRuntimes[album].songCount += 1;
//   });
// }

function findAlbumWithLongestAverageRuntime(songs) {
  const albumRuntimes = {};

  songs.forEach((song) => {
    const album = song.album;
    const songRuntime = song.runtimeInSeconds; 
    if (!albumRuntimes[album]) {
      albumRuntimes[album] = { totalRuntime: 0, songCount: 0 };
    }
    albumRuntimes[album].totalRuntime += songRuntime;
    albumRuntimes[album].songCount += 1;
  });

  const result = Object.keys(albumRuntimes).find((album) => {
    const averageRuntime = albumRuntimes[album].totalRuntime / albumRuntimes[album].songCount;
    return averageRuntime === Math.max(...Object.values(albumRuntimes).map(a => a.totalRuntime / a.songCount));
  });

  return result || '';
}

// Problem #18
/**
 * Logs song titles sorted by their runtime.
 * @param {Object[]} songs - An array of songs.
 */
function printSongsSortedByRuntime(songs) {
  songs.sort((a,b) => a.runtimeInSeconds - b.runtimeInSeconds);
  songs.forEach((song) => {
    console.log(song.title);
  });
}

// Problem #19
/**
 * Prints a summary of each album, including its name, total runtime, and number of songs.
 * @param {Object[]} songs - An array of songs.
 */
function printAlbumSummaries(songs) {
  const albumSummaries = {};

  songs.forEach((song) => {
    const album = song.album;
    if(!albumSummaries[album]) {
      albumSummaries[album] = {totalRuntime: 0, songCount: 0};
    }
    albumSummaries[album].totalRuntime += song.runtimeInSeconds;
    albumSummaries[album].songCount += 1;
    });
    for (const album in albumSummaries) {
      const summary = `${album}: ${albumSummaries[album].songCount} songs, Total Runtime: ${albumSummaries[album].totalRuntime} seconds`;
      console.log(summary);
    }
  }

// Problem #20
/**
 * Finds the artist with the most songs in the list.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the artist with the most songs.
 */
function findArtistWithMostSongs(songs) {
  const artistSongCount = {};

  songs.forEach((song) => {
    const artist = song.artist;
    if (!artistSongCount[artist]) {
      artistSongCount[artist] = 0;
    }
      artistSongCount[artist] += 1;
  });
  let mostSongsArtist = '';
  let maxSongCount = 0;
  for (const artist in artistSongCount) {
    if (artistSongCount[artist] > maxSongCount) {
      maxSongCount = artistSongCount[artist];
      mostSongsArtist = artist;
    }
  }
  return mostSongsArtist;
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
