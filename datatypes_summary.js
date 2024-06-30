// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id);
console.log(anotherId);
console.log(anotherId == id);


const bigNunber = 13211213212212123213n



// Reference (Non-Primitive)

// Array, Objects, Functions

const heros = ['shaktiman', 'superman', 'naagraj']
let myObj = {
    name: "Dharmik",
    age : 23,
}

console.log(heros);
console.log(myObj);


const myFunction = function(name = ""){
    console.log("Hello", name);
}

console.log(typeof myFunction);
console.log(typeof bigNunber);
console.log(typeof myObj);
console.log(typeof heros);

myFunction("Dharmik")
myFunction()