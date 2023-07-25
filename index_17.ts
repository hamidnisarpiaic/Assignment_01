// Think of at least five places in the world you’d like to visit
const placesToVisit: string[] = ["Japan", "USA", "Pakistan", "UK", "India"];

// Print the original order of the array
console.log("Original Order:");
console.log(placesToVisit);

// Print the array in alphabetical order without modifying the original list
console.log("Alphabetical Order without modifying the actual Array:");
console.log([...placesToVisit].sort());

// Print the array in reverse alphabetical order without changing the original list
console.log("Reversed Alphabetical Order without changing the actual Order:");
console.log([...placesToVisit].sort((a, b) => b.localeCompare(a)));

// Show that the original array remains unchanged
console.log("Original Order (Unchanged):");
console.log(placesToVisit);
