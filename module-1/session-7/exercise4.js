/*
Create a function that can accept input as an array of objects and switch all values into property and
property into value
● Example :
    ○ Input : [{ name: ‘David’, age: 20 },{ name: ‘David’, age: 20 }]
    ○ Output : [{ David: ‘name’, 20: ‘age’}]
*/

function flipValueWithKey(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let flippedObj = {};
        for (key in array[i]) {
            flippedObj[array[i][key]] = key;
        } result.push(flippedObj)
    }
    return result;
}

const input = [{ name: "David", age: 20 }, { name: "Surya", age: 25 }, { address: "Sukabumi", nationality: "Indonesian" }]
console.log(flipValueWithKey(input));