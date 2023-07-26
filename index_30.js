var current_users = ['Ali', 'Fatima', 'Hassan', 'Hussain', 'Baqir'];
var new_users = ['Ali', 'Jaffar', 'Mosa', 'Raza', 'Hassan'];
// Convert the current users' array to a case-insensitive Set
var currentUsersSet = new Set(current_users.map(function (user) { return user.toLowerCase(); }));
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    // Check if the lowercase new_user is in the currentUsersSet
    if (currentUsersSet.has(new_user.toLowerCase())) {
        console.log("The username \"".concat(new_user, "\" is already taken. Please enter a new username."));
    }
    else {
        console.log("The username \"".concat(new_user, "\" is available."));
    }
}
