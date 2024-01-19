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

// #2
/**
 * Returns the titles of all songs from a specified album.
 * @param {Object[]} songs - An array of songs.
 * @param {string} albumName - Name of the album.
 * @returns {string[]} An array of song titles.
 */
function getSongsFromAlbum(songs, albumName) {

  let titlesFromSpecificAlbum = [];

   songs.filter((findAlbum) => {

    if (findAlbum.album === albumName) {
      titlesFromSpecificAlbum.push(findAlbum.title);
      return true; 

    } else {
      return false; 
    }
  });

  return titlesFromSpecificAlbum;
}
// #3 
/**
 * Categorizes and counts songs based on their runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object with counts of short, medium, and long songs.
 */

function categorizeSongsByRuntime(songs) {

  let songLengthByRuntime = { "shortSongs": 0, "mediumSongs": 0, "longSongs": 0 };

  songs.forEach((songObj) => {
    if (songObj.runtimeInSeconds < 180) {
      songLengthByRuntime.shortSongs++;

    } else if (songObj.runtimeInSeconds >= 180 && songObj.runtimeInSeconds <= 300) {
      songLengthByRuntime.mediumSongs++;

    } else if (songObj.runtimeInSeconds > 300) {
      songLengthByRuntime.longSongs++;
    }
  });

  return songLengthByRuntime;
}



// #4
/**
 * Finds the album with the highest number of songs.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the album with the most songs.
 */
function findAlbumWithMostSongs(songs) {
  let topCount = 0;
  let albumWithMostSongs;

    songs.reduce((bucket, currObj) => {
    let currentAlbum = currObj.album;
    bucket[currentAlbum] = (bucket[currentAlbum] || 0) + 1;

    if (bucket[currentAlbum] > topCount) {
      topCount = bucket[currentAlbum];
      albumWithMostSongs = currentAlbum;
    }

    return bucket;
  }, {});

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
  let newAlbumListing = [];
// song filters through the albumName to provide an array of songs 
  let songsByAlbum = songs.filter((song) => song.album === albumName);

  newAlbumListing = songsByAlbum.sort((songA, songB) => songA.title.localeCompare(songB.title));

  return newAlbumListing[0] || null;
}



// #6
/**
 * Checks if there is at least one song longer than a specified runtime.
 * @param {Object[]} songs - An array of songs.
 * @param {number} runtime - The runtime to check against in seconds.
 * @returns {boolean} True if there is at least one song longer than the runtime.
 */
function isThereLongSong(songs, runtime) { 
// it iterates through a songs to find the if there is a song greater than the runtime specified in the parameter
   return songs.some(song => song.runtimeInSeconds > runtime ) 
}

// #7
/**
 * Transforms song data to show title and runtime in minutes.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object[]} Array of song objects with runtime in minutes.
 */
function getSongsWithDurationInMinutes(songs) {
  // changes entire data of songs with the new  output with seconds to minutes.
    songs.forEach((song) => song['durationInMinutes'] = song.runtimeInSeconds / 60 ) 
   return songs;

}

// #8
/**
 * Returns the album names in reverse alphabetical order.
 * @param {Object[]} songs - An array of songs.
 * @returns {string[]} Array of album names in reverse alphabetical order.
 */
function getAlbumsInReverseOrder(songs) {

  const allAlbumsNoRepeats = new Set(); //creates an object and eliminates duplicates if already within 

  songs.forEach(songAlbums => {
    allAlbumsNoRepeats.add(songAlbums.album);
  });
// converts the new Set into an array and sorts it in reverse order via sort. 
  return Array.from(allAlbumsNoRepeats).sort((firstAlbum, lastAlbum) => lastAlbum.localeCompare(firstAlbum))
}
// #9
/**
 * Returns a list of song titles that contain a specific word.
 * @param {Object[]} songs - An array of songs.
 * @param {string} word - The word to search for in song titles.
 * @returns {string[]} An array of song titles containing the word.
 */
function songsWithWord(songs, word) {
  const newArrayOfSongs = new Set();

  songs.forEach((song) => {
    if (song.title.includes(word)) {
      newArrayOfSongs.add(song.title);
    }
  });

  return Array.from(newArrayOfSongs); // returns it as an array than an object 

}

// #10
/**
 * Returns the total runtime of songs by a specific artist.
 * @param {Object[]} songs - An array of songs.
 * @param {string} artistName - Name of the artist.
 * @returns {number} Total runtime in seconds.
 */
function getTotalRuntimeOfArtist(songs, artistName) {
  let totalRuntime = 0;
songs.forEach(element => {
  if(element.artist === artistName) {
    totalRuntime += element.runtimeInSeconds
  }
})
  return totalRuntime;
}

// Problem #11
/**
 * Prints artists who have more than one song in the list.
 * @param {Object[]} songs - An array of songs.
 */
function printArtistsWithMultipleSongs(songs) {
  let songCount = {};

  songs.forEach(song => {
    const artist = song.artist;

    if (songCount[artist]) {
      songCount[artist]++;
    } else {
      songCount[artist] = 1;
    }
  });

  for (const artist in songCount) {
    if (songCount[artist] > 1) {
      console.log(`${artist}`);
    }
  }
}
  


