// Define the array of invitees
var invitee = ["Hamid", "Ali", "Zahid", "Sami", "Fawad"];
// Sort the array in ascending order
invitee.sort();
// Greet each person in the sorted array
for (var i = 0; i < invitee.length; i++) {
    console.log("My Dear ".concat(invitee[i], ", kindly attend my wedding ceremony on 25th July, 2023."));
}
