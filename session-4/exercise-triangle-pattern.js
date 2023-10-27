/*
Triangle Pattern
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

function repeatingTrianglePattern(height) {
    if (height > 0) {
        for (let i = 1, result = ""; i <= height; i++) {
            result = result + i + " ";
            console.log(result);
        }
    } else {
        console.log("< 0 is not allowed");
        return ("< 0 is not allowed");
    }
}

function continuingTrianglePattern(height) {
    let result = "";
    let count = 1;
    if (height > 0) {
        for (let i = 1; i <= height; i++) {
            for (let row = 1; row <= i; row++) {
                result += "0" + count + " ";
                count++
            }
            result += "\n";
        }
    } else {
        console.log("not allowed");
    }
    console.log(result);
}

repeatingTrianglePattern(5);
continuingTrianglePattern(5);
