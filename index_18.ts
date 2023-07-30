let placesToVisit: string[] = ["Paris", "Tokyo", "New York", "Venice", "Sydney"];

// Print the array in its original order
console.log("Original order:", placesToVisit);

// Print the array in alphabetical order without modifying the actual list
let alphabeticalOrder = [...placesToVisit].sort();
console.log("Alphabetical order:", alphabeticalOrder);

// Show that the original array is still in its original order
console.log("Original order:", placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
let reverseAlphabeticalOrder = [...placesToVisit].sort((a, b) => b.localeCompare(a));
console.log("Reverse alphabetical order:", reverseAlphabeticalOrder);

// Show that the original array is still in its original order
console.log("Original order:", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

// Reverse the order of the list again
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);
