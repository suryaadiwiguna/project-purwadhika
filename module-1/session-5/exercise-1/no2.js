/*
Write a function that takes an array of words and returns a string by concatenating the words in the array,
separated by commas and - the last word - by an 'and'.
a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
*/

function arrayToString(array) {
    let result = "";
    let index = 0;
    while (index < array.length) {
        result += array[index] + ", "
        index++
    }
    return result += "and " + array[index - 1];
}

let arrayInput = ["Apple", "Banana", "Cherry", "Date", "Lemon"]
console.log(arrayToString(arrayInput));