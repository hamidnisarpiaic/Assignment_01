/*
Exercise No. 11.	Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.


*/


let favNam: string[] = ["Hamid", "Ali", "Zahid", "Sami", "Fawad"];

// Sort the array in ascending order
favNam.sort();

// Greet each person in the sorted array
for (let i = 0; i < favNam.length; i++) {
  console.log(`Hello, ${favNam[i]}!`);
}