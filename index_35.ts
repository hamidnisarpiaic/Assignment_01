// Exercise 37
function make_shirt(size: string = 'Large', message: string = 'I love TypeScript') {
    console.log(`The shirt's size is, by default, ${size} and its message is: '${message}'.`);
}
make_shirt();
make_shirt('Medium');
make_shirt('Small', 'Hello to the World!');