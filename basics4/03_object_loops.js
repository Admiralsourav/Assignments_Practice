/**
 *  Here in this file we will see that how the object are be iterated.
 * 
 *   1. The for in loop can be used to access the objects.
 *   2. Implement the for in loop to extract the values of both key and values from and object.
 *   3. implement the for in loop in arrays
 *          The Object was created because in arrays the keys are generally defined and case of
 *          object we can define the keys
 *   4. The "for in" loop cannot be iterated on the Maps -- It won't show any error. But it is not iteratable
 *      but we have seen that using the for of loop to access the values inside the Maps.
 * 
 * **/


/*
    1. when trying to access the loop using the for of loop to access the object. But In order to access the object using the for in
            loop can be used. 

    2. for in loop can also be used to access the array. 
*/

/*  accessing object using the for in loop. It is not the same for the "for of" loop. Because for of loop 
    throws an error. While trying to traverse through the object.
*/  


let sampleObject = {
    name : "sourav",
    age : 26,
    gender : "male"
}

console.log(`Accessing the key Value Pair :: `);

for ( let key in sampleObject){
    console.log(`${key} :: ${sampleObject[key]}`);
}

// for in loop trying to be used in an array.

 const programming = ["java", "phython", "C++", "C", "C#", "Javascript"];

 for (let key in programming){
   // console.log(`The keys in the variable ${key}`);// This will return the keys
    console.log(`Accessing the of an array using the for in loop :: index ${key} -- ${programming[key]}`);
 }




 console.log("The beelow output will show the error -- as we are trying to implement the for in method in the map");

 const forInMap = new Map();

 forInMap.set("IN", "INDIA");
 forInMap.set("BK", "Bangladesh" );
 forInMap.set("I", "IND");

 for ( let mapValue in forInMap){
    console.log(`Value in for in Map -- ${mapValue}`);
 }

 /*
 This is happening because it is happening as the Maps are not Iteratable

 But surprising we have seen that the map values can be accessed using the for of method.
 */