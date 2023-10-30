/*
Write a function to find the difference in 2 given array
a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]
*/

let arrInput1 = [1, 2, 3, 4, 5];
let arrInput2 = [3, 4, 5, 6, 7];

function findDiff(array1, array2) {
    let combinedArray = array1.concat(array2);
    return [...new Set(combinedArray)];
}

console.log(findDiff(arrInput1, arrInput2));