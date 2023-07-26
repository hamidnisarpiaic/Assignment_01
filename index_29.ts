function greetUsers(usernames: string[]): void {
    for (const username of usernames) {
      if (username.toLowerCase() === 'admin') {
        console.log(`Hello admin, would you like to see a status report?`);
      } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
      }
    }
  }
  
  // Example usage:
  const users: string[] = ['admin', 'Eric', 'John', 'Alice', 'admin123'];
  greetUsers(users);