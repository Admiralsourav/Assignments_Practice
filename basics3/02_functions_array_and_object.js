/*

    1. function when we don't know the number of arguments we are gonna get?
    2. rest v/d spread operator
    3. what rest returns? --> The parameter it receives is converted into an array 
    4. function nameOfAFunction(num1, num2, ...variables) - demonstrate this in rest operator?
    5. passing object to a function. -- We can pass it direct or reference
    6. passing array to a function. -- We can pass it direct or reference
    
    */
   
   
   // 1. function when we don't know the number of arguments we are gonna get?
   
   function anyNumberOfArg(...nums){
       console.log("Rest Operator return an array -->",nums);
    }
    anyNumberOfArg(10, 20, 30, 40, 50);
    
    // 2. rest v/d spread operator -->  When the operators are receiving a value then it becomes rest operator and when we are expanding then it becomes spread operator. but the syntax looks the same.
    
    //4. function nameOfAFunction(num1, num2, ...variables) - demonstrate this in rest operator?
    
    function nameOfAFunction(num1, num2, ...variables){
        console.log("What is the value of ...variables? ", variables) // num1=10, num2=20 and the rest are getting stored in variables.
    }
    
    nameOfAFunction(10, 20, 30, 40, 50);
    
    //5. passing object to a function. -- We can pass it direct or reference
    
    let exampleObject = {
        userName : "Sourav",
    age : 25
}

function passingObjectToAFunction(anyObjectName){
    
    console.log(`The candidate name is ${anyObjectName.userName} and his age is ${anyObjectName.age}`);
}

passingObjectToAFunction(exampleObject); // passsing object reference
passingObjectToAFunction({
    name: "passingObjectDirectly",
    age: "justBorn"
}) //  passing object directly


//6. passing array to a function. -- We can pass it direct or reference

let exampleArray = [10, 20, 30]

function passingArrayToAFunction(anyArrayName){
    console.log("The second array element is ", anyArrayName[1]);
}
passingArrayToAFunction(exampleArray);
passingArrayToAFunction([40, 50, 60]);