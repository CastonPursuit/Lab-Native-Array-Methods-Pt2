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

getSortedTitles(exampleSongData);

// #2
/**
 * Returns the titles of all songs from a specified album.
 * @param {Object[]} songs - An array of songs.
 * @param {string} albumName - Name of the album.
 * @returns {string[]} An array of song titles.
 */
function getSongsFromAlbum(songs, albumName) {
  return songs.filter((x) => x.album === albumName).map((song) => song.title);
}

getSongsFromAlbum(exampleSongData,"Bluewerks Vol. 1: Up Down Left Right")

// #3 
/**
 * Categorizes and counts songs based on their runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object with counts of short < 180 , medium >= 180, and long > 300 songs.
 */
function categorizeSongsByRuntime(songs) {
//   let objectByTimes = {
//     shortSongs: 0,
//     mediumSongs: 0,
//     longSongs: 0
//   };
//   objectByTimes.shortSongs = songs.filter((x) => x.runtimeInSeconds < 180).length;
//   objectByTimes.mediumSongs = songs.filter((x) => x.runtimeInSeconds >= 180).length;
//   objectByTimes.longSongs = songs.filter((x) => x.runtimeInSeconds > 300).length;
  
// return objectByTimes;

return songs.reduce((songCounts,currSong) => {
  if(currSong.runtimeInSeconds < 180) {
    songCounts.shortSongs++;
  } else if(currSong.runtimeInSeconds >= 180 &&  currSong.runtimeInSeconds < 300) {
    songCounts.mediumSongs++;
  } else if(currSong.runtimeInSeconds > 300) {
    songCounts.longSongs++;
  }
  return songCounts;

}, {shortSongs : 0, mediumSongs : 0, longSongs : 0});

}

categorizeSongsByRuntime(exampleSongData);

// #4
/**
 * Finds the album with the highest number of songs.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the album with the most songs.
 */
function findAlbumWithMostSongs(songs) {
  let compare = 0;
  let mostPlayedAlbum = '';

  songs.reduce((acc, song) => {
    const album = song.album;
    
    acc[album] = (acc[album] || 0) + 1;

    if(acc[album] > compare) {
      compare = acc[album];
      mostPlayedAlbum = album;
    }
    return acc;
 
  } , {});

  return mostPlayedAlbum;
}

findAlbumWithMostSongs(exampleSongData);

// #5
/**
 * Returns details of the first song in a specific album.
 * @param {Object[]} songs - An array of songs.
 * @param {string} albumName - Name of the album.
 * @returns {Object|null} First song object in the album or null.
 */
function getFirstSongInAlbum(songs, albumName) {
  return songs.find((x) => x.album === albumName);
}

getFirstSongInAlbum(exampleSongData,'City Lights');

// #6
/**
 * Checks if there is at least one song longer than a specified runtime.
 * @param {Object[]} songs - An array of songs.
 * @param {number} runtime - The runtime to check against in seconds.
 * @returns {boolean} True if there is at least one song longer than the runtime.
 */
function isThereLongSong(songs, runtime) {
  return songs.some((x) => x.runtimeInSeconds > runtime);
}

isThereLongSong(exampleSongData,200);

// #7
/**
 * Transforms song data to show title and runtime in minutes.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object[]} Array of song objects with runtime in minutes.
 */
function getSongsWithDurationInMinutes(songs) {

  let songsWithRuntimeInMinutes = songs.map(song => { return {
    title : song.title,
    durationInMinutes : song.runtimeInSeconds / 60
}});

return songsWithRuntimeInMinutes;
 
}

getSongsWithDurationInMinutes(exampleSongData)

// #8
/**
 * Returns the album names in reverse alphabetical order.
 * @param {Object[]} songs - An array of songs.
 * @returns {string[]} Array of album names in reverse alphabetical order.
 */
function getAlbumsInReverseOrder(songs) {
  let reducedArr = [];
  songs.reduce((acc,song) => {
     if(!acc.includes(song.album)) {
      acc.push(song.album)
      reducedArr.push(song.album)
     }
     return acc;
  }, [])
  reducedArr.sort((a,b) => b.toLowerCase() > a.toLowerCase() ? 1: -1);

  return reducedArr;
}

getAlbumsInReverseOrder(exampleSongData);

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

songsWithWord(exampleSongData,'Jam');

// #10
/**
 * Returns the total runtime of songs by a specific artist.
 * @param {Object[]} songs - An array of songs.
 * @param {string} artistName - Name of the artist.
 * @returns {number} Total runtime in seconds.
 */
function getTotalRuntimeOfArtist(songs, artistName) {
  return songs.filter(song => song.artist === artistName).reduce((acc,total) => acc += total.runtimeInSeconds,0);
}

getTotalRuntimeOfArtist(exampleSongData,'Melody Green');

// Problem #11
/**
 * Prints artists who have more than one song in the list.
 * @param {Object[]} songs - An array of songs.
 */
function printArtistsWithMultipleSongs(songs) {
  songs.reduce((acc,song) => {
    let artist = song.artist;
    
    if(artist in acc) {
      acc[artist]++
      if(acc[artist] > 1) {
        console.log(artist)
      }
    }
    else {
      acc[artist] = 1
    }

    return acc;
  },{});
 
}

// printArtistsWithMultipleSongs(exampleSongData);

// Problem #12
/**
 * Logs the longest song title.
 * @param {Object[]} songs - An array of songs.
 */
function printLongestSongTitle(songs) {
  let sortedSongs = songs.sort((a,b) => b.title.length - a.title.length);
  let longestSong = sortedSongs[0].title;

  console.log(longestSong);
}

