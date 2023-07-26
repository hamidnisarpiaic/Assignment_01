// Exercise 42
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "".concat(magicians[i], ", the Great");
    }
}
var magicians1 = ['David Copperfield', 'Harry Houdini', 'Penn & Teller'];
make_great(magicians1);
show_magicians(magicians1);
