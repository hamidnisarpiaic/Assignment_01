// Exercise 40
interface Album {
    artist: string;
    title: string;
    tracks?: number;
}
function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album('Pink Floyd', 'The Dark Side of the Moon'));
console.log(make_album('Led Zeppelin', 'IV'));
console.log(make_album('The Beatles', 'Abbey Road', 17));