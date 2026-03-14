// Primitive 

// 7 tpyes : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsidetemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 1234567890123456789012345678901234567890n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj ={
    name: "Rohan",
    age: 20
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);


// *************************************************

// Stack (Primitive), Heap (Non-primitive)

let myYouTubename = "rohanyadavdotcom"

let anothername = myYouTubename
anothername = "ronny"

console.log(myYouTubename);
console.log(anothername);

let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "rohan@google.com"

console.log(userOne.email);
console.log(userTwo.email);

