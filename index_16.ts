/*
Exercise No.16
16.	More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


*/

let arrayInvitees11: string[] = ["Hamid", "Ali", "Qasim", "Ahmad", "Fawad"];

for (let i = 0; i < arrayInvitees11.length; i++) {
  console.log(`My Dear ${arrayInvitees11[i]}, I found a bigger table for dinner, therefore, I will invite more guests to my home on 25th July, 2023.`);
}

arrayInvitees11.shift(); // Equivalent to arrayInvitees1.splice(0, 1);
arrayInvitees11.push("Jamil"); // Equivalent to arrayInvitees1.splice(arrayInvitees1.length, 0, "Jamil");

console.log(`My dear ${arrayInvitees11.join(", ")} you are still invited to attend dinner.`);
