// alert(isAdult(Number(prompt('Enter your age'))));
// alert(checkMultiplicity(Number(prompt('Enter dividend')),
//                         Number(prompt('Enter divisor'))));
// alert(isTriangle(5,4,3));


/**
 * Adulthood verification
 * @param   {number}  age - Users age
 * @returns {boolean}
 */
function isAdult(age) {
  return Number(age) >= 18;
}

/**
 * Checking whether dividend divided by divisor evenly
 * @param   {number} dividend
 * @param   {number} divisor
 * @returns {boolean}
 */
function checkMultiplicity(dividend, divisor) {
  return Number(dividend) % Number(divisor) === 0;
}

/**
 * Checking existence of triangle with given sides
 * @param a {number} the length of one side of the triangle
 * @param b {number} the length of one side of the triangle
 * @param c {number} the length of one side of the triangle
 * @returns {boolean}
 */
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}




