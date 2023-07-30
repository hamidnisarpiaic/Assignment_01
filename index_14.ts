/*
Exercise No.14.
14.	Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

*/

// Define the array of invitees
let inviteeList: string[] = ["Hamid", "Ali", "Qasim", "Ahmad", "Fawad"];

// Sort the array in ascending order
inviteeList.sort();

// Greet each person in the sorted array
for (let i = 0; i < inviteeList.length; i++) {
  console.log(`My Dear ${inviteeList[i]}, kindly attend dinner at my home on 25th July, 2023.`);
}