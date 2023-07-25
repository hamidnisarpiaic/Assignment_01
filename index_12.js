// Create an array of transport options
var transports = ['motorcycle', 'cycle', 'riksha', 'car', 'jeep'];
// Create a statement for each mode of transport
var statements = transports.map(function (transport) { return "I would like to use ".concat(transport, "."); });
// Print each statement separately
for (var _i = 0, statements_1 = statements; _i < statements_1.length; _i++) {
    var statement = statements_1[_i];
    console.log(statement);
}
