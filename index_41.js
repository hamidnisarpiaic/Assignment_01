/*
Exercise No.41.
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.

*/
var mag_name = ["Duck", "Fic", "Hami", "dumdum"];
function show_magicians(names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        console.log(name_1);
    }
}
show_magicians(mag_name);
