let inputFeet = document.getElementById("inputFeet");
let inputInches = document.getElementById("inputInches");
let inputWeight = document.getElementById("inputWeight");
let totalBMI = document.getElementById("totalBMI");

function submit() {
    const feet = Number(inputFeet.value);
    const inches = Number(inputInches.value);
    const weight = Number(inputWeight.value);
    let category = "";

    // Validation comes first

    if (inputFeet.value === "" || inputInches.value === "" || inputWeight.value === "") {
        alert("Please fill in all fields");
        totalBMI.innerHTML = "";
        return;
    }

    if(inputFeet.value >= 10 && inputInches.value >= 10) {
        alert("Please enter a valid height");
        totalBMI.innerHTML = "";
        return;
    }

    // BMI formula

    const bmi = (weight / ((feet * 12 + inches) ** 2)) * 703;

    if (bmi <= 18.5) {
        category = "Underweight";
    } else if(bmi >= 18.5) {
        category = "Normal";
    } else if(bmi >= 25) {
        category = "Overweight";
    } else if(bmi >= 30) {
        category = "Obese";
    }

    // BMI output

    totalBMI.innerHTML = `Your BMI is ${bmi.toFixed(2)} (${category})`;
}
