/*
There are two ways to declare an object

1. singleton method.
2. Litteral method.
*/


let objectLiterals = {
    name : "Sourav Kumar Rajak",
    age : 25,
}

objectLiterals.greetings = function(){
    console.log("Hello JS User");
}

console.log("Calling Without () :",objectLiterals.greetings);
console.log("Calling With function Symbol :",objectLiterals.greetings());

//getting additional undefined in the output ---> What is the reason?

