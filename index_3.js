/*
Exercise No. 3.	Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/
var personName = "Hamid Nisar";
var lowercaseName = personName.toLowerCase();
console.log("Lowercase Name:", lowercaseName);
var uppercaseName = personName.toUpperCase();
console.log("UPPERcase Name:", uppercaseName);
function toTitleCase(str) {
    return str.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
}
var titlecaseName = toTitleCase(personName);
console.log("Titlecase Name:", titlecaseName);
