/*
Exercise No.41.
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.

*/

let mag_name: string[] = ["Duck", "Fic", "Hami", "dumdum"];

function show_magicians(names: string[]): void {
  for (const name of names) {
    console.log(name);
  }
}

show_magicians(mag_name);