// printLongestSongTitle(exampleSongData);

// Problem #13
/**
 * Sorts songs by artist name, then by song title alphabetically.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object[]} Sorted array of songs.
 */
function sortSongsByArtistAndTitle(songs) {
  return songs.sort((a,b) => {
    return a.artist.toLowerCase().localeCompare(b.artist.toLowerCase()) || a.title.toLowerCase().localeCompare(b.title.toLowerCase())
  });
}

sortSongsByArtistAndTitle(exampleSongData);


// Problem #14
/**
 * Lists albums along with their total runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object mapping each album to its total runtime.
 */
function listAlbumTotalRuntimes(songs) {
  return songs.reduce((albumsWithTimes,currSong) => {
    let currAlbum = currSong.album;
    if(currAlbum in albumsWithTimes) {
      albumsWithTimes[currAlbum] += currSong.runtimeInSeconds;
    } else {
      albumsWithTimes[currAlbum] = currSong.runtimeInSeconds;
    }
    return albumsWithTimes;
  }, {})
}

listAlbumTotalRuntimes(exampleSongData);

// Problem #15
/**
 * Finds the first song with a title starting with a specific letter.
 * @param {Object[]} songs - An array of songs.
 * @param {string} letter - The letter to search for.
 * @returns {Object|null} The first song object that matches the criterion or null.
 */
function findFirstSongStartingWith(songs, letter) {
  return songs.find((song) => song.title.startsWith(letter));
}

findFirstSongStartingWith(exampleSongData,'B')

// Problem #16
/**
 * Maps each artist to an array of their song titles.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object mapping each artist to an array of their song titles.
 */
function mapArtistsToSongs(songs) {
  return songs.reduce((artistObj, currSong) => {
    let artist = currSong.artist;
    let title = currSong.title;

    if(artist in artistObj) {
      artistObj[artist].push(title);
    }
    else {
      artistObj[artist] = [title];
    }
    return artistObj;
  }, {})
}

mapArtistsToSongs(exampleSongData);

// Problem #17
/**
 * Finds the album with the longest average song runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the album with the longest average song runtime.
 */
function findAlbumWithLongestAverageRuntime(songs) {
  let average = 0;
  let longestAlbum = '';

  songs.reduce((longestAlbumObj,currSong) => {
    let album = currSong.album;
    let runtime = currSong.runtimeInSeconds;

    if(album in longestAlbumObj) {
      longestAlbumObj[album].push(runtime); 
    } else {
      longestAlbumObj[album] = [runtime];
    }
    let total = 0;
    for(const num of longestAlbumObj[album]) {
        total += num;
    }
    if((total / longestAlbumObj[album].length) > average) {
      average = total / longestAlbumObj[album].length;
      longestAlbum = album;
    }

    return longestAlbumObj;
  }, {});

  return longestAlbum;
}

findAlbumWithLongestAverageRuntime(exampleSongData);

// Problem #18
/**
 * Logs song titles sorted by their runtime.
 * @param {Object[]} songs - An array of songs.
 */
function printSongsSortedByRuntime(songs) {
  return songs.sort((a,b) => a.runtimeInSeconds - b.runtimeInSeconds).forEach(song => console.log(song.title));
}

// printSongsSortedByRuntime(exampleSongData);

// Problem #19
/**
 * Prints a summary of each album, including its name, total runtime, and number of songs.
 * @param {Object[]} songs - An array of songs.
 */
function printAlbumSummaries(songs) {
  
let arrangedAlbumObj = songs.reduce((categorizedAlbums,currSong) => {
      album = currSong.album;
      runtime = currSong.runtimeInSeconds;
    
  
      if(album in categorizedAlbums) {
        categorizedAlbums[album].songCount = (categorizedAlbums[album].songCount || 0) + 1;
        categorizedAlbums[album].totalRuntime = (categorizedAlbums[album].totalRuntime || 0) + runtime;
      }
      else {
        categorizedAlbums[album] = {
          songCount : 1,
          totalRuntime : runtime
        };
      }
      
      return categorizedAlbums;
    },{} );

  Object.keys(arrangedAlbumObj).forEach(album => {
    console.log(`${album}: ${arrangedAlbumObj[album].songCount} songs, Total Runtime: ${arrangedAlbumObj[album].totalRuntime} seconds`)
  })
    
}

// printAlbumSummaries(exampleSongData);

// Problem #20
/**
 * Finds the artist with the most songs in the list.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the artist with the most songs.
 */
function findArtistWithMostSongs(songs) {
  let maxCount = 0;
  let artistWithMost ='';

 songs.reduce((count,currSong) => {
  let artist = currSong.artist;

  count[artist] = (count[artist] || 0) + 1;

  if(count[artist] > maxCount) {
    maxCount = count[artist];
    artistWithMost = artist;
  }

  return count;
  
 }, {});

return artistWithMost;

}

console.log(findArtistWithMostSongs(exampleSongData))


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



// songs.reduce((categorizedAlbums,currSong) => {
  //     album = currSong.album;
  //     runtime = currSong.runtimeInSeconds;
    
  
  //     if(album in categorizedAlbums) {
  //      categorizedAlbums[album].songCount ++;
  //      categorizedAlbums[album].totalRuntime += runtime;
  //     }
  //     else {
  //       categorizedAlbums[album] = {
  //         songCount : 1,
  //         totalRuntime : runtime
  //       };
  //     }
      
  //     return categorizedAlbums;
  //   },{} );