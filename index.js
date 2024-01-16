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
function getSortedTitles(songs) { // songs, an array of objects
  let sortedTitles = songs.map(song => song.title).sort();  // map extracts title of songs from array => creates new array with titles
  return sortedTitles;  // returns array of sorted titles
}

// #2
/**
 * Returns the titles of all songs from a specified album.
 * @param {Object[]} songs - An array of songs.
 * @param {string} albumName - Name of the album.
 * @returns {string[]} An array of song titles.
 */
function getSongsFromAlbum(songs, albumName) {
  const filteredSongs = songs.filter(song => song.album === albumName);
  // filter function to create a new array with only the songs from the selected album
  const songTitles = filteredSongs.map(song => song.title);
  // map function to create a new array with only the titles of songs from the selected album
  return songTitles;
}

// #3 
/**
 * Categorizes and counts songs based on their runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object with counts of short, medium, and long songs.
 */
function categorizeSongsByRuntime(songs) {
  const runtimeCategorization = {
    shortSongs: 0,
    mediumSongs: 0,
    longSongs: 0
  };
  
  songs.forEach(song => {
    if (song.runtimeInSeconds < 180) {
      runtimeCategorization.shortSongs++;
      } else if (song.runtimeInSeconds>= 180 && song.runtimeInSeconds <= 300){
      runtimeCategorization.mediumSongs++;
      } else if (song.runtimeInSeconds > 300) {
      runtimeCategorization.longSongs++;
      }
  }); 

return runtimeCategorization; 
}

// shortSongs: songs.filter(song => song.runtimeInSeconds < 180).length,
// mediumSongs: songs.filter(song => song.runtimeInSeconds >= 180 && song.runtimeInSeconds <= 300).length,
// longSongs: songs.filter(song => song.runtimeInSeconds > 300).length

// #4
/**
 * Finds the album with the highest number of songs.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the album with the most songs.
 */
function findAlbumWithMostSongs(songs) {
  const albumCounts = {};  // initialize object to store album count

  songs.forEach((song) => { //iterate over each song in the array songs
    albumCounts[song.album] = (albumCounts[song.album] || 0) + 1;  // updates album count in the albumCount object
  });  

  let maxCount = 0;  // intialize varibles to track max number of songs and matching album 
  let expectedAlbum = '';

  for (const album in albumCounts) {
    if (albumCounts[album] > maxCount) {  // checks if the current album has more songs than the max count
      maxCount = albumCounts[album]; // update the max count and the matching album
      expectedAlbum = album;
    }
  }
  return expectedAlbum;
}
// iterates over song array and updates the count in the albumCounts object

// #5
/**
 * Returns details of the first song in a specific album.
 * @param {Object[]} songs - An array of songs.
 * @param {string} albumName - Name of the album.
 * @returns {Object|null} First song object in the album or null.
 */
function getFirstSongInAlbum(songs, albumName) {
  let firstSongTitle = null;
  songs.forEach((song) => { //iterate over each song in the array songs
    if (song.album === albumName) {
      firstSongTitle = song;
      return;
    }  
  }); 
  return firstSongTitle; 
}

// #6
/**
 * Checks if there is at least one song longer than a specified runtime.
 * @param {Object[]} songs - An array of songs.
 * @param {number} runtime - The runtime to check against in seconds.
 * @returns {boolean} True if there is at least one song longer than the runtime.
 */
function isThereLongSong(songs, runtime) {
  let hasLongSong = false;
  songs.forEach(song => {  
    if (song.runtimeInSeconds > runtime) { // checks if runtime of song is longer than specified in parameter runtime
      hasLongSong = true;  
      return ;
    }
  });
  return hasLongSong;
}

// #7
/**
 * Transforms song data to show title and runtime in minutes.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object[]} Array of song objects with runtime in minutes.
 */
function getSongsWithDurationInMinutes(songs) {
    let songsInMinutes = [];
    
    songs.forEach(song => {  
      const songWithDurationInMinutes = {
        title: song.title,
        durationInMinutes: song.runtimeInSeconds / 60
      };
  
      songsInMinutes.push(songWithDurationInMinutes);
    });
  
    return songsInMinutes;
  }

