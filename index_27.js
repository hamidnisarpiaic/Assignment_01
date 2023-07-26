console.log("Method");
var favorite_fruits = ['banana', 'apple', 'mango'];
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
for (var _i = 0, favorite_fruits_1 = favorite_fruits; _i < favorite_fruits_1.length; _i++) {
    var f = favorite_fruits_1[_i];
    if (f === 'banana') {
        console.log('You really like bananas!');
        break;
    }
}
for (var _a = 0, favorite_fruits_2 = favorite_fruits; _a < favorite_fruits_2.length; _a++) {
    var f = favorite_fruits_2[_a];
    if (f === 'apple') {
        console.log('You really like apples!');
        break;
    }
}
for (var _b = 0, favorite_fruits_3 = favorite_fruits; _b < favorite_fruits_3.length; _b++) {
    var f = favorite_fruits_3[_b];
    if (f === 'mango') {
        console.log('You really like mangoes!');
        break;
    }
}
console.log("\nAlternative method-3\n");
// Method 3 - Using forEach loop and a mapping object
var fruitMessages = {
    'banana': 'You really like bananas!',
    'apple': 'You really like apples!',
    'mango': 'You really like mangoes!',
};
favorite_fruits.forEach(function (f) {
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
