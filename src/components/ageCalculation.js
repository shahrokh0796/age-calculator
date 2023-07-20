const formEl = document.querySelector(".form");
const label = document.querySelectorAll("label");
const dayEl = document.querySelector("#day");
const monthEl = document.querySelector("#month");
const yearEl = document.querySelector("#year");
const errorEl = document.querySelectorAll("small");
const ageBtn = document.querySelector(".ageBtn");
const time = document.querySelectorAll("time");

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


function calcDate(date1, date2) {
    const dDate1 = new Date(date1);
    const dDate2 = new Date(date2);
    const cMonth = dDate1.getMonth()+1;

    const date1TimeStamp = dDate1.getTime();
    const date2TimeStamp = dDate2.getTime();
    let calc;
    if (date1TimeStamp > date2TimeStamp) {
        calc = new Date(date1TimeStamp - date2TimeStamp);
    } else {
        calc = new Date(date2TimeStamp - date1TimeStamp);
    }

    const calcFormatTmp = `${calc.getDate()}-${(calc.getMonth()+1)}-${calc.getFullYear()}`;
    const calFormat = calcFormatTmp.split("-");
    const daysPassed = Number(Math.abs(calFormat[0]) -1);
    const monthPassed = Number(Math.abs(calFormat[1]) -1);
    const yearPassed = Number(Math.abs(calFormat[2]) -1970);
    const yearText = ["year", "years"];
    const monthText = ["month", "months"];
    const dayText = ["day", "days"];
    const totalDays = (yearPassed*365) + (monthPassed*30.417) + daysPassed;

    return {
        days: daysPassed,
        months: monthPassed,
        years: yearPassed
    }
}
const isRequired = (inputLength, len) => inputLength.length < len || inputLength.length > len? false: true;
function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

function calculateAge(e) {
    e.preventDefault();

    const now = new Date();
    const cDate = now.getDate(),  cMonth = now.getMonth()+1, cYear = now.getFullYear();
    let inputD = dayEl.value, inputM = monthEl.value, inputY =yearEl.value;
    
    const {days, months, years} = calcDate(`${inputM}-${inputD}-${inputY}`, `${cMonth}-${cDate}-${cYear}`);
    
    if (inputD == "" || inputD == null || !isRequired(inputD, 2)) {
        displayError("This field is required", errorEl[0], label[0]);
        time[2].textContent = "- -";
        dayEl.classList.add("red-border");
    } 
    else if (inputD > daysInMonth(inputM, inputY)) { 
        displayError("Must be a valid day", errorEl[0], label[0]);
        dayEl.classList.add("red-border");
    }
    else if (inputD > 31){
        displayError("Must be a valid day", errorEl[0], label[0]);
        time[2].textContent = "- -";
    } else {
        removeError(errorEl[0], label[0]);
        time[2].textContent = days;
        dayEl.classList.remove("red-border");
    }

    if (inputM == "" || inputM == null || !isRequired(inputM, 2)) {
        displayError("This field is required", errorEl[1], label[1]);
        monthEl.classList.add("red-border");
        time[1].textContent = "- -";
    } 
    else if (inputD > daysInMonth(inputM, inputY)) {
        displayError("", errorEl[1], label[1]);
        monthEl.classList.add("red-border");
    }
    else if (inputM > 12){ 
        displayError("Must be a valid month", errorEl[1], label[1]);
        monthEl.classList.add("red-border");
        time[1].textContent = "- -";
    }
     else {
        removeError(errorEl[1], label[1]);
        time[1].textContent = months;
        monthEl.classList.remove("red-border");
    }

    if (inputY == "" || inputY == null || !isRequired(inputY, 4)) {
        displayError("This field is required", errorEl[2], label[2]);
        time[0].textContent = "- -";
        yearEl.classList.add("red-border");
    } 
    else if (inputD > daysInMonth(inputM, inputY)) {
        displayError("", errorEl[2], label[2]);
        yearEl.classList.add("red-border");
    }
    else if (inputY > cYear){ 
        displayError("Must be a valid past", errorEl[2], label[2]);
        time[0].textContent = "- -";
        yearEl.classList.add("red-border");
    } 
    else {
        removeError(errorEl[2], label[2]);
        time[0].textContent = years;
        yearEl.classList.remove("red-border");
    }
}

formEl.addEventListener("submit", calculateAge);
