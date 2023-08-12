/*
Exercise No. 3.	Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/

/*let personName: string = "Hamid Nisar";

let lowercaseName: string = personName.toLowerCase();
console.log("Lowercase Name:", lowercaseName);

let uppercaseName: string = personName.toUpperCase();
console.log("UPPERcase Name:", uppercaseName);

function toTitleCase(str: string): string {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

let titlecaseName: string = toTitleCase(personName);
console.log("Titlecase Name:", titlecaseName);
*/
// Define the person's name
let personName = "Hamid Nisar";

// Convert the name to uppercase
let uppercasePersonName = personName.toUpperCase();

// Convert the name to lowercase
let lowercasePersonName = personName.toLowerCase();

// Convert the name to title case
let titleCasePersonName = personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase();

// Print the results
console.log(`${uppercasePersonName}`);
console.log(`${lowercasePersonName}`);
console.log(`${titleCasePersonName}`);







/*
let perNam = "Farooq";
let lowerCaseperNam = perNam.toLowerCase();
let upperCaseperNam = perNam.toUpperCase();
let titleCaseperNam = perNam.charAt(0).toUpperCase () + perNam.slice (1).toLowerCase();
console.log(`${lowerCaseperNam}`);
console.log(`${upperCaseperNam}`);
console.log(`${titleCaseperNam}`);

*/






