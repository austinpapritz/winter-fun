/* Imports */

/* Get DOM Elements */
const disFib = document.querySelector('#display-fib');
const disIter = document.querySelector('#display-iter');
const pangramForm = document.querySelector('#pangram');
const pangramResult = document.querySelector('#result');

/* State */

let stringArray = [];
const alphabetArray = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
];

/* Events */
//PANGRAM

pangramForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let confirmedLetters = [];

    const data = new FormData(pangramForm);
    const stringData = data.get('string');
    //put letters to lowercase with string.toLowerCase()
    const string = stringData.toLowerCase();
    stringArray = string.split('');

    const result = loopAlphabetArray();

    displayResults(result);

    pangramForm.reset();
});

function loopAlphabetArray() {
    for (let i = 0; i < alphabetArray.length; i++) {
        let result = compareLetterToString(alphabetArray[i]);
        if (result === true) {
            return true;
        }
    }
}
function compareLetterToString(l) {
    //falsyCounter

    for (let j = 0; j < stringArray.length; j++) {
        if (stringArray[j] === l) {
            //push l to confirmedLettersArray
            return true;
        }
    }
}

function displayResults(result) {
    if (result === true) {
        pangramResult.textContent = '✔️';
    } else {
        pangramResult.textContent = '❌';
    }
}

//if true span.textContent = checkmark, otherwise X

// if you understand the relationship between a number-series true VALUE and its INDEX value
// you can loop through the array and define the relationship according to [i]
// generateFibonaccis()
// this function takes in n, where n is the argument put in on the function call
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

// tabs experiment

const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

//DEAD COMBO: click event listener (e)
//set data-id in html
//const id = e.target.dataset.id;
//const element = document.getElementById(id);
//element.classList.add('x');

about.addEventListener('click', (e) => {
    //dynamically grab ids to dynamically grab DOM elements
    const id = e.target.dataset.id;
    if (id) {
        //remove active from other buttons
        btns.forEach(function (btn) {
            btn.classList.remove('active');
            e.target.classList.add('active');
        });
        //hide other articles
        articles.forEach(function (article) {
            article.classList.remove('active');
        });
        //dynamically add elements to DOM
        const element = document.getElementById(id);
        //add class active to the element clicked
        element.classList.add('active');
    }
});

//slideshow
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener('click', () => {
    counter++;
    carousel();
});

prevBtn.addEventListener('click', () => {
    counter--;
    carousel();
});

function carousel() {
    // // working with slides
    // if (counter === slides.length) {
    //     counter = 0;
    // }

    // if (counter < 0) {
    //     counter = slides.length - 1;
    // }

    //working with button
    if (counter < slides.length - 1) {
        nextBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'none';
    }

    if (counter > 0) {
        prevBtn.style.display = 'block';
    } else {
        prevBtn.style.display = 'none';
    }

    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

prevBtn.style.display = 'none';

//random color generator

const colorBtn = document.getElementById('color-btn');
const colorCont = document.querySelector('.color-container');
const colorSpan = document.querySelector('.color-span');

colorBtn.addEventListener('click', () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    colorSpan.textContent = `rgb(${r}, ${g}, ${b})`;
    colorCont.style.background = `rgb(${r}, ${g}, ${b})`;

    //convert to hex
    let hex = rgbToHex(r, g, b);
    console.log('hex', hex);
});

function valueToHex(c) {
    //BUGGED: if output starts with 0, the 0 gets dropped
    var hex = c.toString(16);
    return hex;
}

function rgbToHex(r, g, b) {
    //
    const value = valueToHex(r) + valueToHex(g) + valueToHex(b);
    return value;
}
