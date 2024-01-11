/**********************************************************************************/
/* Native Array Methods pt.2 continues with the same dataset: songs.              */
/* All required functions and array methods (forEach, map, find, some/every, sort) */
/* are combined into a single file, each addressing a distinct problem.            */
/**********************************************************************************/

const songs = require("./data/songs");
const exampleSongData = require("./data/songs");
// Do not change the line above.

// #1
/**
 * Returns the titles of songs sorted alphabetically.
 * @param {Object[]} songs - An array of songs.
 * @returns {string[]} Sorted song titles.
 */
function getSortedTitles(songs) {
  return songs.map((song) => song.title).sort();
}

// #2
/**
 * Returns the titles of all songs from a specified album.
 * @param {Object[]} songs - An array of songs.
 * @param {string} albumName - Name of the album.
 * @returns {string[]} An array of song titles.
 */
function getSongsFromAlbum(songs, albumName) {
  return songs
    .filter((song) => song.album == albumName)
    .map((song) => song.title);
}

// #3
/**
 * Categorizes and counts songs based on their runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object with counts of short, medium, and long songs.
 */
function categorizeSongsByRuntime(songs) {
  const short = songs.filter((song) => song.runtimeInSeconds < 180);
  const medium = songs.filter(
    (song) => song.runtimeInSeconds >= 180 && song.runtimeInSeconds < 300
  );
  const long = songs.filter((song) => song.runtimeInSeconds >= 300);
  return {
    shortSongs: short.length,
    mediumSongs: medium.length,
    longSongs: long.length,
  };
}

// #4
/**
 * Finds the album with the highest number of songs.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the album with the most songs.
 */
function findAlbumWithMostSongs(songs) {
  let albunsSongs = {};
  songs.forEach((song) => {
    if (albunsSongs.hasOwnProperty(song.album)) {
      albunsSongs[song.album]++;
    } else {
      albunsSongs[song.album] = 1;
    }
  });

  let albumWithMostSongs = "";
  for (const album in albunsSongs) {
    if (albumWithMostSongs == "") {
      albumWithMostSongs = album;
    } else if (albunsSongs[albumWithMostSongs] < albunsSongs[album]) {
      albumWithMostSongs = album;
    }
  }

  return albumWithMostSongs;
}

// #5
/**
 * Returns details of the first song in a specific album.
 * @param {Object[]} songs - An array of songs.
 * @param {string} albumName - Name of the album.
 * @returns {Object|null} First song object in the album or null.
 */
function getFirstSongInAlbum(songs, albumName) {
  return songs.filter((song) => song.album == albumName)[0];
}

// #6
/**
 * Checks if there is at least one song longer than a specified runtime.
 * @param {Object[]} songs - An array of songs.
 * @param {number} runtime - The runtime to check against in seconds.
 * @returns {boolean} True if there is at least one song longer than the runtime.
 */
function isThereLongSong(songs, runtime) {
  return songs.some((song) => song.runtimeInSeconds > runtime);
}

// #7
/**
 * Transforms song data to show title and runtime in minutes.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object[]} Array of song objects with runtime in minutes.
 */
function getSongsWithDurationInMinutes(songs) {
  return songs.map((song) => {
    song.durationInMinutes = song.runtimeInSeconds / 60;
    return song;
  });
}

// #8
/**
 * Returns the album names in reverse alphabetical order.
 * @param {Object[]} songs - An array of songs.
 * @returns {string[]} Array of album names in reverse alphabetical order.
 */
