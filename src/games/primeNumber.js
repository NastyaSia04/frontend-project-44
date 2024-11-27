import game from '../index.js';
import getRandomNumber from '../../utils.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getIsPrimeNumber = () => {
  const minNumber = 0;
  const maxNumber = 100;
  const displayedNumber = getRandomNumber(minNumber, maxNumber);
  const isPrimeValue = (isPrime(displayedNumber) ? 'yes' : 'no');
  return [displayedNumber, isPrimeValue];
};

export default () => {
  game(gameDescription, getIsPrimeNumber);
};
