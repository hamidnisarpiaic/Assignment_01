/* Exercise No.13
13.	Your Own Array: Think of your favourite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
*/
let favoriteTransportation: string[] = ["Honda motorcycle", "Tesla car", "BMW bike", "Toyota truck"];

for (let i = 0; i < favoriteTransportation.length; i++) {
  console.log(`I would like to own a ${favoriteTransportation[i]}.`);
}
