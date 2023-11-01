/*
Create a function to get the intersection of two objects
● Example
○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
○ Output: { a: 1 }
*/

function getIntersection(data1, data2) {
    let intersection = {};
    for (key in data1) {
        if (data1[key] == data2[key]) {
            intersection[key] = data1[key]
        }
    }
    return intersection;
}

let obj1 = { a: 1, b: 2 }
let obj2 = { a: 1, c: 2 }
console.log(getIntersection(obj1, obj2))