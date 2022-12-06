const inputElements = document.querySelectorAll(".form-class [name]");
const salaryDesign = document.getElementById("salary-design");
const dateMessageElement = document.querySelector(".date-message");
const MIN_DATE = 1950;
const MAX_DATE = getMaxDate();
const MIN_SALARY = 2000;
const MAX_SALARY = 10000;
const salaryErrorElement = document.getElementById("salary-error");
const dateErrorElement = document.getElementById("date-error");
const SET_MAX_INTERVAL = 5000;
const sectionElements = document.querySelectorAll("section");
const employeesElement = document.getElementById("employees-list");
const company = new Company();
employeesElement.innerHTML = company.getAllEmployees();

function show(index) {
    sectionElements.forEach(section => {
        section.hidden = true;
    });
    sectionElements[index].hidden = false;
}
function onSubmit(event) {
    event.preventDefault();
    const employee = Array.from(inputElements).reduce((res, cur) => {
        res[cur.name] = cur.value;
        return res;
    }, {});
    company.hireEmployee(employee);
}
function onChange(event) {
    if(event.target.name == "salary") {
        validateSalary(event.target);
    } else if (event.target.name == "birthdayDate") {
        validateDate(event.target)
    }
}
function validateSalary(element) {
    const salary = +element.value;
    if(salary < MIN_SALARY || salary > MAX_SALARY) {
        const message = salary < MIN_SALARY ? `Salary should not be less, than ${MIN_SALARY}`
        : `Salary should not be greater, than ${MAX_SALARY}`;
        showErrorMessage(message, element, salaryErrorElement);
    }
}
function validateDate(element) {
    const date = +element.value.slice(0, 4);
    if(date < MIN_DATE || date > MAX_DATE) {
        const message = date < MIN_DATE ? `The date shouldn't be less, than ${MIN_DATE}`
        : `The date shouldn't be greater, than ${MAX_DATE}`;
        showErrorMessage(message, element, dateErrorElement);
    }
}
function showErrorMessage (message, element, errorElement) {
    errorElement.innerHTML = message;
    setTimeout(() =>{
        errorElement.innerHTML = '';
        element.value = '';
    }, SET_MAX_INTERVAL);
}

function getMaxDate() {
    return new Date().getFullYear();
}
function Company() {
    this.employees = [];
}
Company.prototype.hireEmployee = function(employee) {
    this.employees.push(employee);
}
Company.prototype.getAllEmployees = function() {
    return this.employees;
}