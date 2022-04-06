// let numSiblings = prompt('How many siblings do you have?');
// if(numSiblings == 1){
//     console.log('1 sibling!');
// }
// else if(numSiblings == 2){
//     console.log('2 sibling!');
// }
// else if(numSiblings == 3){
//     console.log('3 sibling!');
// }
// else if(numSiblings == 4){
//     console.log('4 sibling!');
// }
// else if(numSiblings == 5){
//     console.log('5 sibling!');
// }
// else{
//     console.log('No siblings');
// };

let numSiblings = prompt('How many siblings do you have?');
// convert:
numSiblings = parseInt(numSiblings);
if(numSiblings === 1){
    console.log('1 sibling!');
}
else if(numSiblings === 2){
    console.log('2 sibling!');
}
else if(numSiblings === 3){
    console.log('3 sibling!');
}
else if(numSiblings === 4){
    console.log('4 sibling!');
}
else if(numSiblings === 5){
    console.log('5 sibling!');
}
else{
    console.log('No siblings');
};

// before convert, when I used '===', the input values was type string, and the output always was 'No siblings'.
// we should use the === operator and type conversion in this situation because if the user 