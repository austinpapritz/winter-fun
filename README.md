## README

-   If first button is operator, ignore

-   If two operators in a row, replace with second

-   use isNaN() to sort out all non-numbers

-   NO MORE NUMSQUISH, just push a space to calcArr, everything else will squish.

## Pangram

State
alphabetArr = [a, b, c, d, e, f]

-   handleString(string) output a array of the characters of string -> stringArr
-   compare stringArr to alphabetArr
-   ## compareToAlphabetArr(item of stringArr)

alphabetArray = []

stringArr = []

//working through how to ultimate process a falsy
//side question: how to turn string into character array

function isPangram(string) {
let stringArr = string.split('');
stringArr.push(string)
const boolean = loopAlphabet()
if (!boolean) {
return false;
} else {
return true;
}

}

function loopAlphabet() {
for ( i = 0; i < alphabetArray.length - 1; i++) {
compareAlphabetAndString(i) {
}

function compareAlphabetAndString(i) {
for (j = 0; j < string.length - 1; j++
return string[j].match(alphabetArray[i]);
}

//PANGRAM
The quick brown fox jumps over the lazy dog.
