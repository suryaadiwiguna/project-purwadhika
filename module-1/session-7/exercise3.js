/*
● Create a function to merge two array of student data and remove duplicate data
● Student data : name & email
● Example :
    Array1 → [
        { name: "Student 1", email : "student1@mail.com" },
        { name: "Student 2", email : "student2@mail.com" }
    ]
    Array2 → [
        { name: "Student 1", email : "student1@mail.com" },
        { name: "Student 3", email : "student3@mail.com" }
    ]
    ● Result :
    ArrayResult → [
        { name: "Student 1", email : "student1@mail.com" },
        { name: "Student 2", email : "student2@mail.com" },
        { name: "Student 3", email : "student3@mail.com" }
    ]
*/

function mergeObjects(obj1, obj2) {
    let result = [];
    let isIdentical = true;
    for (let i = 0; i < obj1.length; i++) {
        for (let j = 0; j < obj2.length; j++) {
            for (key in obj1[i]) {
                if (obj1[i][key] == obj2[j][key] && isIdentical) {
                    isIdentical = true;
                } else {
                    isIdentical = false;
                    break
                }
            } if (isIdentical) {
                result.push(obj1[i]);
            } else {
                result.push(obj1[i]);
                result.push(obj2[j]);
            }
        }
    }
    return result;
}

const obj1 = [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 2", email: "student2@mail.com" }
]

const obj2 = [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 3", email: "student3@mail.com" }
]

const obj3 = [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 2", email: "student2@mail.com" },
    { name: "Student 3", email: "student3@mail.com" }
]

console.log(mergeObjects(obj1, obj2))