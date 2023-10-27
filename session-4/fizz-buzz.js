/*
Create a function that can loop the number of times according to the input we provide, and will
1. replace multiples of 3 with "Fizz"
2. replace multiples of 5 with "Buzz"
3. replace multiples of 3 and 5 with "FizzBuzz".
*/


let fizzBuzz = function (numberLength) {
    result = "";
    for (let i = 1; i <= numberLength; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            result += "FizzBuzz, ";
        } else if (i % 3 == 0) {
            result += "Fizz, ";
        } else if (i % 5 == 0) {
            result += "Buzz, ";
        } else {
            result += i + ", ";
        }
    }
    return result;
}

console.log(fizzBuzz(30));