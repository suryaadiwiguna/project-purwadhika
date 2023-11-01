/*
Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
a. Example : numbers = [1, 2, 3, 4, 5, 6] → [2, 4, 6]
*/

let numberSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 17, 200, 233, 4435, 123124, 24345, 356534]
function removeOddNumber(numberSet) {
    for (let i = 0; i <= numberSet.length; i++) {
        if (numberSet[i] % 2 !== 0) {
            numberSet.splice([i], 1);
        }
    }
    return numberSet;
}

console.log(removeOddNumber(numberSet));