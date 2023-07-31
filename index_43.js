/*

43.	Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
with a copy of the array of magicians’ names. Because the original array will be unchanged, return
the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.

*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magician_name = ["Duck", "Fic", "Hami", "dumdum"];
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
show_magicians(magician_name);
// Create a copy of the original array and modify it to become "the Great" magicians
var greatMagiciansArr = make_great(__spreadArray([], magician_name, true));
// Magicians after being modified
console.log("\nGreat Magicians:");
show_magicians(greatMagiciansArr);
