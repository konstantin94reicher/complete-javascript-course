// const country = "Austria"; 
// const continent = "Europe"; 
// let population = 8; 
// const isIsland = false; 
// const language = "german"; 


// console.log(country); 
// console.log(continent); 
// console.log(population); 
// console.log(isIsland); 
// console.log(language); 

// const halfPopulation = population / 2; 
// population = population + 1;

// console.log(halfPopulation); 
// console.log(population); 

// const populationFinland = 6; 
// console.log(population > populationFinland); 

// const description = `${country} is in ${continent} and its ${population} million people speak ${language}.`; 
// console.log(description); 

// console.log('9' - '5'); // -> ?
// console.log('19' - '13' + '17'); // -> ?
// console.log('19' - '13' + 17); // -> ?
// console.log('123' < 57); // -> ?
// console.log(5 + 6 + '4' + 9 - 4 - 2); // -> ?

// function describeCountry (country, population, capitalCity) {
//     // Finland has 6 million people and its capital city is Helsinki
//     return `${country} has ${population} million people and its capital city is ${capitalCity}.`; 
// }

// const value1 = describeCountry("Austria", 9, "Vienna"); 
// const value2 = describeCountry("Portugal", 11, "Lissabon"); 
// const value3 = describeCountry("Germany", 80, "Berlin"); 

// console.log(value1);
// console.log(value2);
// console.log(value3);


function percentageOfWorld1 (population) {
    return parseFloat((population / 7900) * 100).toFixed(2); // begrenzt FLoat auf 2 Dezimalstellen
}

const valueAustria = percentageOfWorld1(8); 
const valuePortugal = percentageOfWorld1(11); 
const valueGermany = percentageOfWorld1(80);

console.log(valueAustria, valuePortugal, valueGermany); 

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100; 
}

const valueAustria1 = percentageOfWorld2(8); 
const valuePortugal1 = percentageOfWorld2(11); 
const valueGermany1 = percentageOfWorld2(80);

console.log(valueAustria1, valuePortugal1, valueGermany1); 

const percentageOfWorld3 = (population) => (population / 7900) * 100; 

const valueAustria2 = percentageOfWorld3(8); 
const valuePortugal2 = percentageOfWorld3(11); 
const valueGermany2 = percentageOfWorld3(80);

console.log(valueAustria2, valuePortugal2, valueGermany2); 

const describePopulation = (country, population) => `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`; // China has 1441 million people, which is about 18.2% of the world

const describeAustria = describePopulation("Austria", 8);
const describeGermany = describePopulation("Germany", 80);
const describePortugal = describePopulation("Portugal", 11);

console.log(describeAustria);
console.log(describeGermany);
console.log(describePortugal);

