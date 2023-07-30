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
var arrayInvitees = ["Hamid", "Ali", "Qasim", "Ahmad", "Fawad"];
console.log("Ali will not attend dinner");
var indextoRemove = 1; // Index of the item you want to remove
arrayInvitees.splice(indextoRemove, 1, "Waseem");
for (var i = 0; i < arrayInvitees.length; i++) {
    console.log("My Dear ".concat(arrayInvitees[i], ", kindly attend dinner at my home on 25th July, 2023."));
}
