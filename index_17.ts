// Think of at least five places in the world you’d like to visit
/*
//Exercise No. 17:
/• Print a message to each of the two people still on your list, letting them know they’re still invited.
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message
• Remove the last two names from your list, so you have an empty list.
Print your list to make sure you actually have an empty list at the end of your program.
*/

// List of invitees
let arrayInvitees12: string[] = ["Hamid", "Ali", "Qasim", "Ahmad", "Fawad"];

// Iterate through the list and print messages to invitees
for (let i = 0; i < arrayInvitees12.length; i++) {
  if (i < 2) {
    console.log(`My Dear ${arrayInvitees12[i]}, You're still invited to the dinner on 25th July, 2023.`);
  } else {
    console.log(`${arrayInvitees12[i]}, unfortunately, we have limited space and won't be able to accommodate you.`);
  }
}
// Remove the last two names from the list
arrayInvitees12.pop();
arrayInvitees12.pop();

// Print the updated guest list
console.log(`Updated guest list: ${arrayInvitees12.length === 0 ? "Empty" : arrayInvitees12.join(", ")}`);
