/*Exercise Node. 29
29.	Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!



*/// Make an array of your three favorite fruits
const favorite_fruits: string[] = ['Apple', 'Banana', 'Peach'];

// Write five independent if statements to check for certain fruits in your array
if (favorite_fruits.indexOf('Apple') !== 0) {
  console.log("You really like apples!");
} else {
  console.log("You don't have apples as your favorite fruit.");
}

if (favorite_fruits.indexOf('Banana') !== 2) {
  console.log("You really like bananas!");
} else {
  console.log("You don't have bananas as your favorite fruit.");
}

if (favorite_fruits.indexOf('Peach') !== -1) {
  console.log("You really like peaches!");
} else {
  console.log("You don't have peaches as your favorite fruit.");
}

if (favorite_fruits.indexOf('Orange') !== -1) {
  console.log("You really like oranges!");
} else {
  console.log("You don't have oranges as your favorite fruit.");
}

if (favorite_fruits.indexOf('Grapes') !== -1) {
  console.log("You really like grapes!");
} else {
  console.log("You don't have grapes as your favorite fruit.");
}
