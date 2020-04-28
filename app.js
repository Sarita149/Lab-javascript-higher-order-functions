//### Function #1: Array Slice
const modifiedFood = ["pizza", " burger", "fingerChips", "donuts", "springRoll"];
let newarr = modifiedFood.slice(1, 4);
console.log(newarr);
//o/p will be:-[ ' burger', 'fingerChips', 'donuts' ]

//### Function #2: Array Splice
modifiedFood.splice(2, 0, "noodles", "icecream")
console.log(modifiedFood);
//o/p will be:-['pizza',' burger','noodles','icecream','fingerChips','donuts','springRoll']

//### Function #3: Filter(NOT DONE)
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
function isEven(numberArray) {
    let evennum = numberArray.filter(function (num) {
        return num % 2 === 0;
    }); console.log(evennum);
}
isEven(numberArray)
//o/p will be:-[ 12, 324, 4, 2, 4234 ]

// filter all prime number from an array
function isPrime(numberArray) {
    let Primnum = numberArray.filter(function (num) {
        return num % 2 === 0;
    }); console.log(Primnum);
}
isPrime(numberArray)

//### Function #5: Lambda
let isEven = (numberArray) => {
    let evennum = numberArray.filter(function (num) {
        return num % 2 === 0;
    }); console.log(evennum);
}
isEven(numberArray)
//o/p will be:-[ 12, 324, 4, 2, 4234 ]

// ### Function #6: Map
const myArray = [11, 34, 20, 5, 53, 16];
var res;
function findSquareOfNumbers(myArray) {
    res = myArray.map(function (square) {
        return square * square;
    });
    console.log(res);
}
findSquareOfNumbers(myArray)
// //o/p will be:-[ 121, 1156, 400, 25, 2809, 256 ]

// //### Function #7: Reduce
const myArray = [2, 3, 5, 10];
function multiply(myArray) {
    let multiplication = myArray.reduce(function (initial, item) {
        return initial * item;
    }, 1);
    console.log(multiplication);
}
multiply(myArray)
// //o/p will be:-300
