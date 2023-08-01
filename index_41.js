/*
Exercise No.41.
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.

*/
// Exercise No.41 - Magicians: Make an array of magician’s names.
var magacians_name = ["Duck", "Fic", "Hami", "dumdum"];
// Function to print the name of each magician in the array.
function show1_magicians(names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        console.log(name_1);
    }
}
// Call the show_magicians function to display the names of the magicians.
show1_magicians(magacians_name);
