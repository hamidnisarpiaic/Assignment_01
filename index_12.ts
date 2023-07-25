// Create an array of transport options
const transports: string[] = ['motorcycle', 'cycle', 'riksha', 'car', 'jeep'];

// Create a statement for each mode of transport
const statements: string[] = transports.map((transport) => `I would like to use ${transport}.`);

// Print each statement separately
for (const statement of statements) {
  console.log(statement);
}
