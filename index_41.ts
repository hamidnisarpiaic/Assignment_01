/*
Exercise No.41.
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.

*/
// Exercise No.41 - Magicians: Make an array of magician’s names.
let magacians_name: string[] = ["Duck", "Fic", "Hami", "dumdum"];

// Function to print the name of each magician in the array.
function show1_magicians (names: string[]): void {
  for (const name of names) {
    console.log(name);
  }
}

// Call the show_magicians function to display the names of the magicians.
show_magicians(magacians_name);
