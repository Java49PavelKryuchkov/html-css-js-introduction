let number = 0;
function sumDigits(number) {
    let resid = 0;
    let sum = 0;
    let sum1 = 0;
    let sum2 = 0;
   do {
    resid = number%10;
   if (resid < 0) {
        resid *=-1;
    sum1 = sum1 + resid;
    number = ~~(number/10);
    } else {
    sum2 = sum2 + resid;
    number = ~~(number/10);
   }
   sum = sum1 + sum2;
}
   while (number != 0)
    return sum;
}
console.log(sumDigits(12-34));
