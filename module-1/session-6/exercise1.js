/*
Create a function to calculate array of student data
● The object has this following properties :
    ○ Name → String
    ○ Email → String
    ○ Age → Date
    ○ Score → Number
● Parameters : array of student
● Return values :
    ○ Object with this following properties :
        ■ Score
            ● Highest
            ● Lowest
            ● Average
        ■ Age
            ● Highest
            ● Lowest
            ● Average
*/

function calculateDataStudent(data) {
    const result = {
        score: {
            highest: data[0].score,
            lowest: data[0].score,
            average: 0
        },
        age: {
            highest: data[0].age,
            lowest: data[0].age,
            average: 0,
        }
    };

    for (item of data) {
        if (item.score > result.score.highest) {
            result.score.highest = item.score;
        }

        if (item.score < result.score.lowest) {
            result.score.lowest = item.score;
        }

        if (item.age > result.age.highest) {
            result.age.highest = item.age;
        }

        if (item.age < result.age.lowest) {
            result.age.lowest = item.age;
        }

        result.score.average += item.score;
        result.age.average += item.age;
        //console.log(item);
    }
    Math.round(result.score.average / data.length);
    Math.round(result.age.average / data.length)
    return result;
}

const studentData = [
    { name: "Surya Adi Wiguna", email: "surya@email.com", age: 27, score: 60 },
    { name: "Idlal Maulana", email: "idlal@email.com", age: 29, score: 80 },
    { name: "Idrus Umam", email: "idrus@email.com", age: 31, score: 75 },
    { name: "M. Fahmi Muzakki", email: "fahmi@email.com", age: 26, score: 87 },
    { name: "Azelia Rumaisha", email: "azelia@email.com", age: 23, score: 93 }
]

console.log(calculateDataStudent(studentData));

