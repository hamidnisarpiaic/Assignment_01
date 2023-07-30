/*
Exercise No. 26.	
Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
*/

// if the alien's color is green, print a statement that the player just earned 5 points for shooting the alien.

let alien_colors: string = 'green';

if (alien_colors === "green") {
  console.log('You earn 5 points for shooting the alien.');
} else {
  console.log('You just earned 10 points!');
}

// If the alien’s color isn’t green, print a statement that the player just earned 10 points.


let alienColors: string = 'yellow';

if (alienColors !== "green") {
  console.log('You earn 10 points for shooting the alien.');
} else {
  console.log('You just earned 5 points!');
}



