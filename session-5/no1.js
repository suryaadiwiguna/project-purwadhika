/*
Write a function to get the lowest, highest and average value in the array (with and without sort function).
a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
*/

function findMaxMinAvr(arr) {
    let min = arr[arr.length - 1];
    let max = arr[arr.length - 1];
    let avr = 0;
    // console.log(min, max, avr)
    for (let i = arr.length - 1; i >= 0; i--) {
        avr += arr[i] / arr.length
        //console.log(avr)
        if (arr[i] <= min) {
            min = arr[i]
            // console.log(min)
        } else if (arr[i] >= max) {
            max = arr[i]
        }
    }
    return (`min = ${min}, max = ${max}, avr = ${avr}`)
}

function bySortMethod(arr) {
    arr.sort(function (a, b) { return a - b })
    let min = arr[0];
    let max = arr[arr.length - 1]
    let avr = 0;
    for (let i = 0; i < arr.length; i++) {
        avr += arr[i] / arr.length;
    } return (`min = ${min}, max = ${max}, avr = ${avr}`)
}


let arrayInput = [2, 12, 5, 23, 18, 4, 45, 32]
console.log(findMaxMinAvr(arrayInput));
console.log(bySortMethod(arrayInput))
//console.log(`min = ${min}, max = ${max}, avr = ${avr}`)
