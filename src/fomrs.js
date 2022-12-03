const inputElements = document.querySelectorAll(".form-class [name]");
const salaryElement = document.querySelector(".salary-message");
const salaryDesign = document.getElementById("salary-design");

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
            salaryElement.hidden = false;
            setTimeout(function () {
                salaryElement.hidden = true;
            }, 5000)
            salaryDesign.style.background = 'red';
        } else {
            salaryDesign.style.background = 'white';
        }
    }
}
function onChangeDate(event) {
    if(event.target.name == "birthdayDate") {
    }
}