/*
Ex42.	Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
 Call show_magicians() to see that the list has actually been modified.



*/
var mag_name = ["Duck", "Fic", "Hami", "dumdum"];
function show_magicians(names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        console.log(name_1);
    }
}
function make_great(names) {
    var greatMagicians = names.map(function (name) { return "the Great ".concat(name); });
    return greatMagicians;
}
// Original magicians
console.log("Original Magicians:");
show_magicians(mag_name);
// Modify the magicians to become "the Great" magicians
mag_name = make_great(mag_name);
// Magicians after being modified
console.log("\nGreat Magicians:");
show_magicians(mag_name);
