/*
Based on the array below write a function that will return primitive data types only. let
arr = [1, [], undefined, {}, "string", {}, []];
a. The function will return [1, undefined, “string”]
*/

function extractPrimitive(data) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i] === null || (typeof data[i] !== "object" && typeof data[i] !== "function")) {
            result.push(data[i]);
        }
    }
    return result;
}

let arr = [1, [], undefined, {}, "string", {}, []];
console.log(extractPrimitive(arr))