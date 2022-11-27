function createEmployee (inDigits, minSalary, maxSalary, minBirthYear, maxBirthYear) {
    let power = getPower(inDigits);
    let randomID = Math.floor(power + Math.random() * 9*power);
    let randomSalary = Math.round(Math.random() * (maxSalary - minSalary + 1) ) + minSalary;
    let randomYear = Math.round(Math.random() * (maxBirthYear - minBirthYear + 1) ) + minBirthYear;
    return {randomID, randomSalary, randomYear};
}
function getPower(nDigits) {
    let res = 1;
    let count = nDigits-1;
    while (count != 0) {
        res *=10;
        count--;
    }
    return res;
}

 function noname(inDigits, minSalary, maxSalary, minBirthYear, maxBirthYear, nEmpl) {
    let Ar = [];
    while (Ar.length != nEmpl) {
            Ar.push(createEmployee(inDigits, minSalary, maxSalary, minBirthYear, maxBirthYear));
        }
    return Ar;
     }
function getAverageAge(emplAr) {
    let ageAr = emplAr.reduce((res, cur) => {
        res.push(new Date().getFullYear() - cur.randomYear);
        return res;
    }, []);
    let avgAge = ageAr.reduce((res, cur)=> {
        let avg = Math.round((res + cur) / 2);
        return avg;
    }, 0)
    return avgAge;
}

function getEmployeesBySalary (emplAr) {
    let a = emplAr.sort((a, b) => {
        return a.randomSalary - b.randomSalary;
    })
    return a;
}


//  console.log(getAverageAge(noname(5, 5000, 30000, 1990, 2010, 10)));
console.log(getEmployeesBySalary(noname(5, 5000, 30000, 1990, 2010, 10)));