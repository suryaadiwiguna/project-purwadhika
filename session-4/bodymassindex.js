function calculateBMI(weight, height) {
    let bmiCategory;
    let rawBMI = weight / (height * height);;
    let bmi = rawBMI.toFixed(2);
    if (bmi < 18.5) {
        bmiCategory = "less weight";
    } else if (bmi < 24.9) {
        bmiCategory = "ideal";
    } else if (bmi < 29.9) {
        bmiCategory = "overweight";
    } else if (bmi < 39.9) {
        bmiCategory = "very overweight";
    } else if (bmi >= 39.9 && bmi != Infinity) {
        bmiCategory = "obesity";
    } else {
        bmiCategory = "error";
    }
    return `Your BMI is ${bmi}, categorized as ${bmiCategory}.`;
}

console.log(calculateBMI(1, 0));