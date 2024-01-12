/*
Native Array Methods pt.2 continues with the same dataset: songs. All required functions and array methods (forEach, map, find, some/every, sort) are combined into a single file, each addressing a distinct problem.
*/


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
  return songs.map((x) => {return x.title}).sort();
}
console.log(getSortedTitles(exampleSongData));

// #2
/**
 * Returns the titles of all songs from a specified album.
 * @param {Object[]} songs - An array of songs.
 * @param {string} albumName - Name of the album.
 * @returns {string[]} An array of song titles.
 */
function getSongsFromAlbum(songs, albumName) {
  return songs
  .filter(songs =>songs.album == albumName)
  .map(songs => songs.title)
}




// #3 
/**
 * Categorizes and counts songs based on their runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object with counts of short, medium, and long songs.
 */
function categorizeSongsByRuntime(songs) {
   let runTime= {shortSongs:0,mediumSongs:0,longSongs:0}
   songs.forEach((song) =>{ 
    if   (song.runtimeInSeconds<180){
      runTime.shortSongs++;
    }else if (song.runtimeInSeconds >= 180 && song.runtimeInSeconds <= 300){
      runTime.mediumSongs++;
    }else if (song.runtimeInSeconds > 300){
      runTime.longSongs++
    }
   });
   return runTime;
  }

// #
/**
 * Finds the album with the highest number of songs.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the album with the most songs.
 */
