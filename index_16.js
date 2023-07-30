/*
Exercise No.16
16.	More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


*/
var arrayInvitees1 = ["Hamid", "Ali", "Qasim", "Ahmad", "Fawad",];
for (var i = 0; i < arrayInvitees1.length; i++) {
    console.log("My Dear ".concat(arrayInvitees1[i], ", I found bigger table for dinner, therefore, I will invite more guests at my home on 25th July, 2023."));
}