function getAlbumsInReverseOrder(songs) {
  const albuns = [];
  songs.forEach((song) => {
    if (!albuns.includes(song.album)) {
      albuns.push(song.album);
    }
  });
  return albuns.sort((a, b) => {
    if (a < b) {
      return 1;
    } else {
      return -1;
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
  return songs
    .map((song) => song.title)
    .filter((song) => {
      if (song.includes(word)) {
        return song;
      }
    });
}

// #10
/**
 * Returns the total runtime of songs by a specific artist.
 * @param {Object[]} songs - An array of songs.
 * @param {string} artistName - Name of the artist.
 * @returns {number} Total runtime in seconds.
 */
function getTotalRuntimeOfArtist(songs, artistName) {
  return songs
    .filter((song) => song.artist == artistName)
    .reduce((totalRuntime, song) => (totalRuntime += song.runtimeInSeconds), 0);
}

// Problem #11
/**
 * Prints artists who have more than one song in the list.
 * @param {Object[]} songs - An array of songs.
 */
function printArtistsWithMultipleSongs(songs) {
  const artistSongs = {};
  songs.forEach((song) => {
    if (artistSongs.hasOwnProperty(song.artist)) {
      artistSongs[song.artist].push(song.title);
    } else {
      artistSongs[song.artist] = [song.title];
    }
  });
  for (const artis in artistSongs) {
    if (artistSongs[artis].length > 1) {
      console.log(artis);
    }
  }
}

// Problem #12
/**
 * Logs the longest song title.
 * @param {Object[]} songs - An array of songs.
 */
function printLongestSongTitle(songs) {
  let longestSongTitle = "";
  songs.forEach((song) => {
    if (song.title.length > longestSongTitle.length) {
      longestSongTitle = song.title;
    }
  });
  console.log(longestSongTitle);
}

// Problem #13
/**
 * Sorts songs by artist name, then by song title alphabetically.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object[]} Sorted array of songs.
 */
function sortSongsByArtistAndTitle(songs) {
  return songs.sort((songA, songB) => {
    const artistCompare = songA.artist.localeCompare(songB.artist);
    const titleCompare = songA.title.localeCompare(songB.title);
    return artistCompare || titleCompare;
  });
}

// Problem #14
/**
 * Lists albums along with their total runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object mapping each album to its total runtime.
 */
function listAlbumTotalRuntimes(songs) {
  const albumTotalRuntimes = {};
  songs.forEach((song) => {
    if (albumTotalRuntimes.hasOwnProperty(song.album)) {
      albumTotalRuntimes[song.album] += song.runtimeInSeconds;
    } else {
      albumTotalRuntimes[song.album] = song.runtimeInSeconds;
    }
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
function findFirstSongStartingWith(songs, letter) {
  return songs.find((song) => song.title[0] == letter.toUpperCase());
}

// Problem #16
/**
 * Maps each artist to an array of their song titles.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object mapping each artist to an array of their song titles.
 */
function mapArtistsToSongs(songs) {
  const artistSongs = {};
  songs.forEach((song) => {
    if (artistSongs.hasOwnProperty(song.artist)) {
      artistSongs[song.artist].push(song.title);
    } else {
      artistSongs[song.artist] = [song.title];
    }
  });
  return artistSongs;
}

// Problem #17
/**
 * Finds the album with the longest average song runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the album with the longest average song runtime.
 */
function findAlbumWithLongestAverageRuntime(songs) {
  const outputAlbum = {
    name: "",
    avgRuntime: 0,
  };
  let albuns = songs.map((song) => song.album);
  albuns.filter((album, idx) => albuns.indexOf(album) === idx);
  albuns.forEach((albun) => {
    const albumSongs = songs.filter((song) => song.album == albun);
    const totalRuntime = albumSongs.reduce(
      (acc, song) => acc + song.runtimeInSeconds,
      0
    );
    const avgRuntime = totalRuntime / albumSongs.length;
    if (outputAlbum.avgRuntime <= avgRuntime) {
      outputAlbum.name = albun;
      outputAlbum.avgRuntime = avgRuntime;
    }
  });
  return outputAlbum.name;
}

// Problem #18
/**
 * Logs song titles sorted by their runtime.
 * @param {Object[]} songs - An array of songs.
 */
function printSongsSortedByRuntime(songs) {
  return songs
    .sort((songA, songB) => {
      if (songA.runtimeInSeconds <= songB.runtimeInSeconds) {
        return -1;
      } else {
        return 1;
      }
    })
    .forEach((song) => console.log(song.title));
}

// Problem #19
/**
 * Prints a summary of each album, including its name, total runtime, and number of songs.
 * @param {Object[]} songs - An array of songs.
 */
function printAlbumSummaries(songs) {
  let albuns = songs.map((song) => song.album);
  albuns = albuns.filter((album, idx) => albuns.indexOf(album) === idx);
  return albuns.forEach((album) => {
    const albumSongs = songs.filter((song) => song.album == album);
    const numSongs = albumSongs.length;
    const totalRuntime = albumSongs.reduce(
      (acc, song) => acc + song.runtimeInSeconds,
      0
    );
    console.log(
      `${album}: ${numSongs} songs, Total Runtime: ${totalRuntime} seconds`
    );
  });
}

// Problem #20
/**
 * Finds the artist with the most songs in the list.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the artist with the most songs.
 */
function findArtistWithMostSongs(songs) {
  const artistWithMostSongs = {
    name: "",
    numSongs: 0,
  };

  const artistSongs = {};
  songs.forEach((song) => {
    if (artistSongs.hasOwnProperty(song.artist)) {
      artistSongs[song.artist].push(song.title);
    } else {
      artistSongs[song.artist] = [song.title];
    }
  });

  for (const artist in artistSongs) {
    const numSongs = artistSongs[artist].length;
    if (artistWithMostSongs.numSongs < numSongs) {
      artistWithMostSongs.name = artist;
      artistWithMostSongs.numSongs = numSongs;
    }
  }
  return artistWithMostSongs.name;
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
  findArtistWithMostSongs,
};
