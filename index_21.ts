// Define the Car interface to represent the structure of car objects
interface Car {
    make: string;
    model: string;
    year: number;
    color: string;
  }
  
  // Create car objects using the Car interface
  const car1: Car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2022,
    color: 'Silver',
  };
  
  const car2: Car = {
    make: 'Honda',
    model: 'Civic',
    year: 2021,
    color: 'Blue',
  };
  
  const car3: Car = {
    make: 'Ford',
    model: 'Mustang',
    year: 2023,
    color: 'Red',
  };
  
  // Display the car objects
  console.log(car1);
  console.log(car2);
  console.log(car3);
  