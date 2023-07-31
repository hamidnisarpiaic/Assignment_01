/*
3Exercise No.39.	City Names: Write a function called city_country() that 
takes in the name of a city and its country. The function should return a string formatted like this:
"Lahore, Pakistan"

*/

function city_country(city:string,country:string = "unknow"):void{
    console.log (`${city}, ${country}`);
}
city_country ("Karachi", "Pakistan");
city_country ("Newyord", "USA");
city_country ("London", "UK");
