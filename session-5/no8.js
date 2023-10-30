/*
Write a function that will combine 2 given array into one array
a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]
*/
let inputArray1 = [1, 2, 3, 9];
let inputArray2 = [4, 5, 6];

console.log("With for looping", combineArray(inputArray1, inputArray2));
console.log("With concat method ", usingConcatMethod(inputArray1, inputArray2));

function combineArray(array1, array2) {
    let newArray = [...array1];
    for (let i = 0; i < array2.length; i++) {
        newArray.push(array2[i])
    }
    return newArray;
}

function usingConcatMethod(data1, data2) {
    //console.log(data1);
    let combinedArray = data1.concat(data2);
    return combinedArray;
}




