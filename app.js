function createEmployee (inDigits, minSalary, maxSalary) {
    return {inDigits, minSalary, maxSalary};
}
 function arrayOfObjects(employee, numberOfEmployees) {
    let Ar = [];
    while (Ar.length != numberOfEmployees) {
            Ar.push(employee);
        }
        return Ar;
 }

 function noname(inDigits, minSalary, maxSalary, nEmpl) {
    let randomID = Math.round(Math.random() * inDigits * 10000);
    let somebody = createEmployee(randomID, minSalary, maxSalary);
    let createAr = arrayOfObjects(somebody, nEmpl);
    return createAr;
 }

 console.log(noname(1000, 5000, 30000, 7));