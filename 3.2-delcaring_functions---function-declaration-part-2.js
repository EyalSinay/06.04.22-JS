/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.

    Submit the file to Hive

*/

// From function declarations to explicit and implicit return functions (one of each).

// function welcome() {
//     let welcome = 'Welcome to Appleseeds Bootcamp!';
//     return welcome;
// }
// explicit:
const welcome_E = () => {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}
// Implicit:
const welcome_I = () => 'Welcome to Appleseeds Bootcamp!';



// function power(a) {
//     let myNumber = a;
//     let result = Math.pow(myNumber, 2);
//     return result;
// }
// explicit:
const power_E = (a) => {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}
// Implicit:
const power_I = a => (
Math.pow(a, 2)
);




// From function expressions to IIFE functions.

// const squareRoot = a => Math.sqrt(a);
(squareRoot = (a) => {
    return Math.sqrt(a);
})();


// const randomNumbers = (a, b) => Math.random() * (a - b) + b;
(randomNumbers = (a,b) => Math.random() * (a - b) + b)(2,2);



// tests:
console.log(welcome_E());
console.log(welcome_I());
console.log(power_E(3));
console.log(power_I(3));
console.log(squareRoot(4));
console.log(randomNumbers(2,2));