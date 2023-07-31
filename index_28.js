/*
Exercise No. 28.
Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.
• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
• If the person is age 65 or older, print a message that the person is an elder.



*/
// Define the variable 'age' and assign the value 30 to it
var age = 30;
// Check if 'age' is less than 2
if (age < 2) {
    console.log("The person is a baby."); // If age is less than 2, log "The person is a baby."
}
// If 'age' is not less than 2, check if it's between 2 (inclusive) and 4 (exclusive)
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler."); // If age is between 2 and 4, log "The person is a toddler."
}
// If 'age' is not between 2 and 4, check if it's between 4 (inclusive) and 13 (exclusive)
else if (age >= 4 && age < 13) {
    console.log("The person is a kid."); // If age is between 4 and 13, log "The person is a kid."
}
// If 'age' is not between 4 and 13, check if it's between 13 (inclusive) and 20 (exclusive)
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager."); // If age is between 13 and 20, log "The person is a teenager."
}
// If 'age' is not between 13 and 20, check if it's between 20 (inclusive) and 65 (exclusive)
else if (age >= 20 && age < 65) {
    console.log("The person is an adult."); // If age is between 20 and 65, log "The person is an adult."
}
// If 'age' is not between 20 and 65, it means the person is 65 or older
else {
    console.log("The person is an elder."); // Log "The person is an elder."
}
