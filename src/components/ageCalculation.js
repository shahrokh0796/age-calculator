const formEl = document.querySelector("#form");
const dayEl = document.querySelector("#day");
const monthEl = document.querySelector("#month");
const yearEl = document.querySelector("#year");
const errorEl = document.querySelector("small");
const ageBtn = document.querySelector(".ageBtn");

const isRequired = (inputLength, amount) => inputLength.length < amount ? false: true;   

function displayError(message, element) {
    element.textContent = message;
    element.classList.add("error");
}
function removeError(element) {
    element.textContent = "";
    element.classList.remove("error");
}


function calculateAge(){
    const date = new Date();

    let nowD = date.getDay(), nowM = date.getMonth(),
    nowY = date.getFullYear();
    let inputD = dayEl.value, inputM = monthEl.value,
    inputY = yearEl.value;

    let personY = nowY - inputY, personM = nowM - inputM,
    personD = nowD - inputD;

    console.log(personD," <--personD", personM, " personM<--", personY, " <--");

}

ageBtn.addEventListener("click", calculateAge);