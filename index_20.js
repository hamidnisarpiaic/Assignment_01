//Exercise Node.20
// Create an array of mountains
var mountains = [
    "Mount Everest",
    "K2",
    "Kangchenjunga",
    "Makalu",
    "Cho Oyu",
    "Mount Kilimanjaro",
    "Mount McKinley",
    "Mount Elbrus",
    "Mount Vinson",
    "Puncak Jaya",
];
// Print each mountain's name
console.log("List of Famous Mountains:");
for (var i = 0; i < mountains.length; i++) {
    console.log("".concat(i + 1, ". ").concat(mountains[i]));
}
