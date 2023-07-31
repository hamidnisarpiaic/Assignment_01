/* Exercise No.44.
Write a function that accepts a array of items a person Sandwiches wants on a sandwich.
 The function should have one parameter that collects as many items as the function call provides,
 and it should print a summary of the sandwich that is being ordered. Call the function three times,
 using a different number of arguments each time.
*/
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("No items added to the sandwich.");
    }
    else {
        console.log("Sandwich contains:");
        for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
            var item = items_1[_a];
            console.log("- ".concat(item));
        }
    }
    console.log("------------------------");
}
// Call the function three times with different number of arguments
makeSandwich("Bread", "Cheese", "Tomato");
makeSandwich("Bread", "Ham", "Lettuce", "Mayonnaise", "Pickles");
makeSandwich();
