/*
Write a function that adds an element to the end of an array. However, the element should only be added if it is
not already in the array.
a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
*/
function addNewElementToArray(array, newElement) {

    for (let index = 0; index < array.length; index++) {
        if (array[index] == newElement) {
            return array;
        }
    } array.push(newElement);
    return array;
}

let inputArray = [1, 2, 3, 4]
let inputNewElement = 1

console.log(addNewElementToArray(inputArray, inputNewElement))