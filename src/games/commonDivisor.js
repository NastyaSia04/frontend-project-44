import game from '../index.js';
import getRandomNumber from '../../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  let i = Math.min(num1, num2);
  for (i; i >= 1; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
  return 1;
};

const getGcdNumbers = () => {
  const minValue = 1;
  const maxValue = 50;
  const numberOne = getRandomNumber(minValue, maxValue);
  const numberTwo = getRandomNumber(minValue, maxValue);
  const displayedNumbersCount = `${numberOne} ${numberTwo}`;
  const gcd = getGcd(numberOne, numberTwo);
  return [displayedNumbersCount, gcd.toString()];
};

export default () => {
  game(gameDescription, getGcdNumbers);
};
