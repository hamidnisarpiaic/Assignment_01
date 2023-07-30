// Exercise 24
/* 24.	More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array

*/
// Version that runs the if block
// Tests for equality and inequality with strings
let name1: string = 'John';

console.log("Test 1: Is name equal to 'John'? (Should be True)");
console.log(name1 == 'John');

console.log("Test 2: Is name not equal to 'Alice'? (Should be True)");
console.log(name1 != 'Alice');

console.log("Test 3: Is name equal to 'john'? (Should be False - case-sensitive)");
console.log(name1 == 'john');

// Tests using the lower case function
let message: string = 'HELLO';

console.log("Test 4: Is the message in lowercase equal to 'hello'? (Should be True)");
console.log(message.toLowerCase() == 'hello');

console.log("Test 5: Is the message in lowercase not equal to 'hello'? (Should be False)");
console.log(message.toLowerCase() != 'hello');

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let age: number = 25;

console.log("Test 6: Is age equal to 25? (Should be True)");
console.log(age == 25);

console.log("Test 7: Is age not equal to 30? (Should be True)");
console.log(age != 30);

console.log("Test 8: Is age greater than 20? (Should be True)");
console.log(age > 20);

console.log("Test 9: Is age less than 30? (Should be True)");
console.log(age < 30);

console.log("Test 10: Is age greater than or equal to 25? (Should be True)");
console.log(age >= 25);

console.log("Test 11: Is age less than or equal to 30? (Should be True)");
console.log(age <= 30);

// Tests using "and" and "or" operators
let isStudent: boolean = true;
let isEmployee: boolean = false;

console.log("Test 12: Is the person both a student and an employee? (Should be False)");
console.log(isStudent && isEmployee);

console.log("Test 13: Is the person either a student or an employee? (Should be True)");
console.log(isStudent || isEmployee);

// Test whether an item is in an array
let fruits2: string[] = ['apple', 'banana', 'orange'];

