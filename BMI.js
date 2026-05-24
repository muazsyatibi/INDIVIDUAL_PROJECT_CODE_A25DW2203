// Name: Muaz Syatibi Bin Mokhzani
// Matric No: A25DW2203

function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let result = document.getElementById("bmiResult");

    if (isNaN(weight) || isNaN(height)) {
        result.innerHTML = "Please enter both your weight and height.";
        return;
    }

    if (weight <= 0 || height <= 0) {
        result.innerHTML = "Weight and height must be greater than zero.";
        return;
    }

    let bmi = weight / (height * height);
    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    result.innerHTML = "Your BMI is " + bmi.toFixed(2) + ". Category: " + category + ".";
}