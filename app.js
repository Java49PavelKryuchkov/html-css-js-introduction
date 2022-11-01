function sumDigits(number) {
    if (number < 0) {
        number = number *- 1;
    }
    let resid = 0;
    let sum = 0;
   do {
    resid = number%10;
    sum = sum + resid;
    number = ~~(number/10);
   }

   while (number != 0);
    return sum; }
console.log(sumDigits(-1234));
