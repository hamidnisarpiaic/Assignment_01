/*

Exercise nO. 36.
T-Shirt: Write a function called make_shirt() that accepts a size and
the text of a message that should be printed on the shirt.
The function should print a sentence summarizing the size of the shirt
and the message printed on it. Call the function.

*/
function makeShirt(size, message) {
    console.log("T-Shirt Summary: Size - ".concat(size, ", Message - \"").concat(message, "\""));
}
// Call the function with size and message
makeShirt("Medieum", "I love TypeScript!");
