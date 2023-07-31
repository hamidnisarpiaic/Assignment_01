/* Exercise No.44.
Write a function that accepts a array of items a person Sandwiches wants on a sandwich.
 The function should have one parameter that collects as many items as the function call provides, 
 and it should print a summary of the sandwich that is being ordered. Call the function three times, 
 using a different number of arguments each time.
*/

function makeSandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
      console.log("No items added to the sandwich.");
    } else {
      console.log("Sandwich contains:");
      for (const item of items) {
        console.log(`- ${item}`);
      }
    }
    console.log("------------------------");
  }
  
  // Call the function three times with different number of arguments
  makeSandwich("Bread", "Cheese", "Tomato");
  makeSandwich("Bread", "Ham", "Lettuce", "Mayonnaise", "Pickles");
  makeSandwich();
  


