/*
Exercise No.23.
Conditional Tests: Write a series of conditional tests. Print a statement describing each test and 
your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.



*/

let car = 'subaru';

// Test 1: Is car equal to 'subaru'? (Should be True)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

// Test 2: Is car not equal to 'honda'? (Should be True)
console.log("Is car != 'honda'? I predict True.");
console.log(car != 'honda');

// Test 3: Is car greater than 'ford'? (Should be True - 's' comes after 'f' in the lexicographical order)
console.log("Is car > 'ford'? I predict True.");
console.log(car > 'ford');

// Test 4: Is car less than 'volvo'? (Should be True - 's' comes before 'v' in the lexicographical order)
console.log("Is car < 'volvo'? I predict True.");
console.log(car < 'volvo');

// Test 5: Is the length of car equal to 6? (Should be True - 'subaru' has 6 characters)
console.log("Is car.length == 6? I predict True.");
console.log(car.length == 6);

// Test 6: Is car a number? (Should be False - car is a string)
console.log("Is car a number? I predict False.");
console.log(typeof car === 'number');

// Test 7: Is car not equal to 'subaru'? (Should be False - car is 'subaru')
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');

// Test 8: Is car equal to 'toyota'? (Should be False - car is 'subaru')
console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota');

// Test 9: Is car less than 'bmw'? (Should be False - 's' comes after 'b' in the lexicographical order)
console.log("Is car < 'bmw'? I predict False.");
console.log(car < 'bmw');

// Test 10: Is car greater than 'volkswagen'? (Should be False - 's' comes before 'v' in the lexicographical order)
console.log("Is car > 'volkswagen'? I predict False.");
console.log(car > 'volkswagen');
