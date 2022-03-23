"use strict";
//////////////////////////////////////////////      1 tellFortune
let job="software engineer";
let locat="Jordan";
let fname="Alice";
let num=3;

function tellFortune(num,fname,locat,job)
{
   
 return "You will be "+ job + "in " + locat + ", and married to " + fname + " and have " + num + " kids";
} 
console.log("'software engineer', 'Jordan', 'Alice', 3");
console.log("You will be "+ job + "in " + locat + ", and married to " + fname + " and have " + num + " kids");
console.log('\n');

//////////////////////////////////////////////      2

// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion
// rate of 1 human year to 7 dog years.
// outputs the result to the screen like so:
// "Your doggie is NN years old in dog years!"

// Ex: calculateDogAge(1);
// => "Your doggie is 7 years old in dog years!"

let x=1;
function calculateDogAge (x)
{    let dogage = x * 7 ; 
    return "Your doggie is " + dogage + " years old in dog years!";
}
console.log("Your doggie is " + dogage + " years old in dog years!");
console.log('\n');

//////////////////////////////////////////////      3
function calculateSupply (x , y)
{
    let food_cons = 0 ; 
    do
    {
        x++; 
        food_cons = food_cons + y*365;

    }
    while (x < 100);
    
    return food_cons;
        
    
}


//////////////////////////////////////////////      4

function greet (x)
{
    return "Hello " + x;
}