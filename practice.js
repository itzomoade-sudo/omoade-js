/* 
console.log("enter your age");
const age = 18;
age >= 18 ? console.log("you are old enough to drink") : console.log("you are still a minor")


// testing another way to take input from user

const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter your age: ", function(age) {
    age >= 18 ? console.log("You are old enough to drink.") : console.log("You are still a minor.");
    r1.close();
});
*/

const prompt = require("prompt-sync")();

const age = Number(prompt("enter your age "));

age >= 18 ? console.log("you are old enough ") : console.log("you are still a minor")
