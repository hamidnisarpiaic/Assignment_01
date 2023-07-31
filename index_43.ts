/*

43.	Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
with a copy of the array of magicians’ names. Because the original array will be unchanged, return 
the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original 
names and one array with the Great added to each magician’s name.

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

// Create a copy of the original array and modify it to become "the Great" magicians
const greatMagiciansArr: string[] = make_great([...mag_name]);

// Magicians after being modified
console.log("\nGreat Magicians:");
show_magicians(greatMagiciansArr);
