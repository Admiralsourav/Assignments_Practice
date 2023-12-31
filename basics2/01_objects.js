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

