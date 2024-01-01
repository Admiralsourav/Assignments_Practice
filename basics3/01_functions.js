/*


Function Declaration--
function sayMyName(){

}

sayMyName --> is function reference  --> iska matlab hota hai ki woh function woha rehta hai
sayMyName --> is function execution

Both of them are different.
1. Take user name and print user just logged in.
2. Don't pass a user name and tackle the situation.
3. give a default value to a variable and override it.


** Empty string ("") or undefined is treated as false value.

*/



function sayMyName(name){

    if (!name){
        console.log("Please enter your user name ?")
        return // We can also do an empty return so that the code below doesn't gets executed.
    }
        console.log(`${name} has logged in`);
}

sayMyName("User Name passed : ","Sourav Kumar Rajak");
sayMyName(); // User Name not passed

// passing a default name from our end
function sayMyName2(name = "defaultName"){
        console.log(`${name} has logged in`);
}

sayMyName2(); // Passing no value but have a default value