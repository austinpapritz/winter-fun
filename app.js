/* Imports */

/* Get DOM Elements */
const disFib = document.querySelector('#display-fib');
const disIter = document.querySelector('#display-iter');
/* State */

/* Events */

// if you understand the relationship between a number-series true VALUE and its INDEX value
// you can loop through the array and define the relationship according to [i]

//this function takes in n, where n is the argument on line 23
function generateFibonaccis(n) {
    //start of the array with 1,1 bc they are exceptions to the rule
    var fib = [1, 1];
    //start the loop on 3rd index (2), n is essentially how many numbers of fib we want (from line 23)
    for (var i = 2; i < n; i++) {
        // the formula is: take the index value (i) and add the value of i-2 and i-1
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    //return fib so it can be used to display it
    return fib;
}

var fib = generateFibonaccis(100);

//iterator is essentially an object for iterating a keyed array.
const iterator = fib.keys();
let iteratorArr = [];
for (let key of iterator) {
    //Pushing key of iterator to an empty array simply makes the value of each index its own index value. So [0] = 0.
    iteratorArr.push(key);
}
disIter.textContent = iteratorArr.join(', ');

//.join puts the value in the parenthesis in between each value of fib.
disFib.textContent = fib.join(', ');

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
