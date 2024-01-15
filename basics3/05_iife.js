/*

    IIFE - Immediately Invoked Function Execution

    ()()
    () --> First Parenthsis contains the function execution code.  It also helps in Global scope pollution.
                That means that the value needs not to be disturbed by the scope.
    () --> Represents the execution part of the code.

    ## When two IIFE's are used remember that the ; needs to be added at the end of first IIFE
        because IIFE doesn't know where to end the function execution


    1. Implement the named IIFE and unnamed IIFE in the same file.
    */
    
    //1. Implement the named IIFE and unnamed IIFE in the same file and also show how to pass parameter.


( function namedIIFE(){
    console.log(`Name IIFE expression`)
})();

((name)=>{
    console.log(`Unnamed IIFE Expression with name as ---> ${name}`)
})(`My Name is IIFE`);








