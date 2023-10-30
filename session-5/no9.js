/* Write a function to find duplicate values in an array
a.Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] →[2, 3, 5] */

function removeDuplicateManual(array) {
    let sortedInput = array.sort((a, b) => a - b)
    let arrayOutput = [];
    for (let i = 0; i < array.length; i++) {
        if (sortedInput[i] !== sortedInput[i + 1]) {
            arrayOutput.push(array[i]);
        }
    } return arrayOutput;
}

function setsMethod(data) {
    return [...new Set(data)];
}

let arrayInput = [1, 2, 2, 60, 2, 3, 66, 3, 4, 5, 5, 6];
console.log("manual", removeDuplicateManual(arrayInput));
console.log("using sets method", setsMethod(arrayInput));