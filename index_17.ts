// Think of at least five places in the world you’d like to visit
let visit1: string[] = ["Japan", "USA", "Pakistan", "UK", "India"];

// Print your array in its original order
console.log("Original Order:");
console.log(visit1);

// Print your array in alphabetical order without modifying the actual list
console.log("Alphabetical Order without modifying the actual Array:");
console.log([...visit1].sort());

// Show that your array is still in its original order by printing it
console.log("Original Order (Unchanged):");
console.log(visit1);

// Print your array in reverse alphabetical order without changing the order of the original list
console.log("Reversed Alphabetical Order without changing the actual Order:");
console.log([...visit1].sort((a, b) => b.localeCompare(a)));

// Show that your array is still in its original order by printing it again
console.log("Original Order (Unchanged):");
console.log(visit1);

// Reverse the order of your list. Print the array to show that its order has changed
console.log("Reversing Original Order:");
console.log([...visit1].reverse());

// Print the list to show that it’s back to its original order
console.log("Original Order (Unchanged):");
console.log(visit1);

// Reverse the order of your list again. Print the list to show it’s back to its original order
console.log("Reversing reversed Order again:");
console.log([...visit1].reverse());

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed
console.log("Sorting Array in Alphabetical Order:");
console.log([...visit1].sort());

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed
console.log("Sorting to change Array in Reverse Alphabetical Order:");
console.log([...visit1].sort((a, b) => b.localeCompare(a)));
