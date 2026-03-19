// Immediately Invoked Function Expressions (IIFE)
// Global Scope ke pollution se problem hoti hai kai baar toh uss global scope ke jo variable hai yaa jo bhi vaha declaration hai uske pollution ko hatane ke liye humne IIFE ka use kiya

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('rohan')