function findAlbumWithMostSongs(songs) {
  let albumCount = {};
  songs.forEach(song => {
      if (albumCount[song.album]) {
          albumCount[song.album]++;
      } else {
          albumCount[song.album] = 1;
      }
  });
  let mostSongs = 0;
  let albumWithMostSongs = '';
  for (let album in albumCount) {
      if (albumCount[album] > mostSongs) {
          mostSongs = albumCount[album];
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
  return songs.find(song => song.album === albumName)
}

// #6
/**
 * Checks if there is at least one song longer than a specified runtime.
 * @param {Object[]} songs - An array of songs.
 * @param {number} runtime - The runtime to check against in seconds.
 * @returns {boolean} True if there is at least one song longer than the runtime.
 */
function isThereLongSong(songs, runtime) {
  return songs.some((song) => song.runtimeInSeconds>runtime)
}

// #7
/**
 * Transforms song data to show title and runtime in minutes.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object[]} Array of song objects with runtime in minutes.
 */
function getSongsWithDurationInMinutes(songs) {
  return songs.map((song) => { song.durationInMinutes=song.runtimeInSeconds/60;
return song
})
}

// #8
/**
 * Returns the album names in reverse alphabetical order.
 * @param {Object[]} songs - An array of songs.
 * @returns {string[]} Array of album names in reverse alphabetical order.
 */
function getAlbumsInReverseOrder(songs) {
    let arr=songs.map((x) => x.album).sort().reverse()
    let arr2=[];
    for (let i=0;i<arr.length;i++){
      if (i==0){
        arr2.push(arr[i])
      }if (i>0 && arr[i]!=arr[i-1]){
        arr2.push(arr[i])

      }
    }return arr2;
  }

// #9
/**
 * Returns a list of song titles that contain a specific word.
 * @param {Object[]} songs - An array of songs.
 * @param {string} word - The word to search for in song titles.
 * @returns {string[]} An array of song titles containing the word.
 */
function songsWithWord(songs, word) {
  let songsTitle=[];
  for(let i=0; i<songs.length;i++){
    songsTitle.push(songs[i].title);
    return songsTitle.filter((x) => x.includes(word));
  }
}

// #10
/**
 * Returns the total runtime of songs by a specific artist.
 * @param {Object[]} songs - An array of songs.
 * @param {string} artistName - Name of the artist.
 * @returns {number} Total runtime in seconds.
 */
function getTotalRuntimeOfArtist(songs, artistName) {
  let total=0;
  songs.filter(song => song.artist === artistName ? total += song.runtimeInSeconds:total)
return total;

}

// Problem #11
/**
 * Prints artists who have more than one song in the list.
 * @param {Object[]} songs - An array of songs.
 */
function printArtistsWithMultipleSongs(songs) {
  let count={}
songs.forEach(song => {
  if (count[song.artist]){
    count[song.artist]++;
  }else{
    count[song.artist]=1;
  }
  if(count[song.artist]>1){
    console.log(song.artist);
  }
})
}

// Problem #12
/**
 * Logs the longest song title.
 * @param {Object[]} songs - An array of songs.
 */
function printLongestSongTitle(songs) {
  let songName="";
  let length=0;
  songs.forEach(song => {
    if (song.title.length>length){
     length=song.title.length;
     songName=song.title;
    }
  }); console.log(songName);
}


// Problem #13
/**
 * Sorts songs by artist name, then by song title alphabetically.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object[]} Sorted array of songs.
 */
function sortSongsByArtistAndTitle(songs) {
//  return  songs.sort((A,B) =>
//      B.title - A.title ? -1:1).sort((A,B) => B.artist - A.artist ? -1:1) 
//  }
return songs.sort(
  (A,B) => 
    A.title - B.title ||
    A.artist.localeCompare(B.artist)
  )

}
// Problem #14
/**
 * Lists albums along with their total runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object mapping each album to its total runtime.
 */
function listAlbumTotalRuntimes(songs) {
  let albumTotalRuntimes={};
songs.forEach(song =>{
  if(albumTotalRuntimes[song.album]){
    albumTotalRuntimes[song.album] +=song.runtimeInSeconds
  }else{
    albumTotalRuntimes[song.album]=song.runtimeInSeconds
  }
})

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
   return  songs.find(song => song.title.startsWith(letter)) || null;
}
// return songs.find(song =>song.title[0]===letter) || null;


// Problem #16
/**
 * Maps each artist to an array of their song titles.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object mapping each artist to an array of their song titles.
 */
function mapArtistsToSongs(songs) {
  let object={};
 songs.map((song) => { object[song.artist] = (object[song.artist] || [])
  .concat(song.title);
    
 })
     return object
}
// Problem #17
/**
 * Finds the album with the longest average song runtime.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the album with the longest average song runtime.
 */
function findAlbumWithLongestAverageRuntime(songs) {
  let albums={};
 
  songs.find((song) => {

    if (!albums[song.album]) {
      albums[song.album] = { totalRuntime:song.runtimeInSeconds, songCount:1 };
    }else{
    albums[song.album].totalRuntime += song.runtimeInSeconds;
    albums[song.album].songCount++;
    }
  });
  console.log(albums)
  let albumName='';
  let average=0;
  for(let i in albums){
    if(albums[i].totalRuntime/albums[i].songCount>average){
      albumName=i
      average=albums[i].totalRuntime/albums[i].songCount
    }
  }
  return albumName;
}

// Problem #18
/**
 * Logs song titles sorted by their runtime.
 * @param {Object[]} songs - An array of songs.
 */
function printSongsSortedByRuntime(songs) {
   songs.sort((a,b) => a.runtimeInSeconds-b.runtimeInSeconds);
   songs.forEach((song)=>  console.log(song.title))
  
}

// Problem #19
/**
 * Prints a summary of each album, including its name, total runtime, and number of songs.
 * @param {Object[]} songs - An array of songs.
 */
function printAlbumSummaries(songs) {
let albumSum={};
songs.forEach(song => {
  if (!albumSum[song.album]){
albumSum[song.album]={
  songCount:1, 
  totalRuntime:song.runtimeInSeconds}
  }else{
    albumSum[song.album].songCount++;
    albumSum[song.album].totalRuntime +=song.runtimeInSeconds;
  }
})
for (let summary in albumSum){
 console.log(
  `${summary}: ${albumSum[summary].songCount} songs, Total Runtime: ${albumSum[summary].totalRuntime} seconds`);
}
}
// Problem #20
/**
 * Finds the artist with the most songs in the list.
 * @param {Object[]} songs - An array of songs.
 * @returns {string} The name of the artist with the most songs.
 */
function findArtistWithMostSongs(songs) {
  let count = {};
    songs.forEach(song => {
        if (count[song.artist]) {
            count[song.artist]++;
        } else {
            count[song.artist] = 1;
        }
    });
    let max = 0;
    let artistSong = '';
    for (let artist in count) {
        if (count[artist] > max) {
            max = count[artist];
            artistSong = artist;
        }
    }

    return artistSong;
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

