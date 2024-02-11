/*
    
    Topics Discussed in this is file 

        1. for of loop
                The speciality of this loop is that we don't need to specify the start or the end of the loop
                can also be implemented in the string
        2. Maps
            ** declaration, One important functionalities is that the values inside the map are always unique.
            using the set keyword we can pass the key value pairs.
            And the order in which it is inserted that order is only maintained.
            ** Implement for of loop and extract the key value pair from the map created.
        3. Implemetation of the for of loop in the object --> conclusion will be that objects are not iteratable
            using the for of loop.
        4. 

 */



        // For of loop implementation -- we cannot use the let instead of const ( important learning) 

        let marvelHerores = ["ironman", "spiderman", "batman", "junior G", "Saktiman"];

        for ( const heroes of marvelHerores){
            console.log(heroes);
        }

        // for of variable can also be used the access the string values - It will print including the space.

        const greetings = "Hello World!";
        
        console.log("PRINTING THE STRING USING THE FOR OF VARIABLE :: ");

        for (let i of greetings)
        {
            console.log(i);
        }

        //  Creation of Map

        let randomMapVariable = new Map();

        randomMapVariable.set("IN", 'INDIA');
        randomMapVariable.set("PK", 'PAKISTAN');
        randomMapVariable.set("BA", 'BANGLADESH');
        randomMapVariable.set("SRI", 'SRI LANKA');
        randomMapVariable.set("BH", 'BHUTAN');

        console.log("The Map Variable -- ", randomMapVariable);

        // trying to use the for of method to access the map variable

        for(const mapAccess of randomMapVariable){
            console.log("Accessing Map using the for of Variable ", mapAccess);
        }

        /*
        using the above method we can access the value in form of pair. but,
        trying to access the key & values indiviually, we can destructure the values together.
        */

        for ( const [key, value ] of randomMapVariable){
            console.log(`The key is ${key} and the value is ${value}`);
        }


        // what will happen if I try to implement the for of loop on an object

        let sampleObject = {
            name : "sourav",
            age : 26,
            gender : "male"
        }

        /*
        for ( const [key, value] of sampleObject){
            console.log(` ${key} :- ${value}`)
        }
        */