/*
1. difference between let, const & var
2. Checking variable scope inside fuction inside function. And the case is same with if chaining.
3. function declaration hoisting Issue ( they way we declare a function decides the hoisting functionalities )
*/


{
    let num1 = 10;
    const num2 = 20;
var num3 = 30;
} // scope ends here


// console.log("let", num1); Error - Scope Issue
// console.log("const", num2); Error - scope Issue
console.log("var", num3); //  Var having issue - that it doesn't respect the scope principle causing major issue in programming

//2. Checking variable scope inside fuction inside function. And the case is same with if chaining.

/*
The concept here becomes like the child can ask chocolate from his father but the father asking the chocolate from the child
will be not acceptable. Same we funTwo can get values from funOne. But funOne asking the values from the funTwo is not acceptable
*/

function funOne(){
    let varOne = "First";
    
    function funTwo(){
        let varTwo = "Second";
        console.log(`getting value from funOne -->  ${varOne}`); // It will work fine as its getting chocolate from his father.
    }
    
    // console.log(`trying to access the value from the funTwo ${varTwo}`); -- ERROR Because it is not acceptable.

    funTwo();
}

funOne();

// 3. function declaration hoisting Issue ( they way we declare a function decides the hoisting functionalities )


// Method 1 when the function initialization can happen even before the declartion and intialization of a function

intializationBeforeDeclaration()

function intializationBeforeDeclaration (){
    console.log("Method 1 where the initialization can happen even before declaration. Even though the execution happens in javascript in form of execution context ");
}


// Method 2 - declaration of a function as assigning to a variable. But here the intialization can only happen after declaration.

// intializationAfterDeclaration() -- ERROR the error happened because the in variable declaration function cannot be intialized before declaration.

const intializationAfterDeclaration = () =>{
    console.log("In method 2 the intialization can only happen after declation and defination ");
}

intializationAfterDeclaration();