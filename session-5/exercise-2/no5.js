/*
Write a function to find the difference in 2 given array
a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]
*/

let arrInput1 = [1, 2, 3, 4, 5];
let arrInput2 = [3, 4, 5, 6, 7];

function findDiff(array1, array2) {
    let arr1Diff = array1.filter(x => !array2.includes(x));
    let arr2Diff = array2.filter(x => !array1.includes(x));
    return arr1Diff.concat(arr2Diff);
}

function findDiffLoop(array1, array2) {

}

console.log(findDiff(arrInput1, arrInput2));