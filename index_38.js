function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album('Pink Floyd', 'The Dark Side of the Moon'));
console.log(make_album('Led Zeppelin', 'IV'));
console.log(make_album('The Beatles', 'Abbey Road', 17));