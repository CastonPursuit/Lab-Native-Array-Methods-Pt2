const { get } = require("http");
const exampleSongData = require("./data/songs");

function mapArtistsToSongs(songs) {
    const artists = songs.map(song => song.artist)
    const mappedObject = {};
    for(const artist of artists) {
        const arr = []
        for(const song of songs) {
            if(artist === song.artist) {
                arr.push(song.title)
            }
        }
        if(mappedObject.hasOwnProperty(artist)){
            continue;
        }
        mappedObject[artist] = arr
    }
    return mappedObject
}
console.log(mapArtistsToSongs(exampleSongData))
