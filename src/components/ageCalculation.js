const formEl = document.querySelector("#form");
const label = document.querySelectorAll("label");
const dayEl = document.querySelector("#day");
const monthEl = document.querySelector("#month");
const yearEl = document.querySelector("#year");
const errorEl = document.querySelectorAll("small");
const ageBtn = document.querySelector(".ageBtn");
const displayAge = document.querySelectorAll("time");


console.log(label);

const isRequired = (inputLength, amount) => inputLength.length < amount || inputLength.length > amount? false: true;   
const isNumber = (input) => typeof input != 'number' ? false: true;


function displayError(message, element, label) {
    element.textContent = message;
    element.classList.add("err");
    label.classList.add("err");
}
function removeError(element, label) {
    element.textContent = "";
    element.classList.remove("err");
    label.classList.remove("err");
}


function calculateAge(){
    let inputD = dayEl.value, inputM = monthEl.value,
    inputY = yearEl.value;
    const dOB = new Date(inputD,inputM,inputY).toLocaleDateString('en-GB');
    
    if(!isRequired(inputD, 2)) {
        displayError("Enter a valid date", errorEl[0], label[0]);
    } else {
        removeError(errorEl[0], label[0]);
     }
    
    if(!isRequired(inputM, 2)) {
        displayError("Enter a valid month", errorEl[1], label[1]);
    } else {
        removeError(errorEl[1], label[1]); 
     }
    
     if(!isRequired(inputY, 4)) {
        displayError("Enter a valid past", errorEl[2], label[2]);
    } else {
        removeError(errorEl[2], label[2]); 
     }
}

ageBtn.addEventListener("click", calculateAge);