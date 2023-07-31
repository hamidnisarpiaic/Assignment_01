/*
Exercise 42. Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.
*/
// Original array of magician names
let magicians: string[] = ["Duck", "Fic", "Hami", "dumdum"];

function show_magicians1(names: string[]): void {
  console.log("Magicians:");
  for (const name of names) {
    console.log(name);
  }
}

function makeGreat(names: string[]): void {
  for (let i = 0; i < names.length; i++) {
    names[i] = `the Great ${names[i]}`;
  }
}

// Display the original magicians' names
console.log("Original Magicians:");
show_magicians(magicians);

// Modify the magicians to become "the Great" magicians
make_great(magicians);

// Display the names of the great magicians
console.log("\nGreat Magicians:");
show_magicians(magicians);
