const formEl = document.querySelector("#form");
const label = document.querySelectorAll("label");
const dayEl = document.querySelector("#day");
const monthEl = document.querySelector("#month");
const yearEl = document.querySelector("#year");
const errorEl = document.querySelectorAll("small");
const ageBtn = document.querySelector(".ageBtn");
const time = document.querySelectorAll("time");


console.log(time);

const isRequired = (inputLength, amount) => inputLength.length < amount || inputLength.length > amount? false: true;   
const isNumber = (input) => typeof input === 'number' ? true: false;


function displayError(message, element, label) {
    element.textContent = message;
    element.classList.add("err");
    label.classList.add("err");
}
function removeError(element, label) {
    if (element.classList != undefined && label.classList != undefined) {
        element.classList.remove("err");
        label.classList.remove("err");
        element.textContent = "";
    }
}

function displayAge(time) {
    return time;
}

function calculateAge(){
    let inputD = dayEl.value, inputM = monthEl.value,
    inputY = yearEl.value;
    const dob = new Date();
    const currentYear = dob.getFullYear();
    const currentMonth = dob.getMonth();
    const currentDay = dob.getDate();
    let monthAge;
    let dayAge;
    let yearAge;

    if(!isRequired(inputD, 2)) {
        displayError("This field is required", errorEl[0], label[0]);
        time[2].textContent = "--";
    } else {
        removeError(errorEl[0], label[0]);
        dayAge = currentDay - inputD;
        time[2].textContent = Math.abs(dayAge);
    }

    if(!isRequired(inputM, 2)) {
        displayError("This field is required", errorEl[1], label[1]);
        time[1].textContent = "--";
    } else {}

     if(!isRequired(inputY, 4)) {
        displayError("This field is required", errorEl[2], label[2]);
        time[0].textContent = "--";
    } else {
      removeError(errorEl, label);
     }

    if (parseInt(inputM)> 12 || Number.isNaN(parseInt(inputM))) {
        displayError("Must be a valid month", errorEl[1], label[1]);
        console.log("input month is greater than 12");
        time[1].textContent = "--";
     } else {
        removeError(errorEl[1], label[1]);
        monthAge = currentMonth - inputM;
        time[1].textContent = Math.abs(monthAge);
       }
    if (parseInt(inputY) > currentYear || Number.isNaN(parseInt(inputY))) {
        time[0].textContent = "--";
        displayError("Must be in the past", errorEl[2], label[2]);
     } else {
        removeError(errorEl[2], label[2]);
        yearAge = currentYear - inputY;
        time[0].textContent = Math.abs(yearAge);
       }
     
    if (inputM > currentMonth) {
        yearAge--;
        monthAge = 12+currentMonth - inputM;
        time[0].textContent = yearAge;
        time[1].textContent = monthAge;
    }
     if (inputD > currentDay ) {
        monthAge--;
        dayAge = 31+currentDay - inputD;
        time[2].textContent = dayAge;
     } else {}

    // if (parseInt(inputM)> 12 || Number.isNaN(parseInt(inputM))) {
    //     displayError("Must be a valid month", errorEl[1], label[1]);
    //  } else {
    //     removeError(errorEl[1], label[1]);
    //     monthAge = currentMonth - inputM;
    //     time[1].textContent = Math.abs(monthAge);
    //    }
    // if (parseInt(inputY) > currentYear || Number.isNaN(parseInt(inputY))) {
    //     displayError("Must be in the past", errorEl[2], label[2]);
    //  } else {
    //     removeError(errorEl[2], label[2]);
    //     yearAge = currentYear - inputY;
    //     time[0].textContent = Math.abs(yearAge);
    //    }
    
    // if(!isRequired(inputD, 2) || inputD > 31) {
    //     displayError("This field is required", errorEl[0], label[0]);
    // } else {
    //     removeError(errorEl[0], label[0]);
    //     dayAge = currentDay - inputD;
    //     time[2].textContent = Math.abs(dayAge);
    //    }
    // if(!isRequired(inputM, 2)) {
    //     displayError("This field is required", errorEl[1], label[1]);
    // } 
    //  if(!isRequired(inputY, 4)) {
    //     displayError("This field is required", errorEl[2], label[2]);
    // } else {
    //   removeError(errorEl, label);
    //  }

    // if (inputM > currentMonth) {
    //     yearAge--;
    //     monthAge = 12+currentMonth - inputM;
    //     console.log(currentMonth, "C.M 88.js");
    //     time[0].textContent = yearAge;
    //     time[1].textContent = monthAge;
    //     console.log(inputM, "<--inputY from 89 ageCalculation.js");
    // }
    //  if (inputD > currentDay ) {
    //     monthAge--;
    //     dayAge = 31+currentDay - inputD;
    //     time[2].textContent = dayAge;
    //  } else {}
     
}

ageBtn.addEventListener("click", calculateAge);

