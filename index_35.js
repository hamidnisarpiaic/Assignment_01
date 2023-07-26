// Exercise 37
function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("The shirt's size is, by default, ".concat(size, " and its message is: '").concat(message, "'."));
}
make_shirt();
make_shirt('Medium');
make_shirt('Small', 'Hello to the World!');