// #8
/**
 * Returns the album names in reverse alphabetical order.
 * @param {Object[]} songs - An array of songs.
 * @returns {string[]} Array of album names in reverse alphabetical order.
 */
function getAlbumsInReverseOrder(songs) {
  
  const uniqueAlbums = [];

  songs.forEach(song => {
      if (!uniqueAlbums.includes(song.album)) {
          uniqueAlbums.push(song.album); }
  });

  const reverseAlphabeticalOrder = uniqueAlbums.sort((a, b) => {
      for (let i = 0; i < Math.min(a.length, b.length); i++) {
          if (a[i] !== b[i]) {
              return b[i].localeCompare(a[i]);}  // locale.Compare, localeCompare() method compares two strings in the current locale. The localeCompare() method returns sort order -1, 1, or 0 (for before, after, or equal). 
      }
      return b.length - a.length; 
  });

      return reverseAlphabeticalOrder;
}

// #9
/**
 * Returns a list of song titles that contain a specific word.
 * @param {Object[]} songs - An array of songs.
 * @param {string} word - The word to search for in song titles.
 * @returns {string[]} An array of song titles containing the word.
 */
function songsWithWord(songs, word) {
  let wordSelectedSongArr = [];
  
  songs.forEach((song) => { //iterate over each song in the array songs
    if (song.title.includes(word)) {
      wordSelectedSongArr.push(song.title);
      return;
    }  
  }); 
  return wordSelectedSongArr; 
}

// #10
/**
 * Returns the total runtime of songs by a specific artist.
 * @param {Object[]} songs - An array of songs.
 * @param {string} artistName - Name of the artist.
 * @returns {number} Total runtime in seconds.
 */
function getTotalRuntimeOfArtist(songs, artistName) {
    
  const artistSongs = songs.filter(song => song.artist === artistName);

  let totalRuntime = 0;
      artistSongs.forEach(song => {
          totalRuntime += song.runtimeInSeconds;
  });

  return totalRuntime;
}

// Problem #11
/**
 * Prints artists who have more than one song in the list.
 * @param {Object[]} songs - An array of songs.
 */

function printArtistsWithMultipleSongs(songs) {
  let artistSongCount = {};
  songs.forEach(song => {
    if (artistSongCount[song.artist]) {
      artistSongCount[song.artist]++;
    } else {
      artistSongCount[song.artist] = 1;
    }
    if (artistSongCount[song.artist] > 1) {
      console.log(song.artist);
    }
  });
}


// Problem #12
/**
 * Logs the longest song title.
 * @param {Object[]} songs - An array of songs.
 */
function printLongestSongTitle(songs) {
  if (songs.length === 0) {
      console.log("No songs available.");
        return;
  }

  let longestTitle = songs[0].title;
  for (let i = 1; i < songs.length; i++) {
      const currentTitle = songs[i].title;
        if (currentTitle.length > longestTitle.length) {
          longestTitle = currentTitle;
      }
  }

    console.log(longestTitle);
}


// Problem #13
/**
 * Sorts songs by artist name, then by song title alphabetically.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object[]} Sorted array of songs.
 */
function sortSongsByArtistAndTitle(songs) {
    
  const sortedSongs = songs.slice().sort((a, b) => {
  
  const artistComparison = a.artist.localeCompare(b.artist);
      return artistComparison !== 0 ? artistComparison : a.title.localeCompare(b.title);
  });

      return sortedSongs;
}


// Problem #14
/**
 * Lists albums along with their total runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object mapping each album to its total runtime.
 */
