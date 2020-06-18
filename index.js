

// alert(isAdult(Number(prompt('Enter your age'))));
alert(checkMultiplicity(Number(prompt('Enter dividend')), Number(prompt('Enter divisor'))));


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
function checkMultiplicity(dividend,divisor) {
  return Number(dividend) % Number(divisor) === 0
}