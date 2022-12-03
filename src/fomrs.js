const inputElements = document.querySelectorAll(".form-class [name]");
const salaryElement = document.querySelector(".salary-message");
const salaryDesign = document.getElementById("salary-design");
const dateMessageElement = document.querySelector(".date-message");

function onSubmit(event) {
    event.preventDefault();
    const employee = Array.from(inputElements).reduce((res, cur) => {
        res[cur.name] = cur.value;
        return res;
    }, {});
    return employee;
}
function onChange(event) {
    if(event.target.name == "salary") {
        if(+event.target.value<1000 || +event.target.value>10000) {
            event.target.value = '';
            hideElement(salaryElement);
            salaryDesign.style.background = 'red';
        } else {
            salaryDesign.style.background = 'white';
        }
    }
}
function onChangeDate(event) {
    if(event.target.name == "birthdayDate") {
        const year = new Date(event.target.value).getFullYear();
        const currentDate = new Date().getFullYear();
        if(year < 1950 || year > currentDate) {
            hideElement(dateMessageElement);
        }
    }
}
function hideElement(element) {
    element.hidden = false;
    setTimeout(function () {
        element.hidden = true;
    }, 5000)
}