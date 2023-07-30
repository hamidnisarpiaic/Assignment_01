// Exercise 25
/*	Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)*/





// Version that runs if block
let alien_color1: string = 'green';
if (alien_color1 === 'green') {
  console.log('You just earned 5 points!');
} 
else if (alien_color1 === 'yellow') {
  console.log('You just earned 10 points!');
} 
else if (alien_color1 === 'red') {
  console.log('You just earned 15 points!');
}

// Version that runs first else-if block
let alien_color2: string = 'yellow';
if (alien_color2 === 'green') {
  console.log('You just earned 5 points!');
} 
else if (alien_color2 === 'yellow') {
  console.log('You just earned 10 points!');
} 
else if (alien_color2 === 'red') {
  console.log('You just earned 15 points!');
}

// Version that runs second else-if block
let alien_color3: string = 'red';
if (alien_color3 === 'green') {
  console.log('You just earned 5 points!');
} 
else if (alien_color3 === 'yellow') {
  console.log('You just earned 10 points!');
} 
else if (alien_color3 === 'red') {
  console.log('You just earned 15 points!');
}
else
{
  console.log(`no output`);

}