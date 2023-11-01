/*
Write a function to find the difference in 2 given array
a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]
*/

let arrInput1 = [1, 2, 3, 4, 5];
let arrInput2 = [3, 4, 5, 6, 7, 8];

console.log(findDiffWithMethod(arrInput1, arrInput2));
console.log(findDiffLoop(arrInput1, arrInput2));

function findDiffWithMethod(array1, array2) {
    let arr1Diff = array1.filter(x => !array2.includes(x));
    let arr2Diff = array2.filter(x => !array1.includes(x));
    return arr1Diff.concat(arr2Diff);
}

function findDiffLoop(array1, array2) {
    let compareArr1ToArr2 = [];
    let compareArr2ToArr1 = [];
    //Compare Array 1 With Array 2, find the different element;
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            var hasDuplicate = undefined;
            if (array1[i] == array2[j]) {
                var hasDuplicate = true;
                break;
            }
        } if (!hasDuplicate) {
            for (let k = 0; k < compareArr1ToArr2.length; k++) {
                if (array1[i] == compareArr1ToArr2[k]) {
                    break;
                }
            } compareArr1ToArr2.push(array1[i]);
            console.log(compareArr1ToArr2)
        }
    }
    //Compare Array 2 With Array 1, find the different element;
    for (let i = 0; i < array2.length; i++) {
        for (let j = 0; j < array1.length; j++) {
            var hasDuplicate = undefined;
            if (array2[i] == array1[j]) {
                var hasDuplicate = true;
                break;
            }
        } if (!hasDuplicate) {
            for (let k = 0; k < compareArr2ToArr1.length; k++) {
                if (array2[i] == compareArr2ToArr1[k]) {
                    break;
                }
            } compareArr2ToArr1.push(array2[i]);
            console.log(compareArr2ToArr1)
        }
    }
    //Combine and return
    return compareArr1ToArr2.concat(compareArr2ToArr1);
}

