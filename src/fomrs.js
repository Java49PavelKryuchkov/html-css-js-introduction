const inputElements = document.querySelectorAll(".form-class [name]");
const salaryElement = document.getElementById("salary-message");
const salaryDesign = document.getElementById("salary-design");

function onSubmit(event) {
    event.preventDefault();
    const employee = Array.from(inputElements).reduce((res, cur) => {
        res[cur.name] = cur.value;
        return res;
    }, {});
    console.log(employee);
}
function onChange(event) {
    if(event.target.name == "salary") {
        if(+event.target.value<1000 || +event.target.value>10000) {
            event.target.value = '';
            salaryElement.hidden = false;
            salaryDesign.bacgroundColor = 'red';
        } else {
            salaryElement.hidden = true;
        }
    }
}