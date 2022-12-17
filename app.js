/* Imports */

/* Get DOM Elements */
const disFib = document.querySelector('#display-fib');
const disIter = document.querySelector('#display-iter');

//calculator DOM
const calcDisplay = document.querySelector('#result');
const clearBtn = document.querySelector('#clear-btn');
const calculateBtn = document.querySelector('#equal-btn');

/* State */

/* Events */

// if you understand the relationship between a number-series true VALUE and its INDEX value
// you can loop through the array and define the relationship according to [i]

//generateFibonaccis()
//this function takes in n, where n is the argument put in on the functioncall
function generateFibonaccis(n) {
    //start of the array with 1,1 bc they are exceptions to the rule
    var fib = [1, 1];
    //start the loop on 3rd index (2), n is essentially how many numbers of fib we call
    for (var i = 2; i < n; i++) {
        // the formula is: take the index value (i) and add the value of i-2 and i-1
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    //return the fib array so it can be used to display it
    return fib;
}
//do the first 100 digits of the fib sequence, set this to the var fib
var fib = generateFibonaccis(15);
//.join inserts whatever you put in the parenthesis IN BETWEEN each value of fib.
disFib.textContent = fib.join(', ');

//.keys()
//iterator is essentially an object for iterating an array undergone the .keys() method
const iterator = fib.keys();
//iterator itself is not an arr, so lets start an empty array for it
let iteratorArr = [];
//we have to loop through iterator to extract the key values
for (let key of iterator) {
    //Pushing key of iterator to an empty array simply makes the value of each index its own index value. So [0] = 0.
    iteratorArr.push(key);
}
//display the array by joining each value separated by a comma and space
disIter.textContent = iteratorArr.join(', ');

//functional calculator
//clearScreen(), displayCalc(), calculate(), handleInput()
//inputHandler() takes input values of btn presses and stores in calcArr
//calcArr to store inputs, dipslayCalc() displays last item in arr to calcDisplay
//calculate() will return results to be displayed on press of =
//
