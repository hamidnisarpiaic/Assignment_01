var arr = ["Urdu", "English", "Punjabi", "Pashto", "Kashmiri"];
var languages = "";
for (var i = 0; i < arr.length; i++) {
    if (i === 0) {
        languages += arr[i];
    }
    else if (i === arr.length - 1) {
        languages += " & ".concat(arr[i]);
    }
    else {
        languages += ", ".concat(arr[i]);
    }
}
console.log("I know ".concat(languages, " very well."));