function listAlbumTotalRuntimes(songs) {
  const albumTotalRuntimes = {};

  songs.forEach(song => {
      if (!albumTotalRuntimes[song.album]) {
          albumTotalRuntimes[song.album] = 0;}

      albumTotalRuntimes[song.album] += song.runtimeInSeconds;
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
  return firstSongsWithLetter = songs.find(song => (song.title[0] === letter)) 
}
// call function 
findFirstSongStartingWith(exampleSongData,"U");

// Problem #16
/**
 * Maps each artist to an array of their song titles.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object mapping each artist to an array of their song titles.  Create in function.
 */

//Initializes object artist map > loops over each ‘song’ in ‘songs’ array > if song exists in artist map > creates array for  artist’s key> else adds title of current song to array of artist> returns artist we mapped to
//.hasOwnProperty checks if the key exist in the object

function mapArtistsToSongs(songs) {
  let artistMap = {}; // freqency counter

  songs.map(song => {
    if(!artistMap.hasOwnProperty(song.artist)){
      artistMap[song.artist] = [song.title]
    } else {
      artistMap[song.artist].push(song.title); //add artist to array if it doesn't exist
    } 

  } )

  return artistMap;
}

// Call function, turns on 
mapArtistsToSongs(exampleSongData)
//   Output Sample: {Saib: "Pineapple Jam", "Samui Sunrise"}

// Problem #17
/**
 * Finds the album with the longest average song runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the album with the longest average song runtime.
 */
function findAlbumWithLongestAverageRuntime(songs) {
  const albumTotalRuntimes = {};

  songs.forEach(song => {
      if (!albumTotalRuntimes[song.album]) {
          albumTotalRuntimes[song.album] = { totalRuntime: 0, songCount: 0 };
      }

        albumTotalRuntimes[song.album].totalRuntime += song.runtimeInSeconds;
        albumTotalRuntimes[song.album].songCount += 1;
  });

  let longestAverageRuntime = 0;
  let albumWithLongestAverageRuntime = '';

  for (const album in albumTotalRuntimes) {
      const averageRuntime = albumTotalRuntimes[album].totalRuntime / albumTotalRuntimes[album].songCount;

      if (averageRuntime > longestAverageRuntime) {
          longestAverageRuntime = averageRuntime;
          albumWithLongestAverageRuntime = album;
      }
  }

  return albumWithLongestAverageRuntime;
}


// Problem #18
/**
 * Logs song titles sorted by their runtime.
 * @param {Object[]} songs - An array of songs.
 */

function printSongsSortedByRuntime(songs) {
  let songsSortedByRuntime = songs.sort(
    (songA, songB) => songA.runtimeInSeconds - songB.runtimeInSeconds
  );
  songsSortedByRuntime.forEach((song) => console.log(song.title));
}


// Problem #19
/**
 * Prints a summary of each album, including its name, total runtime, and number of songs.
 * @param {Object[]} songs - An array of songs.
 */
function printAlbumSummaries(songs) {
  let albumSummaryObj = {};  // create object
    
    songs.forEach(song => {
      if(!albumSummaryObj[song.album]) {
        albumSummaryObj[song.album] = {albumName: song.album, songCount: 1, totalRuntime: song.runtimeInSeconds} //if album ! DOES NOT exist, it will create the object and include the key value pairs
      } else {
        albumSummaryObj[song.album].songCount++;
        albumSummaryObj[song.album].totalRuntime += song.runtimeInSeconds;
      }
    });
    for(const summary in albumSummaryObj) { // object of objects, loop through & log
      console.log (`${albumSummaryObj[summary].albumName}: ${albumSummaryObj[summary].songCount} songs, Total Runtime: ${albumSummaryObj[summary].totalRuntime} seconds`);
    }
}
console.log(printAlbumSummaries(exampleSongData));
//Expected: "Bi-To Te-Pu: 1 songs, Total Runtime: 193 seconds"


// Problem #20
/**
 * Finds the artist with the most songs in the list.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the artist with the most songs.
 */
function findArtistWithMostSongs(songs) {
  const artistSongCounts = {};

  songs.forEach(song => {
    if (!artistSongCounts[song.artist]) {
      artistSongCounts[song.artist] = 1;
      } else {
      artistSongCounts[song.artist] += 1;
      }
  });

  let mostSongsCount = 0;
  let artistWithMostSongs = "";

  for (const artist in artistSongCounts) {
    if (artistSongCounts[artist] > mostSongsCount) {
      mostSongsCount = artistSongCounts[artist];
      artistWithMostSongs = artist;
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

