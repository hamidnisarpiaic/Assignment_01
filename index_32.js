/*
Exercise No.32.	Checking Usernames: Do the following to create a program
that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

*/
var current_users = ["Wahid", "Shahid", "Zahid", "Jamil", "Wakeel"];
var new_users = ["Farooq", "Faheem", "Waseem", "Wahid", "Zahid"];
var _loop_1 = function (new_user) {
    // Convert the new username to lowercase for case-insensitive comparison
    var new_user_lower = new_user.toLowerCase();
    // Check if the new username exists in the current usernames
    var is_username_taken = current_users.some(function (user) { return user.toLowerCase() === new_user_lower; });
    // Print the appropriate message based on whether the username is taken or available
    if (is_username_taken) {
        console.log("The username '".concat(new_user, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_user, "' is available."));
    }
};
// List of current usernames
// Loop through each new username in the 'new_users' array
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    _loop_1(new_user);
}
