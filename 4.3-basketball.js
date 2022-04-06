// let johnTeamScored = 89 + 120 + 103;
// let mikeTeamScored = 116 + 94 + 123;
let johnTeamScored = 999 + 888 + 777;
let mikeTeamScored = 1 + 2 + 3;


let averageJohnTeamScored = johnTeamScored / 3;
let averageMikeTeamScored = mikeTeamScored / 3;

if(averageJohnTeamScored > averageMikeTeamScored){
    console.log(`The winning team is: John's team! And its average score is: ${averageJohnTeamScored}`);
}
else if(averageJohnTeamScored < averageMikeTeamScored){
    console.log(`The winning team is: Mike's team! And its average score is: ${averageMikeTeamScored}`);
}else{
    console.log(`There was a draw`);
};