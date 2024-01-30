/*
    1. Implementation of the for each loop -- Implemention in 3 methods
            ## Passing call Function - for each loop takes call back function as a parameter. Remember that the call function don't need to have a name

            ## passing the arrow function - implementation of the for each loop we can also pass the arrow function. The arrow function 
                does not only have the access for the item. It has the access for 
                    1. item 2.index 3. array access

            ## Passing the function refererence - implementation by passing a function and then implement the for each function. Actually the for each loop takes the
                function as the parameter. That means we can just pass the reference of the function and then it will also
                print the values

    2. Implementation of array of objects using the for each loop.
        ## accessing the value inside the array of objects.     

*/

// 1. Implementation of the for each loop -- Implemention in 3 methods

// METHOD 1 - passing a unnamed funcion inside a for each loop

const languages = ["java", "python", "C++", "C"]

languages.forEach(function(val){
    console.log(val);
})


// METHOD 2 - Passing an arrow function - it has the item, index and entire Array

console.log("METHOD 2 ------------------------")

languages.forEach((item, index, arr) => console.log(item, index, arr));


// METHOD 3 - passing a function Reference:

console.log("METHOD 3 ------------------------")

function reff(item){
    console.log(item);
}
languages.forEach(reff);


// 2. Implementation of array of objects using the for each loop. And accessing the value for array of objects:

console.log("Accessing the Array of Objects --------------------")
const arrOfObj = [
    {
        name : "Sourav",
        age : 25
    },
    {
        name : "Gourav",
        age : 45
    },
    {
        name : "Tourav",
        age : 5
    },
    {
        name : "Pourav",
        age : 78
    },
]

arrOfObj.forEach((item) => console.log(item.name));