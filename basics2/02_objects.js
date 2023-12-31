/*
1. object nesting and accesing nesting object
2. Optional chaining method - If the object key is not accessible
    Optional chaining ? -- using the ? such that the if the keyword is having any issue we are acessing any
    API and there is an issue with the Key of the object will cause the issue.
3. Combining Object Multiple methods
    a. { obj1,  obj2 }
    b. Object.assign(source,  target)
    c. using spread object
    d. accessing the array of objects
        i. using loops
        ii. using array indexing
*/

// object nesting and accesing nesting object & Option Nesting

const userDetails = {
    details : "Address",
    address : {
        fullName: {
            fullFullAddress : "Gopalpur Uttrayan"
        }
    }
}

console.log("USER DETAILS OBTAINING USING NESTING ", userDetails.address.fullName.fullFullAddress); //object nesting
console.log("USER DETAILS OBTAINING USING OPTION NESTING ", userDetails.address.fullName?.fullFullAddress); //object nesting


// Combining Object

let obj1 = {
    1 : "a",
    2 : "b"
}

let obj2 = {
    1 : "a",
    2 : "b"
}

//  METHOD 1 - Having Issues
let objectNestingUsingBraces = { obj1, obj2}; // It is same as the array of array, but it returns the object of objects.
console.log("METHOD 1 - USING {} --> ", objectNestingUsingBraces);

// METHOD 2 - Object.assign(source, target) --> The target value get merged in source & the value in source is changed.

// let objectCombiningUsingAssign = Object.assign(obj1, obj1);
// console.log("USING OBJECT ASSIGN ",objectCombiningUsingAssign)
// console.log("SOURCE IS CHANGED", objectCombiningUsingAssign === obj1); // TRUE

let objectCombiningUsingAssignProductionMethod =  Object.assign({}, obj1, obj2); 
//using this production method, obj1 is not changed like in the previous method
console.log("USING OBJECT ASSIGN PRODUCTION METHOD",objectCombiningUsingAssignProductionMethod)
console.log("SOURCE IS CHANGED", objectCombiningUsingAssignProductionMethod === obj1); // FALSE


// METHOD 3 - USING SPREAD OPERATOR

let objectCombiningUsingSpread = {...obj1, ...obj2};
console.log("USING OBJECT COMBINING USING SPREAD OPERATOR ",objectCombiningUsingSpread );


// ACCESING ARRAY OF OBJECT

const arrayOfObject = [
    {
        1 : "a",
        2 : "b"
    },
    {
        3 : "c",
        4 : "d"
    },
    {
        5 : "e",
        6 : "f"
    },
];

console.log("ACCESING ARRAY OF OBJECTS ", arrayOfObject[0]["1"]); // accesing the value in the Array of object.