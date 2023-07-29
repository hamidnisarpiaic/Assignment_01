/*
Exercise No. 3.	Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/

let personName: string = "Hamid Nisar";

let lowercaseName: string = personName.toLowerCase();
console.log("Lowercase Name:", lowercaseName);

let uppercaseName: string = personName.toUpperCase();
console.log("UPPERcase Name:", uppercaseName);

function toTitleCase(str: string): string {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

let titlecaseName: string = toTitleCase(personName);
console.log("Titlecase Name:", titlecaseName);
