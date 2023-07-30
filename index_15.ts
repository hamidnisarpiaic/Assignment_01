/*
Exercise No.15
15.	Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.
const originalArray: number[] = [1, 2, 3, 4, 5];
const indexToRemove: number = 2; // Index of the item you want to remove
arrayInvitees.splice(indextoRemove, 1, "Waseem");
*/

// Start from Exercise No.14
let arrayInvitees: string[] = ["Hamid", "Ali", "Qasim", "Ahmad", "Fawad"];
console.log (`Ali will not attend dinner`);
let indextoRemove: number = 1; // Index of the item you want to remove

arrayInvitees.splice(indextoRemove, 1, "Waseem");
for (let i = 0; i < arrayInvitees.length; i++) {
  console.log(`My Dear ${arrayInvitees[i]}, kindly attend dinner at my home on 25th July, 2023.`);
}
const newGuest: string = "Daud";

arrayInvitees.splice(0, 0, newGuest); // Add "Daud" at index 0
{
console.log(`${arrayInvitees}`);
}