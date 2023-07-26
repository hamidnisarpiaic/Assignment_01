console.log("Method");
const favorite_fruits: string[] = ['banana', 'apple', 'mango'];

// Method 1 - Using if statements
if (favorite_fruits.includes('banana')) {
  console.log('You really like bananas!');
}

if (favorite_fruits.includes('apple')) {
  console.log('You really like apples!');
}

if (favorite_fruits.includes('mango')) {
  console.log('You really like mangoes!');
}

console.log("\nAlternative method-2\n");

// Method 2 - Using for...of loop
for (let f of favorite_fruits) {
  if (f === 'banana') {
    console.log('You really like bananas!');
    break;
  }
}

for (let f of favorite_fruits) {
  if (f === 'apple') {
    console.log('You really like apples!');
    break;
  }
}

for (let f of favorite_fruits) {
  if (f === 'mango') {
    console.log('You really like mangoes!');
    break;
  }
}

console.log("\nAlternative method-3\n");

// Method 3 - Using forEach loop and a mapping object
const fruitMessages: { [key: string]: string } = {
  'banana': 'You really like bananas!',
  'apple': 'You really like apples!',
  'mango': 'You really like mangoes!',
};

favorite_fruits.forEach((f) => {
  if (fruitMessages[f]) {
    console.log(fruitMessages[f]);
  }
});

console.log("\nAlternative method-4\n");

// Method 4 - Using array indexing
if (favorite_fruits[0] === 'banana') {
  console.log('You really like bananas!');
}

if (favorite_fruits[1] === 'apple') {
  console.log('You really like apples!');
}

if (favorite_fruits[2] === 'mango') {
  console.log('You really like mangoes!');
}
