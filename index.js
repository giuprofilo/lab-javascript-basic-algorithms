// Iteration 1: Names and Input

let hacker1 = "Rei do Kuduairo"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Ednaldo Pereira"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

const driverLen = hacker1.length
const navigatorLen = hacker2.length

if (driverLen > navigatorLen) {
  console.log(`The driver has the longest name, it has ${driverLen} characters.`)
}

else if (driverLen === navigatorLen) {
  console.log(`Wow, you both have equally long names, ${driverLen} characters!`)
}

else {
  console.log(`It seems that the navigator has the longest name, it has ${navigatorLen} characters.`)
}

// Iteration 3: Loops
// 1- Print the characters of the driver's name, separated by space, and in capital letters

let upperSplit1 = hacker1.toUpperCase().split("").join(" ");
console.log(upperSplit1);

let upperSplit2 = hacker2.toUpperCase().split("").join(" ");
console.log(upperSplit2);

// 2- Print all the characters of the navigator's name, in reverse order

let reverseName1 = hacker1.split("").reverse().join("");
let reverseName2 = hacker2.split("").reverse().join("");

console.log(reverseName1, reverseName2);

/* 3- Depending on the lexicographic order of the strings, print:
The driver's name goes first.
Yo, the navigator goes first definitely.
What?! You both have the same name? */

const lexOrder1 = hacker1.split(" ").sort().join(" ");
const lexOrder2 = hacker2.split(" ").sort().join(" ");

if (lexOrder1 < lexOrder2) {
    console.log("The driver's name goes first");
}

else if (lexOrder1 === lexOrder2) {
    console.log("What?! You both have the same name?");
}

else {
    console.log("Yo, the navigator goes first definitely.");
}
