// Think of at least five places in the world you’d like to visit
/*
Exercise No. 17.	• 
Print a message to each of the two people still on your list, letting them know they’re still invited. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/





let arrayInvitees3: string[] = ["Hamid", "Ali", "Qasim", "Ahmad", "Fawad",];
for (let i = 0; i < arrayInvitees3.length; i++) {
  console.log(`My Dear ${arrayInvitees3[i]}, I found samaller table for dinner, therefore, I will invite only two guests separately on 25th July, 2023.`);
}


