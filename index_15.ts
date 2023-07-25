// Define the array of invitees
let invitee2: string[] = ["Hamid", "Ali", "Qasim", "Ahmad", "Fawad", "Bakar", "Tariq", "Sajid"];

// Sort the array in ascending order
invitee2.sort();

// Greet each person in the sorted array
for (let i = 0; i < invitee2.length; i++) {
  console.log(`My Dear ${invitee2[i]}, kindly attend my wedding ceremony on 25th July, 2023.`);
}