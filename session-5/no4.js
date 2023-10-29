/*
Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
of the same length.
a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
*/
function sumOfArray(array1, array2) {
    let result = []
    if (array1.length == array2.length) {
        for (let i = 0; i < array1.length; i++) {
            result.push(array1[i] + array2[i])
        } return result;
    } else {
        return "The length of both array must be equal"
    }
}

let inputArray1 = [1, 2, 3]
let inputArray2 = [3, 2, 1]

console.log(sumOfArray(inputArray1, inputArray2));