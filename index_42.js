/*
Exercise 42. Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.
*/
// Original array of magician names
var magicians = ["Duck", "Fic", "Hami", "dumdum"];
function show_magicians1(names) {
    console.log("Magicians:");
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        console.log(name_1);
    }
}
function makeGreat(names) {
    for (var i = 0; i < names.length; i++) {
        names[i] = "the Great ".concat(names[i]);
    }
}
// Display the original magicians' names
console.log("Original Magicians:");
show_magicians(magicians);
// Modify the magicians to become "the Great" magicians
make_great(magicians);
// Display the names of the great magicians
console.log("\nGreat Magicians:");
show_magicians(magicians);
