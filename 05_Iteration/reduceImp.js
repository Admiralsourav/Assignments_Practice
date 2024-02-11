/*
    You can call reduce as an alternative to for each loop. For an practical example we can say that the -In
    shopping cart the amount of bill accounted can used using the reduce functionalities
    

    intialValue --->  is the value that is passed in the accumulator. The accumulator take the initial value for the first time only.

    current value will take the value from the array one by one. and then that is added to the accumulator one by one.

*/

const nums = [1,2,3];

const intialValue = 0;

// const sumOfNums = nums.reduce(function (acc, currVal){
//         console.log(`Acc : ${acc} & CurrVal : ${currVal}`);
//         return acc + currVal
// }, intialValue);

const sumOfNums = nums.reduce((acc, currval)=> acc + currval, 0);

console.log(` The sum of number is ${sumOfNums}`)


// ---------------------- SHOPPING CART EXAMPLE ---------------------------

const shoppingCart = [
    {name : "React", price : 999},
    {name : "Mobile development", price : 5999},
    {name : "Python", price : 2999},
    {name : "C++", price : 1999},
]

const shoppingCartTotal = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(`The value of the shopping Cart ${shoppingCartTotal}`)