const name = "Rohan"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('rohan-ry-com')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

// Trim
const newStringOne = "  Rohan  "
console.log(newStringOne);
console.log(newStringOne.trim());

// Replace
const url = "https://rohan.com/rohan%20yadav"

console.log(url.replace('%20','-'))

console.log(url.includes('ronny'))

console.log(gameName.split('-'));