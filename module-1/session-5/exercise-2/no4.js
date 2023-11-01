/* Write a function to find duplicate values in an array
a.Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] →[2, 3, 5] */

function findDuplicate(data) {
    let duplicate = [];
    for (let i = 0; i < data.length; i++) {
        var isExistinDuplicate = undefined;
        for (let j = 0; j < data.length; j++) {
            if (i !== j && data[i] == data[j]) {
                for (let k = 0; k < duplicate.length; k++) {
                    if (data[i] == duplicate[k]) {
                        isExistinDuplicate = true;
                        break;
                    }
                }
                if (!isExistinDuplicate) {
                    duplicate.push(data[i])
                    //console.log(duplicate)
                }
            }
        }
    }
    return duplicate;
}

let arrInput = [1, 2, 2, 2, 3, 3, 4, 5, 5, 1, 5, 2, 8, 7, 8];
console.log(findDuplicate(arrInput));