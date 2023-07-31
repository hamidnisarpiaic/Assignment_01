/*
Exercise No.38.
38.	Cities: Write a function called describe_city() that accepts the name of a city and its country.
The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value.
Call your function for three different cities, at least one of which is not in the default country

*/
function describeCity(city, country) {
    if (country === void 0) { country = "unknow"; }
    console.log("".concat(city, " is the ").concat(country));
}
describeCity("Karachi", "Pakistan");
describeCity("New York", "USA");
describeCity("Sydney"); // Using default country "Unknown"
