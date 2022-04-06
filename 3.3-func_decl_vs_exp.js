const million = 1000000;
const worldPopulation = 7900*million;

function percentageOfWorld1(population){
    return (population / worldPopulation)*100;
}

// example:
let chinaPopulation = 1441*million;
console.log(percentageOfWorld1(chinaPopulation));

// my choice:
let israelPopulation = 9.217*million;
console.log(percentageOfWorld1(israelPopulation));

let italyPopulation = 59.55*million;
console.log(percentageOfWorld1(italyPopulation));

let englandPopulation = 55.98*million;
console.log(percentageOfWorld1(englandPopulation));


// function expression:
const percentageOfWorld2 = population => (population / worldPopulation)*100;


console.log(percentageOfWorld1(israelPopulation));
console.log(percentageOfWorld1(italyPopulation));
console.log(percentageOfWorld1(englandPopulation));