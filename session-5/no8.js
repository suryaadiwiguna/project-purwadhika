/*
Write a function that will combine 2 given array into one array
a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]
*/
function combineArray(array1, array2) {
    for (let i = 0; i < array2.length; i++) {
        array1.push(array2[i])
    }
    return array1
}

let inputArray1 = [1, 2, 3]
let inputArray2 = [4, 5, 6]
console.log(combineArray(inputArray1, inputArray2)) 