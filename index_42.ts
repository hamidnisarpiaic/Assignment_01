/*
Ex42.	Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
 Call show_magicians() to see that the list has actually been modified.



*/
let mag_name: string[] = ["Duck", "Fic", "Hami", "dumdum"];

function show_magicians(names: string[]): void {
  for (const name of names) {
    console.log(name);
  }
}

function make_great(names: string[]): string[] {
  const greatMagicians: string[] = names.map(name => `the Great ${name}`);
  return greatMagicians;
}

// Original magicians
console.log("Original Magicians:");
show_magicians(mag_name);

// Modify the magicians to become "the Great" magicians
mag_name = make_great(mag_name);

// Magicians after being modified
console.log("\nGreat Magicians:");
show_magicians(mag_name);
