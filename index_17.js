var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Think of at least five places in the world you’d like to visit
var placesToVisit = ["Japan", "USA", "Pakistan", "UK", "India"];
// Print the original order of the array
console.log("Original Order:");
console.log(placesToVisit);
// Print the array in alphabetical order without modifying the original list
console.log("Alphabetical Order without modifying the actual Array:");
console.log(__spreadArray([], placesToVisit, true).sort());
// Print the array in reverse alphabetical order without changing the original list
console.log("Reversed Alphabetical Order without changing the actual Order:");
console.log(__spreadArray([], placesToVisit, true).sort(function (a, b) { return b.localeCompare(a); }));
// Show that the original array remains unchanged
console.log("Original Order (Unchanged):");
console.log(placesToVisit);
