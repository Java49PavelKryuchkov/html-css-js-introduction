// function sumDigits(number) {
//     if (number < 0) {
//         number = number *- 1;
//     }
//     let resid = 0;
//     let sum = 0;
//    do {
//     resid = number%10;
//     sum = sum + resid;
//     number = ~~(number/10);
//    }

//    while (number != 0);
//     return sum; }
// console.log(sumDigits(-1234));


function getSymbol(digit) {
    let codeA = 'a'.charCodeAt();
    if (digit > 9) {
        digit = String.fromCharCode(codeA + digit - 10);
    }
      
   return digit;
    //31 - 10 + 97
}
function fromNumberToString(number, base) {
    number = Math.abs(number);
    let res = "";
    do {
        let digit = number % base;
        let sym = getSymbol(digit);
        res = sym + res;
        number = Math.trunc(number / base);

    } while(number != 0);
    return res;

}
function getDigit(symbol) {
    let codeA = 'a'.charCodeAt();
    let res = symbol < '9' ? +symbol : symbol.charCodeAt() - codeA + 10;
    return res;
}
function fromStringToNumber(string, base) {
 
    string = string.toLowerCase();
    let result = 0;
    for (let i = 0; i < string.length; i++) {
        let digit = getDigit(string[i]);
        result = result * base + digit;
    }
    return result;
}