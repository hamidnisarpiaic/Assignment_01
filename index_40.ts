// Exercise 42
function show_magicians(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `${magicians[i]}, the Great`;
    }
}
let magicians1: string[] = ['David Copperfield', 'Harry Houdini', 'Penn & Teller'];
make_great(magicians1);
show_magicians(magicians1);