/*
Write a function to split a string and convert it into an array of words
○ Example : “Hello World” → [“Hello”, “World”]
*/

function stringToArray(string) {
    let array = [];
    let result = "";
    for (let i = 0; i <= string.length; i++) {
        if (string[i] !== " " && string[i] !== undefined) {
            result += string[i];
            console.log(result);
        } else if ((string[i] == " " || string[i] == undefined) && result !== "") {
            array.push(result);
            result = "";
        }
    }
    return array;
}

let string = "   Hello world!  2 --- asd a  sdddd |}|: +_)+!@( *#&^*$&#^ 37 ";
console.table(stringToArray(string));