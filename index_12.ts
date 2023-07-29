/*
Exercise No.12.	Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
*/

let favNam1: string[] = ["Hamid", "Ali", "Zahid", "Sami", "Fawad"];

// Sort the array in ascending order
favNam1.sort();

// Greet each person in the sorted array
for (let i = 0; i < favNam1.length; i++) {
  console.log(`Hello, How are your my dear ${favNam1[i]}!`);
}