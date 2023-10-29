/*
Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
array can only contain 5 elements).
a. Example :
maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
The function will return [5, 10, 24, 3, 6]
*/

function insertIntToArray(maxSize, ...integer) {
    let array = []
    for (let i = 0; i < maxSize; i++) {
        array.push(integer[i])
    } return array
}

console.log(insertIntToArray(6, 1, 2, 3, 4, 5, 6, 7))