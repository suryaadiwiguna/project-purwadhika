/*
Create a function to check if two objects are equal
● Example
    ○ Input : { a: 2 } & { a: 1 }
    ○ Output: false
● Example
    ○ Input : { a: “Hello” } & { a: 1 }
    ○ Output: false
● Example
    ○ Input : { a: 1 } & { a: 1 }
    ○ Output: true
*/

function isEqual(obj1, obj2) {
    let longerObj = Object.keys(obj1).length > Object.keys(obj2) ? obj1 : obj2;
    for (key in longerObj) {
        //console.log(key);
        if (obj1[key] !== obj2[key]) {
            //console.log(key)
            return false
        }
    }
    return true;
}

function isEqualUsingMethod(obj1, obj2) {
    let longerObj = Object.keys(obj1).length > Object.keys(obj2) ? obj1 : obj2;
    for (key in longerObj) {
        if (!Object.is(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
}

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, c: 3, d: 5 };

console.log(isEqual(obj1, obj2))
console.log(isEqualUsingMethod(obj1, obj2))