let inputFeet = document.getElementById("inputFeet");
let inputInches = document.getElementById("inputInches");
let inputWeight = document.getElementById("inputWeight");
let totalBMI = document.getElementById("totalBMI");

function submit() {
    const feet = inputFeet.value;
    const inches = inputInches.value;
    const weight = inputWeight.value;

    totalBMI.innerHTML = (weight / ((feet * 12 + inches) ** 2)) * 703;

    if(totalBMI.innerHTML < 18.5) {
        totalBMI.innerHTML = "Underweight";
    } else if(totalBMI.innerHTML >= 18.5 && totalBMI.innerHTML <= 24.9) {
        totalBMI.innerHTML = "Normal";
    } else if(totalBMI.innerHTML >= 25 && totalBMI.innerHTML <= 29.9) {
        totalBMI.innerHTML = "Overweight";
    } else if(totalBMI.innerHTML >= 30) {
        totalBMI.innerHTML = "Obese";
    }

    if (inputFeet.value === "" || inputInches.value === "" || inputWeight.value === "") {
        alert("Please fill in all fields");
        totalBMI.innerHTML = "";
    }

    if(inputFeet.value >= 10 && inputInches.value >= 10) {
        alert("Please enter a valid height");
    }
}
