/*
    this reffers to the current context. Context means the range of scope.

    1. where the context changes?
    2. what happen when this is called inside the node environment v/s they are called inside the browser
    3. what if the this key is called inside a function?
    4. arrow function explict return? try to return object using explicit return



    ## when a variable is declared inside the function and when the variable is accessed using the this keyword then
        it will throw undefined unlike what happens inside the object. Inside object this keyword can be used to access
        a variable and it will return a value.

    


*/

const user = { // context for this starts from here 
    username : "sourav",
    price: 999,
    
    welcomeMessage : function welcome(){
        console.log(`${this.username}, welcome to the homescreen`);
    }
} // context for this ends here

user.welcomeMessage();
user.username = "shibodeep"; // context content changed here that the user name has been update with name shibodeep
user.welcomeMessage();


// now this question is what will happen if we do this outside of the any context

console.log("this outside of everything ", this); // it will come as {} because we are inside the node environment whereas if we do
// this inside the browser then the current context inside browser reffers to WINDOWS


// this keyword in accessing variable inside a function throws an error

function  callMyName () {
    let username = "sourav";
    console.log(this.username); // output will be undefined, interesting just using the username without the let declaration causes adding the variable in this context
    console.log(this); // using this will return hell lot of values
}

callMyName();

// Declaring function in a different way

const callMyName2 = function () {
    let username = "sourav";
    console.log(this.username); // still undefined
    console.log(this); // hell lot of values
}

callMyName2();


// function declaration method 3 --- declaring arrow functions

/*
    from this we can get to know that why we don't use this keyword inside an arrow keyword.
*/

const callMyName3 = () => {
    let username = "sourav";
    console.log(this.username); // still undefined
    console.log(this); // return {} empty object 
}

callMyName3();


// arrow function explict return? try to return object using explicit return

let arrowMethod1 = (num1, num2) => {
    return num1 + num2
}

console.log(arrowMethod1(2,3));


// method 2
let arrowMethod2 = (num1, num2) => num1 + num2;
console.log(arrowMethod2(2,3));

//method 3
let arrowMethod3 = (num1, num2) => (num1 + num2)// standard method uses () when returning explicitly
console.log(arrowMethod3(2,3));


//method 4
let arrowMethod4 = (num1, num2) => ({name : "sourav"})// standard method uses () when returning explicitly, otherwise objects won't be returned explicitly and will throw an undefine
console.log(arrowMethod4(2,3));