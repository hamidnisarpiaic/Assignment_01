/*
31.	No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed




*/



// List of current usernames
let currentUsers: string[] = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eric'];

// Check if the list of users is not empty
if (currentUsers.length === 0) {
  console.log("We need to find some users!");
} else {
  // Remove all usernames from the array
  currentUsers = [];

  // Print a message to indicate that all usernames have been removed
  console.log("All usernames have been removed from the list.");
}
