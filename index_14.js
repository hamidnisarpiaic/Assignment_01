// Define the array of invitees
var invitee1 = ["Hamid", "Ali", "Qasim", "Ahmad", "Fawad"];
// Sort the array in ascending order
invitee1.sort();
// Greet each person in the sorted array
for (var i = 0; i < invitee1.length; i++) {
    console.log("My Dear ".concat(invitee1[i], ", kindly attend my wedding ceremony on 25th July, 2023."));
}
