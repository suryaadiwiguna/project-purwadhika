/*
Write a function from a given array of numbers and return the second smallest number
a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
*/

function secondSmallestNum(data) {
    let smallest;
    let secondSmallest;
    for (let i = 0; i < data.length; i++) {
        console.log(secondSmallest, smallest)
        for (let j = 0; j < data.length; j++) {
            if (data[i] < data[j] && data[i] < secondSmallest && data[i] > smallest) {
                secondSmallest = data[i]
            }

            if (data[i] < data[j] && data[i] < smallest) {
                secondSmallest = smallest;
                smallest = data[i]
            }
        }

        // if (data[i] < smallest) {

        //     secondSmallest = smallest;
        //     smallest = data[i]
        //     console.log(smallest, secondSmallest)
        // }
    }
    return secondSmallest;
}

let input = [0, 5, 3, 1, 7, 2, 6, 3, 8, 78, 3, 2]
console.log(secondSmallestNum(input));