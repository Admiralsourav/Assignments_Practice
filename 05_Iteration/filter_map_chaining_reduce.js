/*

    --- FOR EACH METHOD --------
        
        The for each method doesn't returns any value own its own.

        But thet

*/


const coding = ["js", "ruby", "java", "phython", "cpp"];

 const forEachReturn = coding.forEach((data)=>{
   // console.log(data);
    return data; // Even though we return a data that will not get returned and value of the variable forEachReturn will be undefined.
})

console.log("for Each return value -->", forEachReturn);

// There is an anoher way to do the return in the javascript is via using the pushing the value in an array.

let forEachDataCatcher = [];

let numbers = [1,2,3,4,5,6,7,78];

numbers.forEach((nums)=>{
    if (nums > 5)
    forEachDataCatcher.push(nums)
})

console.log('For each return alternative', forEachDataCatcher);


/*--------------- FILTER METHOD ---------------------------

    It is not like for each method and the filter method return value automatically.

*/

let numbers1 = [1,2,3,4,5,6,7,78];

let filterMethodUsage = numbers1.filter((num)=>num>5);

let filterMethodUsageCurlyBraces = numbers1.filter(nums => {
    return nums>6
})// if we are using the curly braces then its become necessary to use the return statement.

console.log('Filter method rerturn--->', filterMethodUsage);
console.log('filterMethodUsageCurlyBraces method rerturn--->', filterMethodUsageCurlyBraces);


// implementing various filter method on the books
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBookGenreHistory = books.filter((bk)=>bk.genre==='History');
  console.log('book genre history', userBookGenreHistory);

  const userBookPublish = books.filter((bk)=>{
            return bk.publish > 2000;
  })// as curly braces are there so the return keyword is necessary.

  console.log('User Book Published --->', userBookPublish);


  /*
            -------------------------- MAPS -----------------------

            Maps can be called as the better alternative for the for each loop and the best part is that the
            Maps will return the value to the variable.

            "One more point to remember is that both the maps and the filter method will return an array"
  
  */


            const myNumbers = [1,2,3,4,5,6,7,8,9,10];

            const newNumbers =  myNumbers.map((nums)=> nums + 10);
            console.log('Implementing the Map Method', newNumbers);

// -------------------------------METHOD CHAINING----------------------

  const methodChaining = myNumbers
                                .map((num) => num * 10)
                                .map( (num) => num + 1)
                                .filter(num => num>40);
        
  console.log("Method Chaining Method ---------->", methodChaining); // Method chaining is implemented one after the another left -> right