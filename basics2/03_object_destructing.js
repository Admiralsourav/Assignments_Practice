/*
1. object destructuring - {} are used in destructing.
2. object destructuring with a name from our end.
3. JSON ( Javascript Object Notation ) - It is also an object but 
the keys and value pairs are in form of a string and they are mentioned inside quotation
4. When we get an API then its not necessary that we will get an object. Sometimes we will get an array of objects 
*/

// object destructuring - {} are used in destructing.

let userDetails = {
    courseName : "Javascript for better life",
    courseInstructor : "Hitesh Choudary",
    courseFee : 2000
}

let {courseInstructor} = userDetails; // getting the exact value from the object
console.log("M1 destructuring", courseInstructor)

// object destructuring with a name from our end.
let {courseInstructor: instructor} = userDetails; // getting the exact value from the object and renaming the variable
console.log("M2 destructuring", instructor);


/*

===> json Object both keys and values pairs are string

{
    "name" : "Sourav",
    "age" : "25"
}


==>  The API data that we get are generally in form of array of object.
The online tools like JSFormatter online can be used to understand the contents of the array of object.

[
    {},
    {},
    {}
]
*/



