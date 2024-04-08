//output

const outputYear = document.querySelector(".output-year");
const outputMonth = document.querySelector(".output-month");
const outputDay = document.querySelector(".output-day");
const submitButton = document.querySelector(".submit-btn");

//input
let isValid = false;
var thisYear = new Date().getFullYear();
const inputYear = document.querySelector("#year");
const inputMonth = document.querySelector("#month");
const inputDay = document.querySelector("#day");

//error

const errorDay = document.querySelector(".error-day");
const errorMonth = document.querySelector(".error-month");
const errorYear = document.querySelector(".error-year");

submitButton.addEventListener("click", () => {
    if (isValid) {
        console.log("oi")
    } else {
        console.log("no")
    }
})

inputDay.addEventListener("input", () => {
    if (+inputDay.value > 31 || +inputDay.value < 0) {
        errorDay.textContent = "Must be a valid date";
        isValid = false;
        return;
    } else if (+inputDay.value === 0) {
        errorDay.textContent = "This field is required";
        isValid = false;
        return;
    }
    else {
        isValid = true;
        errorDay.textContent = "";
    }
   
});

inputMonth.addEventListener("input", () => {
    if (+inputMonth.value > 12 || +inputMonth.value < 0) {
        errorMonth.textContent = "Must be a valid date";
        isValid = false;
        return;
    } else if (+inputMonth.value === 0) {
        errorMonth.textContent = "This field is required";
        isValid = false;
        return;
    }
    else {
        isValid = true;
        errorMonth.textContent = "";
    }

});

inputYear.addEventListener("input", () => {
    if (+inputYear.value > thisYear || +inputYear.value < 0) {
        errorYear.textContent = "Must be a valid date";
        isValid = false;
        return;
    } else if (+inputYear.value === 0) {
        errorYear.textContent = "This field is required";
        isValid = false;
        return;
    }
    else {
        isValid = true;
        errorYear.textContent = "";
    }

});