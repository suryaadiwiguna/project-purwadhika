/*
Create a function to find a factorial number using recursion
● Example
    ○ Input : 5
    ○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 120
*/

function calculateFactorial(num) {
    if (num > 1) {
        return num * calculateFactorial(num - 1);
    } else {
        return 2;
    }
}

console.log(calculateFactorial(5))