// Problem #12
/**
 * Logs the longest song title.
 * @param {Object[]} songs - An array of songs.
 */
function printLongestSongTitle(songs) {
  let songTitleList = songs.map(song => {
    return song.title; 
  });

  const longestTitle = songTitleList.reduce((longestSong, currentSong) => {
    return currentSong.length > longestSong.length ? currentSong : longestSong;
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
return songs.sort((artistA,artistB) => { let listOfArtists = artistA.artist.toLowerCase().localeCompare(artistB.artist.toLowerCase())
  if(listOfArtists !== 0){
      return listOfArtists;
  }
 return artistA.title.localeCompare(artistB.title)
})
}

// Problem #14
/**
 * Lists albums along with their total runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object mapping each album to its total runtime.
 */
function listAlbumTotalRuntimes(songs) {
  let albumAndRuntime = {};
  for(let i = 0; i < songs.length; i++) {
      let albumName = songs[i].album;
      let runtimeInSeconds = songs[i].runtimeInSeconds;
    if(!albumAndRuntime[albumName]) {
      albumAndRuntime[albumName] = runtimeInSeconds;
    } else {
      albumAndRuntime[albumName] += runtimeInSeconds
    }
  }
  return albumAndRuntime;
  }

// Problem #15
/**
 * Finds the first song with a title starting with a specific letter.
 * @param {Object[]} songs - An array of songs.
 * @param {string} letter - The letter to search for.
 * @returns {Object|null} The first song object that matches the criterion or null.
 */
function findFirstSongStartingWith(songs, letter) {
  return songs.find(song => song.title[0] === letter || null )
  
}

// Problem #16
/**
 * Maps each artist to an array of their song titles.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object mapping each artist to an array of their song titles.
 */
function mapArtistsToSongs(songs) {
  let artistListing = {};

  songs.map(song => {
    if (!artistListing.hasOwnProperty(song.artist)) {
      artistListing[song.artist] = [song.title];
    } else {
      artistListing[song.artist].push(song.title);
    }
  });

  return artistListing;
  
}

// Problem #17
/**
 * Finds the album with the longest average song runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the album with the longest average song runtime.
 */
function findAlbumWithLongestAverageRuntime(songs) {
  let albumAndRuntimes = {};
 
 songs.forEach(song => {
   let specificAlbum = song.album;
   let runtime = song.runtimeInSeconds 

       if(!albumAndRuntimes[specificAlbum]) {
           albumAndRuntimes[specificAlbum] = { 
           totalRuntime : runtime,
           numberOfSongs :1 }

       } else {
           albumAndRuntimes[specificAlbum].totalRuntime += runtime
           albumAndRuntimes[specificAlbum].numberOfSongs ++;
       }

 });
 let longestRuntime = 0;
 let albumWithLongestRuntime = undefined; 
 for(const album in albumAndRuntimes) {
   let sumRunTime = albumAndRuntimes[album].totalRuntime;
   let totalSongs = albumAndRuntimes[album].numberOfSongs;
   let averageRuntime = sumRunTime / totalSongs;
   if(averageRuntime > longestRuntime) {
       longestRuntime = averageRuntime;
       albumWithLongestRuntime = album;
   }
 }
 
return albumWithLongestRuntime;


 }

// Problem #18
/**
 * Logs song titles sorted by their runtime.
 * @param {Object[]} songs - An array of songs.
 */
function printSongsSortedByRuntime(songs) {
  let songsSorted = songs.sort((firstSong, secSong) =>
    firstSong.runtimeInSeconds - secSong.runtimeInSeconds
  );
  songsSorted.forEach((song) => console.log(song.title))
  
}

// Problem #19
/**
 * Prints a summary of each album, including its name, total runtime, and number of songs.
 * @param {Object[]} songs - An array of songs.
 */
function printAlbumSummaries(songs) {
  let albumSummary = {};
  songs.forEach(song => {
    if (!albumSummary[song.album]) {
      albumSummary[song.album] = {
        albumName: song.album, 
        songCount: 1, 
        totalRuntime: song.runtimeInSeconds
      };
    } else {
      albumSummary[song.album].songCount++;
      albumSummary[song.album].totalRuntime += song.runtimeInSeconds;
    }
  });

  for (const summary in albumSummary) {
    console.log(`${albumSummary[summary].albumName}: ${albumSummary[summary].songCount} songs, Total Runtime: ${albumSummary[summary].totalRuntime} seconds`);
  }
}

// Problem #20
/**
 * Finds the artist with the most songs in the list.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the artist with the most songs.
 */
function findArtistWithMostSongs(songs) {
  let artistAndNumberOfSongs = {};
  let artistWithMostSongs = '';
  let totalNumberOfSongs = 0;

  songs.forEach((song) => {
    if (!artistAndNumberOfSongs[song.artist]) {
      artistAndNumberOfSongs[song.artist] = { numberOfSongs: 1 };
    } else {
      artistAndNumberOfSongs[song.artist].numberOfSongs++;
    }

    if (artistAndNumberOfSongs[song.artist].numberOfSongs > totalNumberOfSongs) {
      let artistWithSongs = artistAndNumberOfSongs[song.artist];
      totalNumberOfSongs = artistWithSongs.numberOfSongs;
      artistWithMostSongs = song.artist;
    }
  });

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
