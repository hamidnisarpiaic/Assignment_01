// Define the array of invitees
var invitee2 = ["Hamid", "Ali", "Qasim", "Ahmad", "Fawad", "Bakar", "Tariq", "Sajid"];
// Sort the array in ascending order
invitee2.sort();
// Greet each person in the sorted array
for (var i = 0; i < invitee2.length; i++) {
    console.log("My Dear ".concat(invitee2[i], ", kindly attend my wedding ceremony on 25th July, 2023."));
}
