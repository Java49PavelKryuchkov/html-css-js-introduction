
// function checkTeudatZehut(ar) {
//     let arStr = Array.from(ar);
//     let res = 0;
//     let rem = 0;
//     let evenOrOdd = arStr.map(function(digit, index){
//         if (index % 2 != 0 && digit * 2 <10) {
//          res = digit * 2;
//         }
//         else if (index % 2 != 0 && digit * 2 >= 10){
//             res = 0;
//             rem = 0;
//             digit = digit * 2;
//             while (digit != 0) { 
//                 rem  = digit % 10;
//                 res = res + rem;
//                 digit = Math.trunc(digit / 10);
//         }}
//         else  {
//             res = digit * 1;
//         }
//         return res;
//     })
//     let sumDigits = evenOrOdd.reduce(function(res, cur){
//         return res + cur;
//     })

//     return sumDigits % 10 == 0 ? true : false;
// }

// function generateRandomTeudatZeut() {
//     let str = "";
//     let count = 0;
//     while (count !=8) {
//         str = str + Math.round(Math.random() * 9);
//         count++;
// }
//     let arStr = Array.from(str);
//     let res = 0;
//     let rem = 0;
//     let evenOrOdd = arStr.map(function(digit, index){
//         if (index % 2 != 0 && digit * 2 <10) {
//          res = digit * 2;
//         }
//         else if (index % 2 != 0 && digit * 2 >= 10){
//             res = 0;
//             rem = 0;
//             digit = digit * 2;
//             while (digit != 0) { 
//                 rem  = digit % 10;
//                 res = res + rem;
//                 digit = Math.trunc(digit / 10);
//         }}
//         else  {
//             res = digit * 1;
//         }
//         return res;
//     })
//     let sumDigits = evenOrOdd.reduce(function(res, cur){
//         return res + cur;
//     })

//     function lastDigit () {
//         let digit = 0;
//         while ((sumDigits + digit) % 10 != 0) {
//         digit++;
//     }
//     return digit;
// }
// return str + lastDigit();
// }

// console.log(checkTeudatZehut("291186096"));
// console.log(generateRandomTeudatZeut());


// ////////////////////////// Exercise #1 /////////////////////////////// 
// function ulSurround (strings) {
//     let res = strings.map(str => `<li>${str}</li>`);
//     res.unshift("<ul>");// res.splice(0, 0, "<ul>");
//     res.push("</ul>");// res.splice(string.lenght, 0, "</ul>");
//     return res;
// }

// let arr = ["abc", "ABC", "lmn"];
// console.log(`input: ${arr} output: ${ulSurround(arr)}`);

// //////////////////////////////////// Exercise #2 ///////////////////////////////////
// let ar = ["abc", "hgnt", "d", "d", "123"];
// function count(array, element) {
//     return array.reduce((res, cur) => cur == element ? res + 1 : res, 0);
// }
// let str = "123";
// console.log(`input: ${ar} counter of ${str} is ${count(ar, str)}`);

// ///////////////////////////////////// Exercise #3 ///////////////////////////////////

// function arrayCopy(srs, srsPos, dst, dstPOs, lenght) {
//     let arForCopy = srs.slice(srsPos, srsPos + lenght);
//     dst.splice(dstPOs, 0, ...arForCopy);
//     // arForCopy.forEach((e, i)) => dst.splice(dstPOs + i, 0, e)
// }

// let ar1 = [1,2,3,4,5,6];
// let ar2 = [10, 30, 40, 50];
// arrayCopy(ar1, 2, ar2, 1, 3);
// console.log(`ar1: ${ar1}, ar2: ${ar2} arrayCopy(ar1, 2, ar2, 1, 3): ${ar2}`);


// ///////////////////////////////////// Exercise #4 ///////////////////////////////////

// function move(array, index, offset) {
//     let movedElem = array.splice(index, 1)[0];
//     array.splice(index + offset, 0, movedElem);
//     return array;
// }

// function getEvenNumbers(numbers) {
//     return numbers.filter((n, i) => i % 2 == 0)
// }

// let ar = [2, -10, 3, 1999];
// ar.sort((a, b) => b - a);
// console.log(ar);
// let ar1 = ["abc", "fg", "frt"];
// ar1.sort((a, b) => b.length - a.length);
// console.log(ar1);

///////////////////////15-ArraysFilterSort - exersice #1 /////////////////////////

/**
 * function minMax
 * Takes array of numbers 
Returns array containing two numbers: first is minimal value , second is maximal value form input array 
Example: minMax([1, 2, 3, 4, 5]) returns array [1, 5] 
Implementation Requirements 
Apply the reduce pattern for getting result array by one “reduce” method  
 */
function minMax(numbers) {
    return numbers.reduce((res, cur) => {
        if (res[0] > cur) {
            res[0] = cur;
        } else if (res[1] < cur) {
            res[1] = cur;
        }
        return res;
    }, [numbers[0], numbers[0]]);
}
/**
 * test for minMax function
 */
console.log("*****************************")
console.log("test for minMax function");
[[1, 2, 3, 5, 100], [2, -10, 3, 1], [100, 38,7], [10000]]
.forEach(a => console.log(`inpute array: ${a}, min-max array is: ${minMax(a)}`))
console.log("*****************************")
/********************************************************************************** */

/**
 * function deleteWithPrefix(strings, prefix)
 * Takes array of strings and a prefix value 
Returns array containing the strings from the input array without strings
 starting with a given prefix 
Example: deleteWithPrefix([“abc”, “old_abc”, “lmn”, “123”, “old_lmn”], “old_”)
 returns array [“abc”, “lmn”, “123”] 
 */
 function deleteWithPrefix(strings, prefix) {
    return strings.filter(str => !str.startsWith(prefix))
 }
 /**
  * test
  */
  console.log("*****************************")
  console.log("test for deleteWithPrefix function");
 let prefixes = ["old_", "new_"];
 [["abc", "old_abc", "abc_old"], ["abc", "new_abc", "abc_new"]].forEach(
    (a, i) => console.log(`input array: [${a}]; prefix: ${prefixes[i]}; after deletion: [${deleteWithPrefix(a, prefixes[i])}]`)
 )
 console.log("*****************************");
 /**
  * function  getSortedEvenOdd(numbers)
  * takes array of numbers 
  * no source array is updated
  * returns arrasorted by following
  * first numbers are even ones in the ascending order
  * last numbers are odd ones in the descending order
  */
  function  getSortedEvenOdd(numbers) {
    const result = numbers.slice();
    return result.sort((a, b) => {
        let res = 1;
        if (a % 2 == 0 && b % 2 != 0) {
            res = -1;
        } else if (a % 2 == 0 && b % 2 == 0) {
            res = a - b;
        } else if (a % 2 == 1 && b % 2 == 1) {
            res = b - a;
        }
        return res;
    })
  }
  /**
   * test function getSortedEvenOdd
   */
  console.log("************************************");
  console.log("test for getSortedEvenOdd");
  [[1, 2, 3, 4, 5, 6], [123, 9, 26, 48, 35, 4]]. forEach(a => console
    .log(`after sorting [${getSortedEvenOdd(a)}]; before sorting [${a}]`))