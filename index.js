
/**
 * Adulthood verification
 * @param   {number}  age - Users age
 * @returns {boolean}
 */
function isAdult(age) {
  return Number(age) >= 18;
}


alert(isAdult(Number(prompt('Enter your age'))));
