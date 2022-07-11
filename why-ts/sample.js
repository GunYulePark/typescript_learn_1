 // @ts-check

/**
 * @param {number} a 첫 번째 숫자
 * @param {number} b 두 번째 숫자
 */

function sum(a, b) {
return a + b;
}

console.log(sum(10, 20));
// console.log(30 !== sum(10, '20')); //1020

console.log(sum(10, '20')); // error 표시 된다.
