//Write a code to display the multiplication of 1 to 10 table of a given integer
let number = 2;

for (let i = 1 ; i <= 10 ; i++) {
    //console.log (i);
    console.log (`${number} x ${i} =`, number * i);
}

//Palindrome checker
let word = "yow";
let reversedWord ="";
for (let i = word.length - 1 ; i >= 0; i--) {
    reversedWord = reversedWord + word[i];
    //console.log(reversedWord);
} if (reversedWord == word) {
    console.log(`${word} is a palindrome word`);
}else {
    console.log(`${word} is NOT a palindrome word`);
}

// Centimeter to kilometer converter
let centimeter = 100000;
console.log(`${centimeter} cm = `, centimeter/100000, " km");