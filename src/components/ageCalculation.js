const formEl = document.querySelector("#form");
const dayEl = document.querySelector("#day");
const monthEl = document.querySelector("#month");
const yearEl = document.querySelector("#year");
const errorEl = document.querySelector("small");
const ageBtn = document.querySelector(".ageBtn");

const isRequired = (inputLength) => inputLength.length == "" ? false: true;   

function displayError(message, element) {
    element.textContent = message;
    element.classList.add("error");
}
function removeError(element) {
    element.textContent = "";
    element.classList.remove("error");
}


function calculateAge(){
    let inputD = dayEl.value, inputM = monthEl.value,
    inputY = yearEl.value;
    const dOB = new Date(inputD,inputM,inputY).toLocaleDateString('en-GB');
    if(!isRequired(inputD) || !isRequired(inputM) || !isRequired(inputY)) {
        console.log("errororororororororororrrrr");
    }
}

ageBtn.addEventListener("click", calculateAge);