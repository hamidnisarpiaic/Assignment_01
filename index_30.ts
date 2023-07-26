let current_users: string[] = ['Ali', 'Fatima', 'Hassan', 'Hussain', 'Baqir'];
let new_users: string[] = ['Ali', 'Jaffar', 'Mosa', 'Raza', 'Hassan'];

// Convert the current users' array to a case-insensitive Set
const currentUsersSet = new Set(current_users.map(user => user.toLowerCase()));

for (let new_user of new_users) {
    // Check if the lowercase new_user is in the currentUsersSet
    if (currentUsersSet.has(new_user.toLowerCase())) {
        console.log(`The username "${new_user}" is already taken. Please enter a new username.`);
    } else {
        console.log(`The username "${new_user}" is available.`);
    }
}
