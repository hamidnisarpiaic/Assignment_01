let favNam: string[] = ["Hamid", "Ali", "Zahid", "Sami", "Fawad"];

// Sort the array in ascending order
favNam.sort();

// Greet each person in the sorted array
for (let i = 0; i < favNam.length; i++) {
  console.log(`Hello, ${favNam[i]}!`);
}